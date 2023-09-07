import "./GoalDurationCalculatorIntroduction.css"
import UIHeaderText from "uicomponents/UIHeaderText/UIHeaderText";
import Localise, { LocaliseKey } from "localisation/Localise";

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