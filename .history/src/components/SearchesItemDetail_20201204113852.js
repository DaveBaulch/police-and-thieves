import React from 'react';

const SearchesItemDetail = ({ searchItem }) => {


  return (
    <div class="app">
      <div className="ui embed">
        <iframe
          // width="560"
          // height="315"
          src={videoSrc}
          title="Video player"
          // frameborder="0"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowfullscreen
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default SearchesItemDetail;
