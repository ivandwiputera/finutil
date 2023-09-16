import UIHeaderText from "@components/UIHeaderText/UIHeaderText";
import { useLocalise, Copy } from "@localisations/Localise";

import "./InvestmentReturnCalculatorIntroduction.css";

const InvestmentReturnCalculatorIntroduction = () => {
  const { localise } = useLocalise()
  
  return ( 
    <div className="investment-return-calculator-introduction-container">
      <UIHeaderText
        title={localise(Copy.investmentReturnCalculatorTitle)}
        description={localise(Copy.investmentReturnCalculatorDescription)}
      /> 
    </div>
  );
}

export default InvestmentReturnCalculatorIntroduction;