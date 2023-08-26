import "./HomeContact.css"
import UICard from "uicomponents/UICard/UICard";
import UIDivider from "uicomponents/UIDivider/UIDivider";
import UIHeaderText from "uicomponents/UIHeaderText/UIHeaderText";
import UIIconText from "uicomponents/UIIconText/UIIconText";
import { UIIconType } from "uicomponents/UIIcon/UIIcon";
import Localise from "localisation/Localise";
import { LocaliseKey } from "localisation/Localise";

const HomeContact = () => {
  return (
    <div id="home-contact" className="home-contact-container">
      <UIHeaderText
        className="text-align-center"
        title={Localise(LocaliseKey.homeContactTitle)}
        description={Localise(LocaliseKey.homeContactDescription)}
      />
      <UICard className="home-contact-card">
        <UIIconText
          icon={UIIconType.envelope}
          label={Localise(LocaliseKey.homeContactEmailLabel)}
          title={Localise(LocaliseKey.homeContactEmailValue)} />
        <UIDivider />
        <UIIconText
          icon={UIIconType.atSymbol}
          label={Localise(LocaliseKey.homeContactInstagramLabel)}
          title={Localise(LocaliseKey.homeContactInstagramValue)} />
      </UICard>
    </div>

  );
}

export default HomeContact;