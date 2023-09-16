import { UIIconType } from "@components/UIIcon/UIIcon";
import UIImageTextColumn from "@components/UIImageText/UIImageText";
import { useLocalise, Copy } from "@localisations/Localise";
import image from "@images/img-profile.jpg";

import "./HomeIntroduction.css";

const HomeIntroduction = (props) => {
  const { localise } = useLocalise()
  
  const onButtonClick = props.onButtonClick
  return (
    <div className="home-introduction-container">
      <UIImageTextColumn
        title={localise(Copy.homeIntroductionTitle)}
        subtitle={localise(Copy.homeIntroductionSubtitle)}
        description={localise(Copy.homeIntroductionDescription)}
        imageSrc={image}
        imageClassModifiers="img-masking-blobs"
        buttonTitle={localise(Copy.homeIntroductionButtonTitle)}
        buttonIcon={UIIconType.envelope}
        buttonOnClick={onButtonClick}
      />
    </div>
  );
}

export default HomeIntroduction