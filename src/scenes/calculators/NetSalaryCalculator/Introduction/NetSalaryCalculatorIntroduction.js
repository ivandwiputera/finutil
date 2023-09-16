import UIHeaderText from "@components/UIHeaderText/UIHeaderText";
import { useLocalise, Copy } from "@localisations/Localise";

import "./NetSalaryCalculatorIntroduction.css";

const NetSalaryCalculatorIntroduction = () => {
  const { localise } = useLocalise()
  
  return ( 
    <div className="net-salary-calculator-introduction-container">
      <UIHeaderText
        title={localise(Copy.netSalaryCalculatorTitle)}
        description={localise(Copy.netSalaryCalculatorDescription)}
      /> 
    </div>
  );
}

export default NetSalaryCalculatorIntroduction;