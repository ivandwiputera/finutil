import UIHeaderText from "@components/UIHeaderText/UIHeaderText";
import Localise, { LocaliseKey } from "@localisations/Localise";

import "./Budget503020CalculatorIntroduction.css";

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