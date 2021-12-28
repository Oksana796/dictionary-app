import React from "react";

export default function Meaning(props) {
  console.log(props.mean);
  return (
    <div className="Meaning">
      <h3>{props.mean.partOfSpeech}</h3>

      {props.mean.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br></br>

              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
