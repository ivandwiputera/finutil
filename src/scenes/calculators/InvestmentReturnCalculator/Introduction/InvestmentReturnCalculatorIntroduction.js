import "./InvestmentReturnCalculatorIntroduction.css"
import UIHeaderText from "uicomponents/UIHeaderText/UIHeaderText";
import Localise, { LocaliseKey } from "localisation/Localise";

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