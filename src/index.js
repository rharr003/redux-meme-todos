import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = { memes: [], todos: [] };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MEME":
      return { memes: [...state.memes, action.meme], todos: state.todos };
    case "REMOVE_MEME":
      const updatedMemes = state.memes.filter((meme) => meme.id !== action.id);
      return { memes: updatedMemes, todos: state.todos };
    case "ADD_TODO":
      return { todos: [...state.todos, action.todo], memes: state.memes };
    case "REMOVE_TODO":
      const updatedTodos = state.todos.filter((todo) => todo.id !== action.id);
      return { todos: updatedTodos, memes: state.memes };
    case "COMPLETE_TODO":
      const updatedTodos2 = state.todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, isCompleted: !todo.completed };
        } else {
          return todo;
        }
      });
      return { todos: updatedTodos2, memes: state.memes };

    default:
      return state;
  }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
