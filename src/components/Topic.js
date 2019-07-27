import React from 'react';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import Posters from '../components/Posters';

dayjs.extend(relativeTime);

function Topic(props) {
  const { title, posters, reply_count, 
    views, last_posted_at } = 
    props.data.topic;
    
  return (
    <>
      <h2>{title}</h2>
      <h2>Posters: 
        {
          <Posters 
            postersData={posters} 
          />
        }
      </h2>
      <h2>Replies: {reply_count}</h2>
      <h2>Views: {views}</h2>
      <h2>Activity: 
        {dayjs(last_posted_at).fromNow()}
      </h2>
    </>
  )
}

export default Topic;