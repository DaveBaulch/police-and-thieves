import { Component } from 'react';
import Dropdown from '../Dropdown';

const Forces = ({ forces }) => {
  const renderedList = videos.map((video) => {
    return (
      <Dropdown
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default Forces;
