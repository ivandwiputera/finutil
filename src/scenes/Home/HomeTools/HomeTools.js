import UIHeaderText from "@components/UIHeaderText/UIHeaderText";
import { UIIconType } from "@components/UIIcon/UIIcon";
import UIIconTextCard from "@components/UIIconTextCard/UIIconTextCard";
import { useLocalise, Copy } from "@localisations/Localise";
import { ScreenType } from "ScreenType";

import "./HomeTools.css";

const HomeTools = (props) => {
  const { localise } = useLocalise()
  
  const onItemClick = props.onItemClick

  return (
    <div className="home-tools-container">
      <UIHeaderText
        className="text-align-center"
        title={localise(Copy.homeToolsTitle)}
        description={localise(Copy.homeToolsDescription)}
      />
      <div className="home-tools-grid">
        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.chartPie}
          text={localise(Copy.homeToolsBudgeting503020Calculator)}
          onClick={() => { onItemClick(ScreenType.budget503020Calculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.exclamationTriangle}
          text={localise(Copy.homeToolsEmergencyFundsCalculator)}
          onClick={() => { onItemClick(ScreenType.emergencyFundsCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.rocketLaunch}
          text={localise(Copy.homeToolsInvestmentReturnCalculator)}
          onClick={() => { onItemClick(ScreenType.investmentReturnCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.faceSmile}
          text={localise(Copy.homeToolsRetirementCalculator)}
          onClick={() => { onItemClick(ScreenType.retirementCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.flag}
          text={localise(Copy.homeToolsGoalContributionCalculator)}
          onClick={() => { onItemClick(ScreenType.goalContributionCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.clock}
          text={localise(Copy.homeToolsGoalDurationCalculator)}
          onClick={() => { onItemClick(ScreenType.goalDurationCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.bank}
          text={localise(Copy.homeToolsMortgageCalculator)}
          onClick={() => { onItemClick(ScreenType.mortgageCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.home}
          text={localise(Copy.homeToolsHouseAffordabilityCalculator)}
          onClick={() => { onItemClick(ScreenType.houseAffordabilityCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.banknotes}
          text={localise(Copy.homeToolsNetSalaryCalculator)}
          onClick={() => { onItemClick(ScreenType.netSalaryCalculator) }}
        />

      </div>
    </div>
  );
}

export default HomeTools