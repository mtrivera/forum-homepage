import React from 'react';
import Poster from '../components/Poster';

function Posters(props) {
  const posterIds = props.postersData.map(poster => {
    return poster.user_id
  })

  const posterDetails = posterIds.map(poster_id => {
    return props.users.find(user => user.id === poster_id)
  })

  const posters = posterDetails.map(poster => {
    return (
      <Poster
        key={poster.id}
        username={poster.username}
        avatar_url={poster.avatar_template}
      />
    )
  })

  return (
    <ul className="ul--list">
      { posters }
    </ul>
  )
}

export default Posters;