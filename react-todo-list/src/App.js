import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();
  const doneList = (name) => {
    dispatch({ type: "DONE_LIST", payload: name});
  };
  const deleteList = (name) => {
    dispatch({ type: "DELETE_LIST", payload: name});
  };
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
    <div className="App">
      <h1>
        ReduxでTODOリスト作成
      </h1>
      <h2>
        未完了のTODOリスト
      </h2>
      <ul>
        {lists
          .filter((list) => list.complete === false)
          .map((list, index) => (
            <li key={index}>
              {list.name}
              <button onClick={() => doneList(list.name)}>
                完了
              </button>
              <button onClick={() => deleteList(list.name)}>
                削除
              </button>
            </li>
          ))}
      </ul>
      <h2>
        完了済みのTODOリスト
      </h2>
      <ul>
        {lists
          .filter((list) => list.complete === true)
          .map((list, index) => (
            <li key={index}>{list.name}</li>
          ))}
      </ul>
      <input type="text" value={name} onChange={inputText} />
      <button onClick={addList}>
        追加
      </button>
    </div>
  );
}

export default App;
