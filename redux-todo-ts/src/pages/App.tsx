import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <h1>
        React x TypeScript TODO
      </h1>
      <Link to="/create">
        <button>
          新規作成
        </button>
      </Link>
    </div>
  );
}

export default App;
