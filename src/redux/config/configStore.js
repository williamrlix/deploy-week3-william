import { createStore } from "redux";
import { combineReducers } from "redux";
import todoReducer from "../modules/todos.js";

const rootReducer = combineReducers({
  todos: todoReducer,
});
const store = createStore(rootReducer);

export default store;
