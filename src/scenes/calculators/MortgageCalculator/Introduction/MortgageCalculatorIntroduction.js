import UIHeaderText from "@components/UIHeaderText/UIHeaderText";
import { useLocalise, Copy } from "@localisations/Localise";

import "./MortgageCalculatorIntroduction.css";

const MortgageCalculatorIntroduction = () => {
  const { localise } = useLocalise()
  
  return ( 
    <div className="mortgage-calculator-introduction-container">
      <UIHeaderText
        title={localise(Copy.mortgageCalculatorTitle)}
        description={localise(Copy.mortgageCalculatorDescription)}
      /> 
    </div>
  );
}

export default MortgageCalculatorIntroduction;