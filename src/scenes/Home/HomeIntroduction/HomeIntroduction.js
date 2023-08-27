import "./HomeIntroduction.css"
import UIImageTextColumn from "uicomponents/UIImageText/UIImageText";
import image from "assets/images/img-profile.jpg"
import { UIIconType } from "uicomponents/UIIcon/UIIcon";
import Localise, { LocaliseKey } from "localisation/Localise";

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