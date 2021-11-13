import React from "react";

const Post = (park) => {
  return (
    <div>
      <h2>{park.name}</h2>
      <h2>{park.url}</h2>
      <p>{park.designation}</p>
      <p>{park.state}</p>
    </div>
  );
};

export default Post;