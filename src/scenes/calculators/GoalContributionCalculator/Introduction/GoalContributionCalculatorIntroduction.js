import "./GoalContributionCalculatorIntroduction.css"
import UIHeaderText from "uicomponents/UIHeaderText/UIHeaderText";
import Localise, { LocaliseKey } from "localisation/Localise";

const GoalContributionCalculatorIntroduction = () => {
  return ( 
    <div className="goal-contribution-calculator-introduction-container">
      <UIHeaderText
        title={Localise(LocaliseKey.goalContributionCalculatorTitle)}
        description={Localise(LocaliseKey.goalContributionCalculatorDescription)}
      /> 
    </div>
  );
}

export default GoalContributionCalculatorIntroduction;