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
      <img className="img--image-circle"
        src={avatarUrl}
        title={props.username}
        alt=''
      />
    </>
  )
}

export default Poster;