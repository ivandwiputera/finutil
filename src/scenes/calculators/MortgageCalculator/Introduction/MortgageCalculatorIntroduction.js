import UIHeaderText from "@components/UIHeaderText/UIHeaderText";
import Localise, { LocaliseKey } from "@localisation/Localise";

import "./MortgageCalculatorIntroduction.css";

const MortgageCalculatorIntroduction = () => {
  return ( 
    <div className="mortgage-calculator-introduction-container">
      <UIHeaderText
        title={Localise(LocaliseKey.mortgageCalculatorTitle)}
        description={Localise(LocaliseKey.mortgageCalculatorDescription)}
      /> 
    </div>
  );
}

export default MortgageCalculatorIntroduction;