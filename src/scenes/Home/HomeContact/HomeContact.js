import "./HomeContact.css"
import UICard from "uicomponents/UICard/UICard";
import UIDivider from "uicomponents/UIDivider/UIDivider";
import UIHeaderText from "uicomponents/UIHeaderText/UIHeaderText";
import UIIconText from "uicomponents/UIIconText/UIIconText";

const HomeContact = () => {
  return (
    <div id="home-contact" className="home-contact-container">
      <UIHeaderText
        className="text-align-center ml-200 mr-200"
        title="Contact Me"
        description="Feel free to contact me to discuss about personal finance and budgeting."
      />
      <UICard className="home-contact-card user-interaction-disabled mt-100">
        <UIIconText icon="envelope" label="Email" title="ivan.dwiputera@gmail.com" />
        <UIDivider />
        <UIIconText icon="atSymbol" label="Instagram" title="@ivandwiputera" />
      </UICard>
    </div>

  );
}

export default HomeContact;