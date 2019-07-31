import React from 'react';
import Topic from './Topic';
import topicData from '../static_data/topics_data';

function Topics(props) {
  const topicsList = topicData.topics.map(topic => {
    return (
      <li>
        <Topic key={props.id} 
          data={{topic}}
        />
      </li>
    )
  })  

  return (
    <ul className="ul--list">
      { topicsList }
    </ul>
  )
}

export default Topics;