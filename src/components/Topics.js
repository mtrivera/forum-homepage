import React from 'react';
import Topic from './Topic';

function Topics(props) {
  const topicsList = props.topics.map(topic => {
    return (
      <Topic
        key={topic.id}
        data={{topic}}
        users={props.users}
      />
    )
  })

  return (
    <ul className="ul--list">
      { topicsList }
    </ul>
  )
}

export default Topics;