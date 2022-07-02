import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();
  const doneList = (name) => {
    dispatch({ type: "DONE_LIST", payload: name});
  };
  

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
    </div>
  );
}

export default App;
