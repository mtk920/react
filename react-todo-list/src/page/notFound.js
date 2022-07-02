import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>404</h1>
      <h3>お探しのページは見つかりませんでした。</h3>
      <Link to="/">
        <button>
          ホームへ
        </button>
      </Link>
    </div>
  );
}

export default App;
