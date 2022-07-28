import React from "react";
import "./Home/style.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

class PlayingMusic extends React.Component {
  render() {
    return (
      <>
        <AudioPlayer
          className="song-footer"
          src="http://example.com/audio.mp3"
          layout="stacked-reverse"
          showSkipControls={true}
          showJumpControls={false}
        />
      </>
    );
  }
}
export default PlayingMusic;
