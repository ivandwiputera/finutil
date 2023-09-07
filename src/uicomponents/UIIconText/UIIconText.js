import UIIcon from "uicomponents/UIIcon/UIIcon";
import "./UIIconText.css"

const UIIconText = (props) => {
  const icon = props.icon
  const label = props.label
  const title = props.title
  const link = props.link

  return (
    <a className="ui-icon-text" href={link}>
      {icon && <UIIcon className="color-primary ui-icon-24" icon={icon} />}
      {(title || label) &&
        <div className="ui-icon-text__text-container">
          {label && <div className="font-size-small color-text-light">{label}</div>}
          {title && <div className="font-weight-medium color-text">{title}</div>}
        </div>
      }
    </a>
  );
}

export default UIIconText;