import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  //console.log(props.phone);
  return (
    <div className="Phonetic">
      <ReactAudioPlayer src={props.phone[0].audio} controls />
      <span>{props.phone[0].text}</span>
    </div>
  );
}
