import React, { useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  const inputText = (e) => {
    setName(e.target.value);
  };
  const addList = () => {
    if (!name) return;
    dispatch({
      type: "ADD_LIST",
      payload: {
        name,
        complete,
      },
    });
    setName("");
  }

  const [name, setName] = useState("");
  const [complete, setComplete] = useState(false);

  return (
    <div className="create">
      <h1>
        リスト追加
      </h1>
      <input type="text" value={name} onChange={inputText} />
      <button onClick={addList}>
        追加
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
