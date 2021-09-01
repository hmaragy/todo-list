const Card = props => {
  return (
    <div
      className={`${
        props.className || ""
      } transition-shadow delay-200 shadow-md hover:shadow-sm`}
    >
      {props.children}
    </div>
  );
};
export default Card;
