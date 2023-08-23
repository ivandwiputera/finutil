import UIIcon from "uicomponents/UIIcon/UIIcon"
import "./UIButton.css"

const UIButton = (props) => {
  const className = props.className
  const title = props.title
  const icon = props.icon
  const onClick = props.onClick

  return (
    <button className={`ui-button ${className}`}
            onClick={onClick}>
      {title}
      {icon && <UIIcon className="ui-icon-16" icon={icon}/>}
    </button>
  );
}
 
export default UIButton;