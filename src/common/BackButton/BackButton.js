import UIIcon, { UIIconType } from "@components/UIIcon/UIIcon";
import { useNavigation } from "@utils/Navigation";

import "./BackButton.css";

const BackButton = () => {
  const { navigateBack } = useNavigation()

  const onClick = () => {
    navigateBack()
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