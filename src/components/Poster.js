import React from 'react';

function setSize(str, newSize) {
  return str.replace('{size}', newSize);
}

function removeEscape(str) {
  return str.replace('\\', '');
}

function Poster(props) {
  return (
    <>
      <h2>{props.username}</h2>
      <h3>{props.avatar_url}</h3>
    </>
  )
}

export default Poster;