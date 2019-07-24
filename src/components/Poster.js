import React from 'react';

const HOME_URL = 'https://freecodecamp.org';
const AVATAR_SIZE = 25;

function Poster(props) {
  const formattedURL = props.avatar_url
    .replace('\\', '')
    .replace('{size}', AVATAR_SIZE);

  const avatarUrl = HOME_URL.concat(formattedURL);

  return (
    <>
      <img className="circle"
        src={avatarUrl} 
        alt={props.username} 
      />
    </>
  )
}

export default Poster;