import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  //console.log(props.results);

  if (props.results) {
    return (
      <div className="Result">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning mean={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}