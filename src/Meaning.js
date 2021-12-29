import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  //console.log(props.mean);
  return (
    <div className="Meaning">
      <h3>{props.mean.partOfSpeech}</h3>

      {props.mean.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <strong>Example: </strong>
              <em>{definition.example}</em>

              <Synonyms synon={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
