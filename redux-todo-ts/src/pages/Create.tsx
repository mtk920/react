import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <h1>
        新規作成
      </h1>
      <input type="text"></input>
      <button>
        新規作成
      </button>
      <Link to="/">
        <button>
          ホームへ
        </button>
      </Link>
    </div>
  );
}

export default App;
