import { createStore } from "redux";

const initialState = {
  lists: [
    {
      id: 1,
      name: "ブログを確認",
      complete: false,
    },
    {
      id: 2,
      name: "メールの返信",
      complete: false,
    },
  ],
  nextId: 3,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DONE_LIST":
      return {
        lists: state.lists.map((list) => {
          if (list.name !== action.payload) return list;
          return {
            ...list,
            complete: true,
          };
        }),
      };
      case "DELETE_LIST":
        return {
          lists: state.lists.filter((list) => list.name !== action.payload)
        };
      case "ADD_LIST":
        action.payload = {
          id: state.nextId,
          ...action.payload
        };
        return {
          lists: [...state.lists, action.payload],
          nextId: state.nextId + 1,
        };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
