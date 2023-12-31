import UICard from "@components/UICard/UICard";
import UIIcon from "@components/UIIcon/UIIcon";
import "./UIIconTextCard.css"

const UIIconTextCard = (props) => {
  const icon = props.icon
  const text = props.text
  const className = props.className
  const onClick = props.onClick

  return (
    <UICard className={className} onClick={onClick}>
      <div className="ui-icon-text-card">
        {icon && <UIIcon className="color-primary ui-icon-large" icon={icon} />}
        {text && <div className="ui-icon-text-card__label">{text}</div>}
      </div>
    </UICard>

  );
}

export default UIIconTextCard;