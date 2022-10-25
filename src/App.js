import "./App.css";
import React, { useEffect, useState } from "react";
import Video from "./Video";

const API_URL =
  "https://raw.githubusercontent.com/codedamn-classrooms/tiktok-react-material/main/data.json";
function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((data) => data.json())
      .then((data) => setVideos(data));
  }, []);
  return (
    <div className="App">
      <div className="container">
        {videos.map((video) => {
          return (
            <Video
              key={video.url}
              channel="unknown"
              description={video.description}
              song={video.song}
              likes={video.likes}
              shares={video.shares}
              messages={video.messages}
              url={video.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
