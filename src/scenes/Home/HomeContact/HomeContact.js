import UICard from "@components/UICard/UICard";
import UIDivider from "@components/UIDivider/UIDivider";
import UIHeaderText from "@components/UIHeaderText/UIHeaderText";
import { UIIconType } from "@components/UIIcon/UIIcon";
import UIIconText from "@components/UIIconText/UIIconText";
import { Copy, useLocalise } from "@localisations/Localise";
import { LinkUtils } from "@utils/LinkUtils";

import "./HomeContact.css";

const HomeContact = () => {
  const { localise } = useLocalise()

  return (
    <div id="home-contact" className="home-contact-container">
      <UIHeaderText
        className="text-align-center"
        title={localise(Copy.homeContactTitle)}
        description={localise(Copy.homeContactDescription)}
      />
      <UICard className="home-contact-card no-hover">
        <div className="home-contact-card-item">
          <UIIconText
            icon={UIIconType.envelope}
            label={localise(Copy.homeContactEmailLabel)}
            title={localise(Copy.homeContactEmailValue)}
            link={LinkUtils.getMailToLink(localise(Copy.homeContactEmailValue))} />
        </div>
        <UIDivider />
        <div className="home-contact-card-item">
          <UIIconText
            icon={UIIconType.atSymbol}
            label={localise(Copy.homeContactInstagramLabel)}
            title={localise(Copy.homeContactInstagramValue)}
            link={LinkUtils.getInstagramLink(localise(Copy.homeContactInstagramValue))} />
        </div>
      </UICard>
    </div>
  );
}

export default HomeContact;