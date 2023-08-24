import UICard from "uicomponents/UICard/UICard";
import UIIcon from "uicomponents/UIIcon/UIIcon";
import "./UIIconTextCard.css"

const UIIconTextCard = (props) => {
  const icon = props.icon
  const text = props.text
  const className = props.className
  const onClick = props.onClick

  return (
    <UICard className={className} onClick={onClick}>
      <div className="ui-icon-text-card">
        {icon && <UIIcon className="color-primary ui-icon-32" icon={icon} />}
        {text && <div className="text-align-left font-weight-medium font-size-small color-text mt-50">{text}</div>}
      </div>
    </UICard>

  );
}

export default UIIconTextCard;