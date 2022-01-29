import styles from './css/app.module.scss'
import React from 'react'
import YouTube from 'react-youtube';

class App extends React.Component<{}, {videoId: string}> {
  state = {
    videoId: "dvgZkm1xWPE"
  }

  render() {
    return <>
      <div className={styles.container}>
        <div className={styles.title}>Youtube</div>
        <YouTube
          videoId={this.state.videoId}
        />
        <input type="text" value={this.state.videoId} className={styles.input} onInput={(e) => {
          this.setState({
            videoId: e.currentTarget.value
          });
        }}/>
      </div>
    </>
  }
}

export default App;
