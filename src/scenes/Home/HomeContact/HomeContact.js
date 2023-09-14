import UICard from "@components/UICard/UICard";
import UIDivider from "@components/UIDivider/UIDivider";
import UIHeaderText from "@components/UIHeaderText/UIHeaderText";
import { UIIconType } from "@components/UIIcon/UIIcon";
import UIIconText from "@components/UIIconText/UIIconText";
import Localise, { LocaliseKey } from "@localisations/Localise";
import { LinkUtils } from "utils/LinkUtils";

import "./HomeContact.css";

const HomeContact = () => {
  return (
    <div id="home-contact" className="home-contact-container">
      <UIHeaderText
        className="text-align-center"
        title={Localise(LocaliseKey.homeContactTitle)}
        description={Localise(LocaliseKey.homeContactDescription)}
      />
      <UICard className="home-contact-card no-hover">
        <div className="home-contact-card-item">
          <UIIconText
            icon={UIIconType.envelope}
            label={Localise(LocaliseKey.homeContactEmailLabel)}
            title={Localise(LocaliseKey.homeContactEmailValue)}
            link={LinkUtils.getMailToLink(Localise(LocaliseKey.homeContactEmailValue))} />
        </div>
        <UIDivider />
        <div className="home-contact-card-item">
          <UIIconText
            icon={UIIconType.atSymbol}
            label={Localise(LocaliseKey.homeContactInstagramLabel)}
            title={Localise(LocaliseKey.homeContactInstagramValue)}
            link={LinkUtils.getInstagramLink(Localise(LocaliseKey.homeContactInstagramValue))} />
        </div>
      </UICard>
    </div>

  );
}

export default HomeContact;