import { useNavigate } from "react-router-dom";
import UIIcon, { UIIconType } from "@components/UIIcon/UIIcon";

import "./BackButton.css";

const BackButton = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(-1)
  }

  return (
    <div className="back-button" onClick={onClick}>
      <UIIcon
        className="ui-icon-medium color-text"
        icon={UIIconType.arrowLeft}
      />
    </div>
  );
}

export default BackButton;