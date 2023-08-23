import "./HomeIntroduction.css"
import UIImageTextColumn from "uicomponents/UIImageTextColumn/UIImageTextColumn";
import image from "assets/images/img-profile.jpg"

const HomeIntroduction = () => {
  return (
    <div>
      <UIImageTextColumn
        title="Hi, I'm Ivan"
        subtitle="Personal Finance Enthusiasts"
        description="A person who loves and cares about personal finance & budgeting. Feel free to send me message to talk about personal finance."
        imageSrc={image}
        imageClassModifiers="img-masking-blobs"
        buttonTitle="Contact me"
        buttonIcon="envelope"
        buttonOnClick={() => {
          document.getElementById("home-contact").scrollIntoView()
        }}
      />
    </div>
  );
}

export default HomeIntroduction