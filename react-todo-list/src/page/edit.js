import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();
  const articleId = Math.trunc(window.location.pathname.split('/edit/')[1]);
  const article = lists.find( ({ id }) => id === articleId);
  const inputText = (e) => {
    setName(e.target.value);
  };
  const addList = () => {
    if (!name) return;
    dispatch({
      type: "EDIT_LIST",
      payload: {
        id,
        name,
        complete,
      },
    });
    setName(name);
    setId(id);
  }

  const [id, setId] = useState(articleId)
  const [name, setName] = useState(article.name);
  const [complete, setComplete] = useState(false);
  return (
    <div>
      <h1>編集</h1>
      <input type="text" value={name} onChange={inputText} />
      <button onClick={addList}>
        編集
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
