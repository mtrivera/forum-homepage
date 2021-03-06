import axios from 'axios';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Topics from './components/Topics';

class App extends React.Component {
  state = {
    error: null,
    users: [],
    topics: [],
    isLoaded: false
  }

  componentDidMount() {
    this.getAPIData();
  }

  getAPIData = async() => {
    try {
      let res = await axios.get('https://buttercup-island.glitch.me/latest');
      let { users } = res.data;
      let { topics } = res.data.topic_list;
      this.setState({
        users,
        topics,
        isLoaded: true
      });
    } catch(error) {
      this.setState({
        error,
        isLoaded: true
      });
    }
  }

  render() {
    return (
      <>
        <main className="container">
          <Header />
          {
            !this.state.isLoaded &&
            <h2>Loading latest posts from server...</h2>
          }
          {
            this.state.error &&
            <h2>{this.state.error}</h2>
          }
          <Topics
            topics={this.state.topics}
            users={this.state.users}
          />
          <Footer />
        </main>
      </>
    );
  }
}

export default App;
