import "./HomeContact.css"
import UICard from "uicomponents/UICard/UICard";
import UIDivider from "uicomponents/UIDivider/UIDivider";
import UIHeaderText from "uicomponents/UIHeaderText/UIHeaderText";
import UIIconText from "uicomponents/UIIconText/UIIconText";
import { UIIconType } from "uicomponents/UIIcon/UIIcon";

const HomeContact = () => {
  return (
    <div id="home-contact" className="home-contact-container">
      <UIHeaderText
        className="text-align-center"
        title={HomeContactCopy.title}
        description={HomeContactCopy.description}
      />
      <UICard className="home-contact-card">
        <UIIconText icon={UIIconType.envelope} label={HomeContactCopy.emailLabel} title={HomeContactCopy.emailValue} />
        <UIDivider />
        <UIIconText icon={UIIconType.atSymbol} label={HomeContactCopy.instagramLabel} title={HomeContactCopy.instagramValue} />
      </UICard>
    </div>

  );
}

const HomeContactCopy = {
  title: "Contact Me",
  description: "Feel free to contact me to talk about personal finance and budgeting.",
  emailLabel: "Email",
  emailValue: "ivan.dwiputera@gmail.com",
  instagramLabel: "Instagram",
  instagramValue: "@ivandwiputera"
}

export default HomeContact;