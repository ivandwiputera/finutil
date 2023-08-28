import "./NetSalaryCalculatorIntroduction.css"
import UIHeaderText from "uicomponents/UIHeaderText/UIHeaderText";
import Localise, { LocaliseKey } from "localisation/Localise";

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