import UIHeaderText from "@components/UIHeaderText/UIHeaderText";
import Localise, { LocaliseKey } from "@localisations/Localise";

import "./NetSalaryCalculatorIntroduction.css";

const NetSalaryCalculatorIntroduction = () => {
  return ( 
    <div className="net-salary-calculator-introduction-container">
      <UIHeaderText
        title={Localise(LocaliseKey.netSalaryCalculatorTitle)}
        description={Localise(LocaliseKey.netSalaryCalculatorDescription)}
      /> 
    </div>
  );
}

export default NetSalaryCalculatorIntroduction;