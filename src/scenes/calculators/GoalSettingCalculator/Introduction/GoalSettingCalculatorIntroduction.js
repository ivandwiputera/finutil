import "./GoalSettingCalculatorIntroduction.css"
import UIHeaderText from "uicomponents/UIHeaderText/UIHeaderText";
import Localise, { LocaliseKey } from "localisation/Localise";

const GoalSettingCalculatorIntroduction = () => {
  return ( 
    <div className="goal-setting-calculator-introduction-container">
      <UIHeaderText
        title={Localise(LocaliseKey.goalSettingCalculatorTitle)}
        description={Localise(LocaliseKey.goalSettingCalculatorDescription)}
      /> 
    </div>
  );
}

export default GoalSettingCalculatorIntroduction;