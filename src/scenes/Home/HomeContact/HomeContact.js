import "./HomeContact.css"
import UICard from "uicomponents/UICard/UICard";
import UIDivider from "uicomponents/UIDivider/UIDivider";
import UIIconText from "uicomponents/UIIconText/UIIconText";
import UIImageTextColumn from "uicomponents/UIImageTextColumn/UIImageTextColumn";

const HomeContact = () => {
  return (
    <div className="home-contact-container">
      <div id="home-contact">
        <UIImageTextColumn
          title="Contact Me"
          description="Feel free to contact me to discuss about personal finance and budgeting."
          textAlignment="center"
        />
        <UICard className="home-contact-card user-interaction-disabled">
          <UIIconText icon="envelope" label="Email" title="ivan.dwiputera@gmail.com" />
          <UIDivider />
          <UIIconText icon="atSymbol" label="Instagram" title="@ivandwiputera" />
        </UICard>

      </div>
    </div>

  );
}

export default HomeContact;