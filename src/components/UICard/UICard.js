import "./UICard.css"

const UICard = (props) => {
  const className = props.className
  const children = props.children
  const onClick = props.onClick

  return ( 
    <div className={`ui-card ${className}`}
         onClick={onClick}>
      {children}
    </div>
  );
}
 
export default UICard;