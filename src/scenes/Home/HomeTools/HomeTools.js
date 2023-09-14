import UIHeaderText from "@components/UIHeaderText/UIHeaderText";
import { UIIconType } from "@components/UIIcon/UIIcon";
import UIIconTextCard from "@components/UIIconTextCard/UIIconTextCard";
import Localise, { LocaliseKey } from "@localisations/Localise";
import { ScreenType } from "ScreenType";

import "./HomeTools.css";

const HomeTools = (props) => {
  const onItemClick = props.onItemClick

  return (
    <div className="home-tools-container">
      <UIHeaderText
        className="text-align-center"
        title={Localise(LocaliseKey.homeToolsTitle)}
        description={Localise(LocaliseKey.homeToolsDescription)}
      />
      <div className="home-tools-grid">
        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.chartPie}
          text={Localise(LocaliseKey.homeToolsBudgeting503020Calculator)}
          onClick={() => { onItemClick(ScreenType.budget503020Calculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.exclamationTriangle}
          text={Localise(LocaliseKey.homeToolsEmergencyFundsCalculator)}
          onClick={() => { onItemClick(ScreenType.emergencyFundsCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.rocketLaunch}
          text={Localise(LocaliseKey.homeToolsInvestmentReturnCalculator)}
          onClick={() => { onItemClick(ScreenType.investmentReturnCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.faceSmile}
          text={Localise(LocaliseKey.homeToolsRetirementCalculator)}
          onClick={() => { onItemClick(ScreenType.retirementCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.flag}
          text={Localise(LocaliseKey.homeToolsGoalContributionCalculator)}
          onClick={() => { onItemClick(ScreenType.goalContributionCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.flag}
          text={Localise(LocaliseKey.homeToolsGoalDurationCalculator)}
          onClick={() => { onItemClick(ScreenType.goalDurationCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.bank}
          text={Localise(LocaliseKey.homeToolsMortgageCalculator)}
          onClick={() => { onItemClick(ScreenType.mortgageCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.home}
          text={Localise(LocaliseKey.homeToolsHouseAffordabilityCalculator)}
          onClick={() => { onItemClick(ScreenType.houseAffordabilityCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.banknotes}
          text={Localise(LocaliseKey.homeToolsNetSalaryCalculator)}
          onClick={() => { onItemClick(ScreenType.netSalaryCalculator) }}
        />

      </div>
    </div>
  );
}

export default HomeTools