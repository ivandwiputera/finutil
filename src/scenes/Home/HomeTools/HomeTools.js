import "./HomeTools.css"
import UIHeaderText from "uicomponents/UIHeaderText/UIHeaderText";
import UIIconTextCard from "uicomponents/UIIconTextCard/UIIconTextCard";
import { UIIconType } from "uicomponents/UIIcon/UIIcon";
import { ScreenType } from "ScreenType";

const HomeTools = (props) => {
  const onItemClick = props.onItemClick

  return (
    <div className="home-tools-container">
      <UIHeaderText
        className="text-align-center"
        title={HomeToolsCopy.title}
        description={HomeToolsCopy.description}
      />
      <div className="home-tools-grid">
        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.chartPie}
          text={HomeToolsCopy.toolsBudgeting503020Calculator}
          onClick={() => { onItemClick(ScreenType.budget503020Calculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.exclamationTriangle}
          text={HomeToolsCopy.toolsEmergencyFundsCalculator}
          onClick={() => { onItemClick(ScreenType.emergencyFundsCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.rocketLaunch}
          text={HomeToolsCopy.toolsInvestmentReturnCalculator}
          onClick={() => { onItemClick(ScreenType.investmentReturnCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.currencyDollar}
          text={HomeToolsCopy.toolsFinancialFreedomCalculator}
          onClick={() => { onItemClick(ScreenType.financialFreedomCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.faceSmile}
          text={HomeToolsCopy.toolsRetirementCalculator}
          onClick={() => { onItemClick(ScreenType.retirementCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.flag}
          text={HomeToolsCopy.toolsGoalSettingCalculator}
          onClick={() => { onItemClick(ScreenType.goalSettingCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.bank}
          text={HomeToolsCopy.toolsMortgageCalculator}
          onClick={() => { onItemClick(ScreenType.mortgageCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.home}
          text={HomeToolsCopy.toolsHouseAffordabilityCalculator}
          onClick={() => { onItemClick(ScreenType.houseAffordabilityCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.shieldCheck}
          text={HomeToolsCopy.toolsLifeInsuranceCoverageCalculator}
          onClick={() => { onItemClick(ScreenType.lifeInsuranceCoverageCalculator) }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon={UIIconType.banknotes}
          text={HomeToolsCopy.toolsNetSalaryCalculator}
          onClick={() => { onItemClick(ScreenType.netSalaryCalculator) }}
        />

      </div>
    </div>
  );
}

const HomeToolsCopy = {
  title: "Tools",
  description: "Feel free to use these tools to help with your budgeting and planning your financial goals.",
  toolsBudgeting503020Calculator: "Budgeting 50-30-20 Calculator",
  toolsEmergencyFundsCalculator: "Emergency Funds Calculator",
  toolsInvestmentReturnCalculator: "Investment Return Calculator",
  toolsFinancialFreedomCalculator: "Financial Freedom Calculator",
  toolsRetirementCalculator: "Retirement 4% Calculator",
  toolsGoalSettingCalculator: "Goal Setting Calculator",
  toolsMortgageCalculator: "Mortgage Calculator",
  toolsHouseAffordabilityCalculator: "House Affordability Calculator",
  toolsLifeInsuranceCoverageCalculator: "Life Insurance Coverage Calculator",
  toolsNetSalaryCalculator: "Net Salary Calculator"
}

export default HomeTools