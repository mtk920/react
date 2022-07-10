import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function App() {
  const inputText = (e: any) => {
    setName(e.target.value);
  };

  const dispatch = useDispatch();

  const addTodo = () => {
    if (!name) return;
    dispatch({
      type: "ADD_TODO",
      payload: {
        name: name,
        complete: complete,
      },
    })
    setName('');
  }

  const [name, setName] = useState<string>('');
  const [complete, setComplete] = useState<boolean>(false);

  return (
    <div className="App">
      <h1>
        新規作成
      </h1>
      <input type="text" onChange={inputText}></input>
      <button onClick={addTodo}>
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
