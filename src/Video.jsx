import React, { useRef, useState } from "react";
import Footer from "./FooterLeft";
import FooterRight from "./FooterRight";
import "./Video.css";

export default function Video(props) {
  const videoRef = useRef(null);
  const { url, channel, description, song, likes, shares, messages } = props;
  const [pause, setpause] = useState();
  const onVideoPress = () => {
    // write toggle logic here
    if (videoRef.current.paused) {
      videoRef.current.play();
      setpause("2");
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className="video">
      <video
        className="player"
        onClick={onVideoPress}
        ref={videoRef}
        loop
        src={url}
      ></video>
      <div className="bottom-controls">
        <Footer
          direction="left"
          channel={channel}
          scrollamount={pause}
          description={description}
          song={song}
        />
        <FooterRight
          direction="right"
          shares={shares}
          likes={likes}
          messages={messages}
        />
      </div>
    </div>
  );
}
