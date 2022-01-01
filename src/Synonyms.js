import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  //console.log(props.synon);
  if (props.synon) {
    return (
      <ul className="Synonyms">
        {props.synon.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
