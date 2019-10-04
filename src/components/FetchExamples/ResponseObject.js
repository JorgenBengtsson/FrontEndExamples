import React from "react";

function ResponseObject() {
  fetch(
    "https://api.themoviedb.org/3/search/movie?query=Rambo&api_key=247c47936bed65959f5837b6aa7bbce9&language=en-US&page=1&include_adult=false"
  ).then(response => {
    console.log("ResponseObject: " + response.headers.get("Content-Type"));
    console.log("ResponseObject: " + response.headers.get("Date"));
    console.log("ResponseObject: " + response.status);
    console.log("ResponseObject: " + response.statusText);
    console.log("ResponseObject: " + response.url);
    console.log("ResponseObject: " + response);
  });
  return <p>Check console for print of this example</p>;
}

export default ResponseObject;
