import UIIcon from "uicomponents/UIIcon/UIIcon"
import "./UIButton.css"

const UIButton = (props) => {
  const title = props.title
  const icon = props.icon
  const onClick = props.onClick
  const style = {
    backgroundColor: props.backgroundColor
  }

  return (
    <button className="ui-button"
            style={style} 
            onClick={onClick}>
      {title}
      {icon && <UIIcon className="ui-icon-16" icon={icon}/>}
    </button>
  );
}
 
export default UIButton;