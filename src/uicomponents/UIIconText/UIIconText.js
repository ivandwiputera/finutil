import UIIcon from "uicomponents/UIIcon/UIIcon";
import "./UIIconText.css"

const UIIconText = (props) => {
  const icon = props.icon
  const label = props.label
  const title = props.title

  return (
    <div className="ui-icon-text">
      {icon && <UIIcon className="color-primary ui-icon-24" icon={icon} />}
      {(title || label) &&
        <div className="ui-icon-text__text-container">
          {label && <div className="font-size-small color-text-light">{label}</div>}
          {title && <p className="font-weight-medium">{title}</p>}
        </div>
      }
    </div>
  );
}

export default UIIconText;