import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Result(props) {
  //console.log(props.results);

  if (props.results) {
    return (
      <div className="Result">
        <h2>{props.results.word}</h2>

        <Phonetic phone={props.results.phonetics} />

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
