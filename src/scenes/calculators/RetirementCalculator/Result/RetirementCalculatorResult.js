import "./RetirementCalculatorResult.css"
import { Formatter } from "@utils/Formatter";
import Localise, { LocaliseKey } from "@localisation/Localise";

const RetirementCalculatorResult = (props) => {
  const result = props.result

  const totalRetirementSavingsDisplayText = Formatter.getCurrencyText(result?.totalRetirementSavings)
  const withdrawalAmountDisplayText = Formatter.getCurrencyText(result?.withdrawalAmount)

  return ( 
    <div className="retirement-calculator-result-container">
      <div className="font-size-body font-weight-medium">{Localise(LocaliseKey.retirementCalculatorResultTitle)}</div>
      <h1 className="mt-25 color-text-colored">{totalRetirementSavingsDisplayText}</h1>
      <p className="mt-100">{Localise(LocaliseKey.retirementCalculatorResultDescription)}</p>
      <div className="mt-150 font-size-small">{Localise(LocaliseKey.retirementCalculatorResultWithdrawalAmountLabel)}</div>
      <div className="color-text font-weight-semibold">{withdrawalAmountDisplayText}</div>
    </div>
  );
}

export default RetirementCalculatorResult;