import UIHeaderText from "@components/UIHeaderText/UIHeaderText";
import Localise, { LocaliseKey } from "@localisations/Localise";

import "./InvestmentReturnCalculatorIntroduction.css";

const InvestmentReturnCalculatorIntroduction = () => {
  return ( 
    <div className="investment-return-calculator-introduction-container">
      <UIHeaderText
        title={Localise(LocaliseKey.investmentReturnCalculatorTitle)}
        description={Localise(LocaliseKey.investmentReturnCalculatorDescription)}
      /> 
    </div>
  );
}

export default InvestmentReturnCalculatorIntroduction;