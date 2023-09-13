import { UIIconType } from "@components/UIIcon/UIIcon";
import UIImageTextColumn from "@components/UIImageText/UIImageText";
import Localise, { LocaliseKey } from "@localisation/Localise";
import image from "@images/img-profile.jpg";

import "./HomeIntroduction.css";

const HomeIntroduction = (props) => {
  const onButtonClick = props.onButtonClick
  return (
    <div className="home-introduction-container">
      <UIImageTextColumn
        title={Localise(LocaliseKey.homeIntroductionTitle)}
        subtitle={Localise(LocaliseKey.homeIntroductionSubtitle)}
        description={Localise(LocaliseKey.homeIntroductionDescription)}
        imageSrc={image}
        imageClassModifiers="img-masking-blobs"
        buttonTitle={Localise(LocaliseKey.homeIntroductionButtonTitle)}
        buttonIcon={UIIconType.envelope}
        buttonOnClick={onButtonClick}
      />
    </div>
  );
}

export default HomeIntroduction