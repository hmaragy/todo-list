import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Input from "./components/Input";
import Card from "./components/Card";
import Button from "./components/Button";
import TodoItem from "./components/TodoItem";

const selectTodos = state => state.todos;
const selectFilters = state => state.filters;

function App() {
  const todos = useSelector(selectTodos);
  const filters = useSelector(selectFilters);

  const [checkedTodos, setCheckedTodos] = useState({});

  const dispatch = useDispatch();

  function handleAddTodo(todoText) {
    dispatch({ type: "todos/added", payload: todoText });
  }

  function handleTodoChecked(id, checked) {
    setCheckedTodos(old => {
      return {
        ...old,
        [id]: checked,
      };
    });
  }

  function handleFilter(filter) {
    dispatch({ type: "filters/statusChanged", payload: filter });
  }

  function markComplete(completed) {
    Object.keys(checkedTodos).forEach(id => {
      if (checkedTodos[id]) {
        dispatch({
          type: "todos/completed",
          payload: { id: +id, completed: completed },
        });
      }
    });
  }

  function deleteTodos() {
    Object.keys(checkedTodos).forEach(id => {
      if (checkedTodos[id]) {
        dispatch({ type: "todos/deleted", payload: +id });
      }
    });
  }

  const todoList = todos
    ?.map(todo => {
      return (
        <TodoItem
          onChange={handleTodoChecked}
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
        >
          {todo.text}
        </TodoItem>
      );
    })
    /* The filter Pipe, instead of filtering in redux */
    .filter(todo => {
      if (filters.status === "all") return true;
      else {
        if (filters.status === "completed" && todo.props.completed) {
          return true;
        } else if (filters.status === "active" && !todo.props.completed)
          return true;
        else return false;
      }
    });

  return (
    <div className="bg-secondary h-screen flex flex-col justify-center items-center">
      <h1 className="text-accent-dark font-mono text-6xl mb-4">Todos</h1>
      <Card className="bg-white w-11/12 lg:w-1/2 md:w-2/3">
        <Input onClick={handleAddTodo} />
        <div
          id="todo-list"
          className="h-80 grid grid-flow-row items-center content-start overflow-y-auto"
        >
          {todoList}
        </div>
        <div
          id="tools"
          className="grid grid-cols-1 sm:grid-cols-2 justify-items-start p-4"
        >
          <div id="actions" className="mb-4 sm:mb-0">
            <h2 className="mb-2">Actions</h2>
            <Button onClick={() => markComplete(true)} className="mb-2">
              Mark completed
            </Button>
            <Button onClick={() => markComplete(false)} className="mb-2">
              Clear completed
            </Button>

            <Button onClick={deleteTodos} className="mb-2">
              Delete
            </Button>
          </div>

          <div className="filter">
            <h2 className="mb-2">Filter by status</h2>
            <Button
              onClick={() => handleFilter("all")}
              className={`${"mb-2"} ${
                filters.status === "all" ? "bg-accent-dark text-white" : ""
              }`}
            >
              All
            </Button>
            <Button
              onClick={() => handleFilter("active")}
              className={`${"mb-2"} ${
                filters.status === "active" ? "bg-accent-dark text-white" : ""
              }`}
            >
              Active
            </Button>
            <Button
              onClick={() => handleFilter("completed")}
              className={`${"mb-2"} ${
                filters.status === "completed"
                  ? "bg-accent-dark text-white"
                  : ""
              }`}
            >
              Complete
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
