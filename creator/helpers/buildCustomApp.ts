import glob from 'glob'
import colors from 'colors/safe'
import fs from 'fs'
import path from 'path'
import { ICustomAppManifest, ICustomAppSettings, IExtensionSettings } from './models'
import extractFiles from './extractFiles'
const esbuild = require("esbuild")

export default async (settings: ICustomAppSettings, outDirectory: string, watch: boolean, esbuildOptions: any) => {
  const extensions = await glob.sync("./src/extensions/*(*.ts|*.tsx|*.js|*.jsx)");
  const extensionsNewNames = extensions.map(e => e.substring(0, e.lastIndexOf(".")) + ".js");

  // Clear outDirectory
  fs.readdir(outDirectory, (err, files) => {
    if (err) throw err;
    for (const file of files) {
      fs.unlink(path.join(outDirectory!, file), err => {
        if (err) throw err;
      });
    }
  });

  console.log("Generating manifest.json...")
  const customAppManifest = <ICustomAppManifest>{
    name: settings.displayName,
    icon: fs.readFileSync(path.join('./src', settings.icon), 'utf-8'),
    "active-icon": fs.readFileSync(path.join('./src', settings.activeIcon), 'utf-8'),
    subfiles: [],
    subfiles_extension: extensionsNewNames.map(e => path.basename(e))
  }
  fs.writeFileSync(path.join(outDirectory, "manifest.json"), JSON.stringify(customAppManifest, null, 2))

  esbuild.build({
    entryPoints: [`./creator/custom-app/index.tsx`, ...extensions],
    outdir: outDirectory,
    ...esbuildOptions,
    watch: (watch ? {
      async onRebuild(error: any, result: any) {
        if (error)
          console.error(error)
        else {
          await afterBundle();
        }
      },
    } : undefined),
  }).then(async (r: any) => {
    await afterBundle();
    return r;
  })

  const afterBundle = async () => {
    console.log("Moving files out of folders...");
    extractFiles(outDirectory, true);

    console.log("Adding react and react-dom...")
    const jsFiles = await glob.sync(path.join(outDirectory, "/*(*.ts|*.tsx|*.js|*.jsx)"));
    jsFiles.forEach(jsFile => {
      const data = fs.readFileSync(jsFile, 'utf-8').split("\n");
      const appendAbove = data.findIndex((l) => l.includes(`if (typeof require !== "undefined")`))
      if (appendAbove !== -1) {
        data.splice(appendAbove, 0,        `if (x === "react") return Spicetify.React;`);
        data.splice(appendAbove + 1, 0,    `if (x === "react-dom") return Spicetify.ReactDOM;`);
        fs.writeFileSync(jsFile, data.join("\n")+"\n");
      }
    })

    console.log("Modifying index.js...")
    fs.appendFileSync(path.join(outDirectory, "index.js"), `const render=()=>${esbuildOptions.globalName}.default();\n`);

    console.log("Renaming index.css...")
    if (fs.existsSync(path.join(outDirectory, "index.css")))
      fs.renameSync(path.join(outDirectory, "index.css"), path.join(outDirectory, "style.css"))
    
    console.log(colors.green('Build succeeded.'));
  }
}