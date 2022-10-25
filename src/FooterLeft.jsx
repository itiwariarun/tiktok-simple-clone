/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import "./FooterLeft.css";
import MusicNoteIcon from "./icons/MusicNote";

export default function VideoFooter({
  channel,
  description,
  song,
  direction,
  scrollamount,
}) {
  return (
    <div className="footer-left">
      <div className="text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="ticker">
          <MusicNoteIcon className="Music" />
          <marquee direction={direction} scrollamount={scrollamount}>
            {song}
          </marquee>
        </div>
      </div>
    </div>
  );
}
