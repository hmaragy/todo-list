const Button = props => {
  return (
    <button
      onClick={props.onClick}
      className={`${props.className || ""} 
        text-accent-dark border-2 border-accent-dark py-0.5 px-2 hover:bg-accent-dark hover:text-secondary transition-all transform-gpu flex justify-items-center items-center`}
    >
      {props.icon && <props.icon className={"mr-2"} />}
      {props.children}
    </button>
  );
};

export default Button;
