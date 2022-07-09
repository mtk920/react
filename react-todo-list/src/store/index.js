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
        lists: state.lists.filter((list) => list.name !== action.payload),
        nextId: state.nextId,
      };
    case "ADD_LIST":
      action.payload = {
        id: state.nextId,
        ...action.payload
      };
      console.log(action.payload);
      const addedList = [
        ...state.lists,
        action.payload,
      ];
      return {
        lists: addedList,
        nextId: state.nextId + 1,
      };
    case "EDIT_LIST":
      console.log('aaaaaaa');
      console.log(action.payload);
      console.log(state.lists.filter(({id}) => id !== action.payload.id));
      const editList = [
        ...state.lists.filter(({id}) => id !== action.payload.id),
        action.payload,
      ];
      return {
        lists: editList,
        nextId: state.nextId,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
