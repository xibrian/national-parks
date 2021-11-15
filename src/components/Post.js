import React from "react";
import './base.css'

const Post = (park) => {

  //const [images, setImages] = useState(null);

  function findImages(park) {
      console.log(park);
      const url = "https://developer.nps.gov/api/v1/webcams?parkCode=" + park.parkCode + "&api_key=9EgzNdOHHgIrzuN7bPg4S4gHOdBQN55oqN2i6RAc";
      console.log(url);
      fetch(url)
          .then(response => response.json())
          .then(data => console.log(data));
    
      //console.log(images);
  }

  return (
    <div className="parkListing">
      <h2>{park.name}</h2>
      <a href={park.url} target="_blank" rel="noreferrer">{park.url}</a>
      
      <p>{park.designation} in {park.state}</p>
      <button className='imageButton' onClick={() => findImages(park)}>
          <p>Click to view park images</p>
      </button>
    </div>
  );
};

export default Post;