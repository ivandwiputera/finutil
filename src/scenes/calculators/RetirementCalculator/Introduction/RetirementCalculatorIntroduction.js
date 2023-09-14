import UIHeaderText from "@components/UIHeaderText/UIHeaderText";
import Localise, { LocaliseKey } from "@localisations/Localise";

import "./RetirementCalculatorIntroduction.css";

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