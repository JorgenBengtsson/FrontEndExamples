import React from "react";

function PostRequest() {
  const data = {
    username: "newuser1",
    password: "password1"
  };
  const option = {
    method: "post",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(data)
  };
  fetch("http://localhost:52468/api/users", option).catch(err =>
    console.log("PostRequest: " + err)
  );
  return <p>Makes a post to BackEnd end-point, no result is shown</p>;
}

export default PostRequest;
