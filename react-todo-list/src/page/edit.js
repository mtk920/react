import React from "react";
import { Link } from "react-router-dom";

function App() {
  const id = window.location.pathname.split('/edit/')[1];
  console.log(id);
  
  return (
    <div>
      <h1>編集</h1>
      <Link to="/">
        <button>
          ホームへ
        </button>
      </Link>
    </div>
  );
}

export default App;
