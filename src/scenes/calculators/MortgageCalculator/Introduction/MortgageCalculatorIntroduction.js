import "./MortgageCalculatorIntroduction.css"
import UIHeaderText from "uicomponents/UIHeaderText/UIHeaderText";
import Localise, { LocaliseKey } from "localisation/Localise";

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