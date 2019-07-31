import React from 'react';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import Posters from '../components/Posters';

dayjs.extend(relativeTime);

function Topic(props) {
  const { id, title, posters, reply_count, 
    views, last_posted_at } = 
    props.data.topic;
    
  return (
    <>
      <span className="span--text-title">
        <a href={`https://www.freecodecamp.org/forum/t/${id}`} rel="noopener noreferrer">
        {title}
        </a>
      </span>
      <span className="span--image-list">
        {
          <Posters 
            postersData={posters} 
          />
        }
      </span>
      <span className="span--number">{reply_count}</span>
      <span className="span--number">{views}</span>
      <span className="span--date-lastpost">
        {dayjs(last_posted_at).fromNow()}
      </span>
    </>
  )
}

export default Topic;