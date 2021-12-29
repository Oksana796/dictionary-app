import React from "react";

export default function Synonims(props) {
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
