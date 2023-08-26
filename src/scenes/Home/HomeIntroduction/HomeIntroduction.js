import "./HomeIntroduction.css"
import UIImageTextColumn from "uicomponents/UIImageText/UIImageText";
import image from "assets/images/img-profile.jpg"
import { UIIconType } from "uicomponents/UIIcon/UIIcon";

const HomeIntroduction = (props) => {
  const onButtonClick = props.onButtonClick
  return (
    <div className="home-introduction-container">
      <UIImageTextColumn
        title={HomeIntroductionCopy.title}
        subtitle={HomeIntroductionCopy.subtitle}
        description={HomeIntroductionCopy.description}
        imageSrc={image}
        imageClassModifiers="img-masking-blobs"
        buttonTitle={HomeIntroductionCopy.buttonTitle}
        buttonIcon={UIIconType.envelope}
        buttonOnClick={onButtonClick}
      />
    </div>
  );
}

const HomeIntroductionCopy = {
  title: "Hi, I'm Ivan",
  subtitle: "Personal Finance Enthusiasts",
  description: "Someone who loves and cares about personal finance & budgeting. Send me a message to talk about personal finance.",
  buttonTitle: "Contact me"
}

export default HomeIntroduction