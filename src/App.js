import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Topics from './components/Topics';

function App() {
  return (
    <>
      <main className="container">
        <Header />
        <Topics />
        <Footer />
      </main>
    </>
  );
}

export default App;
