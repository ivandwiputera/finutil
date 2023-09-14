import UIHeaderText from "@components/UIHeaderText/UIHeaderText";
import Localise, { LocaliseKey } from "@localisations/Localise";

import "./GoalDurationCalculatorIntroduction.css";

const GoalDurationCalculatorIntroduction = () => {
  return ( 
    <div className="goal-duration-calculator-introduction-container">
      <UIHeaderText
        title={Localise(LocaliseKey.goalDurationCalculatorTitle)}
        description={Localise(LocaliseKey.goalDurationCalculatorDescription)}
      /> 
    </div>
  );
}

export default GoalDurationCalculatorIntroduction;