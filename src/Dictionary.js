import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [answer, setAnswer] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setAnswer(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    //alert(`Searching for ${keyword}`);

    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    //console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function changeKeyword(event) {
    //console.log(event.target.value);
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={changeKeyword} />
      </form>

      <Result results={answer} />
    </div>
  );
}
