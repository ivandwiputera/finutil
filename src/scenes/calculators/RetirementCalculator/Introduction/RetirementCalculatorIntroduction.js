import UIHeaderText from "@components/UIHeaderText/UIHeaderText";
import { useLocalise, Copy } from "@localisations/Localise";

import "./RetirementCalculatorIntroduction.css";

const RetirementCalculatorIntroduction = () => {
  const { localise } = useLocalise()
  
  return ( 
    <div className="retirement-calculator-introduction-container">
      <UIHeaderText
        title={localise(Copy.retirementCalculatorTitle)}
        description={localise(Copy.retirementCalculatorDescription)}
      />
    </div>
  );
}

export default RetirementCalculatorIntroduction;