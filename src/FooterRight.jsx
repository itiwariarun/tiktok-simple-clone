import React, { useState } from "react";
import FavoriteIcon from "./icons/FavoriteIcon";
import FavoriteBorderIcon from "./icons/FavoriteIconBordered";
import MessageIcon from "./icons/Message";
import ShareIcon from "./icons/Share";
import "./FooterRight.css";

function VideoSidebar(props) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="footer-right">
      <div className="sidebar-icon">
        {liked ? (
          <FavoriteIcon
            className="FavoriteIcon borderfav"
            onClick={(e) => setLiked(false)}
          />
        ) : (
          <FavoriteBorderIcon
            className="FavoriteIcon"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{liked ? props.likes + 1 : props.likes}</p>
      </div>
      <div className="sidebar-icon">
        <MessageIcon className="FavoriteIcon" />
        <p>{props.messages}</p>
      </div>
      <div className="sidebar-icon record-below">
        <ShareIcon className="FavoriteIcon" />
        <p>{props.shares}</p>
      </div>
      <div className="sidebar-icon record">
        <img
          src={"https://static.thenounproject.com/png/934821-200.png"}
          alt=""
        />
      </div>
    </div>
  );
}

export default VideoSidebar;
