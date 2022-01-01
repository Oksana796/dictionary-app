import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  //console.log(props.mean);
  return (
    <div className="Meaning">
      <h6>{props.mean.partOfSpeech}</h6>

      {props.mean.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">- {definition.definition}</div>
            <div className="example">{definition.example}</div>
            <Synonyms synon={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
