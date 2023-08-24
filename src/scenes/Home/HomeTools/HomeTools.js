import "./HomeTools.css"
import UIHeaderText from "uicomponents/UIHeaderText/UIHeaderText";
import UIIconTextCard from "uicomponents/UIIconTextCard/UIIconTextCard";
import { UIIconType } from "uicomponents/UIIcon/UIIcon";
import { ScreenType } from "ScreenType";

const HomeTools = (props) => {
  const onItemClick = props.onItemClick

  return (
    <div>
      <UIHeaderText
        className="text-align-center  ml-200 mr-200"
        title={HomeToolsCopy.title}
        description={HomeToolsCopy.description}
      />
      <div className="home-tools-grid mt-100">
        <UIIconTextCard
          className="m-50"
          icon={UIIconType.chartPie}
          text={HomeToolsCopy.toolsBudgeting503020Calculator}
          onClick={() => { onItemClick(ScreenType.budget503020Calculator) }}
        />

        <UIIconTextCard
          className="m-50"
          icon={UIIconType.exclamationTriangle}
          text={HomeToolsCopy.toolsEmergencyFundsCalculator}
          onClick={() => { onItemClick(ScreenType.emergencyFundsCalculator) }}
        />

        <UIIconTextCard
          className="m-50"
          icon={UIIconType.rocketLaunch}
          text={HomeToolsCopy.toolsInvestmentReturnCalculator}
          onClick={() => { onItemClick(ScreenType.investmentReturnCalculator) }}
        />

        <UIIconTextCard
          className="m-50"
          icon={UIIconType.currencyDollar}
          text={HomeToolsCopy.toolsFinancialFreedomCalculator}
          onClick={() => { onItemClick(ScreenType.financialFreedomCalculator) }}
        />

        <UIIconTextCard
          className="m-50"
          icon={UIIconType.faceSmile}
          text={HomeToolsCopy.toolsRetirementCalculator}
          onClick={() => { onItemClick(ScreenType.retirementCalculator) }}
        />

        <UIIconTextCard
          className="m-50"
          icon={UIIconType.flag}
          text={HomeToolsCopy.toolsGoalSettingCalculator}
          onClick={() => { onItemClick(ScreenType.goalSettingCalculator) }}
        />

        <UIIconTextCard
          className="m-50"
          icon={UIIconType.bank}
          text={HomeToolsCopy.toolsMortgageCalculator}
          onClick={() => { onItemClick(ScreenType.mortgageCalculator) }}
        />

        <UIIconTextCard
          className="m-50"
          icon={UIIconType.home}
          text={HomeToolsCopy.toolsHouseAffordabilityCalculator}
          onClick={() => { onItemClick(ScreenType.houseAffordabilityCalculator) }}
        />

        <UIIconTextCard
          className="m-50"
          icon={UIIconType.shieldCheck}
          text={HomeToolsCopy.toolsLifeInsuranceCoverageCalculator}
          onClick={() => { onItemClick(ScreenType.lifeInsuranceCoverageCalculator) }}
        />

        <UIIconTextCard
          className="m-50"
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