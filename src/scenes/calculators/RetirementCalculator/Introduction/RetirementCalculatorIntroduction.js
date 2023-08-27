import "./RetirementCalculatorIntroduction.css"
import UIHeaderText from "uicomponents/UIHeaderText/UIHeaderText";
import Localise, { LocaliseKey } from "localisation/Localise";

const RetirementCalculatorIntroduction = () => {
  return ( 
    <div className="retirement-calculator-introduction-container">
      <UIHeaderText
        title={Localise(LocaliseKey.retirementCalculatorTitle)}
        description={Localise(LocaliseKey.retirementCalculatorDescription)}
      />
    </div>
  );
}

export default RetirementCalculatorIntroduction;