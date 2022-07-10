import { createStore } from "redux";

const initialState = {
  lists: [
    {
      name: "ブログを確認",
      complete: false,
    },
    {
      name: "メールの返信",
      complete: false,
    },
  ],
  nextId: 3,
};

type Action = {
  type: string,
  payload: {
    id: number,
    name: string,
    complete: boolean,
  },
};

const reducer = (state = initialState, action: Action) => {
  switch(action.type){
    case "ADD_TODO":
      action.payload.id = state.nextId;
      const addList = [
        ...state.lists,
        action.payload,
      ];

      return {
        lists: addList,
        nextId: state.nextId + 1,
      };
  }
  return state;
};

const store = createStore(reducer);

export default store;
