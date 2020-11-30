import React from 'react';

const Searches = (props) => {
  console.log('Props:' + props.searches);

  const images = props.searches.map((search) => {
    return <p></p>{image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};
export default Searches;
