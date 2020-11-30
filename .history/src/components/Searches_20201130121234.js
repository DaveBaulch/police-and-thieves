import React from 'react';

const Searches = (props) => {
  console.log('Props:' + props.searches);

  const images = props.images.map((image) => {
    //return <img src={urls.regular} alt={description} key={id} />;
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};
export default Searches;
