import { useEffect, useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import Button from "./Button";

const Input = props => {
  const [todoText, setTodoText] = useState("");
  const [focussed, setFocussed] = useState(false);

  useEffect(() => {
    function onKeypress(e) {
      if (e.keyCode === 13 && focussed) {
        handleClick(todoText);
      }
    }

    document.addEventListener("keypress", onKeypress);

    return () => {
      document.removeEventListener("keypress", onKeypress);
    };
  }, [todoText, focussed]);

  function handleChange(e) {
    setTodoText(e.target.value);
  }

  function handleClick() {
    props.onClick(todoText);
    setTodoText("");
  }

  function handleFocusChange(e) {
    if (e.currentTarget === e.target) {
      if (!focussed) {
        setFocussed(true);
      }
    }
  }

  function handleBlueChange(e) {
    if (e.currentTarget === e.target) {
      if (focussed) {
        setFocussed(false);
      }
    }
  }

  return (
    <div
      className={`${
        props.className || ""
      } transition-all delay-100 relative border-b-8 border-secondary`}
    >
      <input
        value={todoText}
        onChange={handleChange}
        onFocusCapture={handleFocusChange}
        onBlurCapture={handleBlueChange}
        type="text"
        className="w-full h-full p-6 pr-20 outline-none"
        placeholder="Add a todo"
      />
      <Button
        onClick={handleClick}
        icon={BiAddToQueue}
        className="absolute top-1/2 transform-gpu -translate-y-1/2 right-1 border-none active:bg-accent"
      >
        Add
      </Button>
    </div>
  );
};

export default Input;
