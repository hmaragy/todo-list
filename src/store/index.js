import { combineReducers } from "redux";

import filtersReducer from "./filters";
import todosReducer from "./todos";

// export default function rootReducer(state = {}, action) {
//   return {
//     todos: todosReducer(state.todos, action),
//     filters: filtersReducer(state.filters, action),
//   };
// }

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});

export default rootReducer;
