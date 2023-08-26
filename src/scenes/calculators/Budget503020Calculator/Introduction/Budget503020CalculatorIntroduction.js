import "./Budget503020CalculatorIntroduction.css"
import UIHeaderText from "uicomponents/UIHeaderText/UIHeaderText";
import Localise from "localisation/Localise";
import { LocaliseKey } from "localisation/Localise";

const Budget503020CalculatorIntroduction = () => {
  return ( 
    <div className="budget-503020-calculator-introduction-container">
      <UIHeaderText
        title={Localise(LocaliseKey.budget503020CalculatorTitle)}
        description={Localise(LocaliseKey.budget503020CalculatorDescription)}
      />
    </div>
  );
}

export default Budget503020CalculatorIntroduction;