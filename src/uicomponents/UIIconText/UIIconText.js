import UIIcon from "uicomponents/UIIcon/UIIcon";
import "./UIIconText.css"

const UIIconText = (props) => {
  const icon = props.icon
  const label = props.label
  const title = props.title

  return (
    <div className="ui-icon-text">
      {icon && <UIIcon className="ui-icon-text__icon ui-icon-24" icon={icon} />}
      {(title || label) &&
        <div className="ui-icon-text__text-container">
          {label && <div className="ui-icon-text__label">{label}</div>}
          {title && <div className="ui-icon-text__title">{title}</div>}
        </div>
      }
    </div>
  );
}

export default UIIconText;