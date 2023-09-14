import UIHeaderText from "@components/UIHeaderText/UIHeaderText";
import Localise, { LocaliseKey } from "@localisations/Localise";

import "./GoalContributionCalculatorIntroduction.css";

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