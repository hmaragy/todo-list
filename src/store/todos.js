const initialState = [];

const todosReducer = (state = initialState, action) => {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "todos/added":
      return [
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
        ...state,
      ];

    case "todos/completed":
      return state.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        }

        return {
          ...todo,
          completed: action.payload.completed,
        };
      });

    case "todos/deleted":
      return state.filter(todo => {
        if (todo.id !== action.payload) {
          return true;
        }
        return false;
      });
    default:
      // care about this specific action, return the existing state unchanged
      return state;
  }
};

export default todosReducer;
