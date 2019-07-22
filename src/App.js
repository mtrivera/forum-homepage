import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import users from './static_data/users_data';
import topics from './static_data/topics_data';
import Posters from './components/Posters';

function App() {
  
  // make posterslist component
  const topicsList = topics.topics.map(topic => {
    return (
      <>
        <li key={topic.title}>
          <h2>{topic.title}</h2>
          <h2>Posters: 
            <Posters 
              postersData={topic.posters} 
            />
          </h2>
          <h2>Replies: {topic.reply_count}</h2>
          <h2>Views: {topic.views}</h2>
        </li>
      </>
    )
  })

  return (
    <>
      <Header />
      { <ul>{topicsList}</ul> }
      <Footer />
    </>
  );
}

export default App;
