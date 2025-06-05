import React from 'react';

  const block = 
  {
     padding: "30px" 
    };
  const nameStyle = 
  { 
    fontSize: "32px", 
    color: "black" 
};
  const detailsStyle = 
  { 
    fontSize: "16px", 
    color: "grey" 
};
  const imageStyle = 
  {
     width: "200px" 
    };


export function Cards(props) 
{
  return (
    <div style={block}>
      <div style={nameStyle}>{props.name}</div>
      <img src={props.imageUrl} alt={props.name} style={imageStyle} />
      <div style={detailsStyle}>{props.details}</div>
    </div>
  );
}
