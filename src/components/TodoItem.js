const TodoItem = props => {
  function handleChange(e) {
    props.onChange(props.id, e.target.checked);
  }

  return (
    <div
      id="todo"
      className="flex items-center border-b-2 px-4 border-secondary cursor-pointer hover:bg-accent hover:text-white"
    >
      <input
        onChange={handleChange}
        id={"check" + props.id}
        type="checkbox"
        className="mr-2 cursor-pointer"
      />
      <label
        htmlFor={"check" + props.id}
        className="w-full h-full cursor-pointer p-4"
      >
        {props.children}
      </label>
    </div>
  );
};

export default TodoItem;
