import React from "react";

function BodyContent() {
  fetch(
    "https://api.themoviedb.org/3/search/movie?query=Rambo&api_key=247c47936bed65959f5837b6aa7bbce9&language=en-US&page=1&include_adult=false"
  )
    .then(res => res.text())
    .then(body => console.log("BodyContent: " + body));
  return <p>Check console for print of this example</p>;
}

export default BodyContent;
