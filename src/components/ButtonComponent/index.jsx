export default function ButtonCustom(props) {
  const { onClick, name, className, icon, styleName } = props;
  let classDefault = "";
  if (className !== "") classDefault += " " + className;
  return (
    <button className={classDefault} onClick={onClick}>
      <span className={styleName}>{name}</span>
      {icon}
    </button>
  );
}
