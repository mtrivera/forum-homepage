import React from 'react';

function Header() {
  return (
    <header>
      <h1 className="txt-center">
        freeCodeCamp Forum Homepage
      </h1>
      <div>
        <span className="span--text-title">Title</span>
        <span className="span--image-list">Posters</span>
        <span className="span--number">Replies</span>
        <span className="span--number">Views</span>
        <span>Activity</span>
      </div>
    </header>
  );
}

export default Header;