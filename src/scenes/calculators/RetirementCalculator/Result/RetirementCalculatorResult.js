import "./RetirementCalculatorResult.css"
import { CurrencyFormatter } from "utils/CurrencyFormatter";
import Localise, { LocaliseKey } from "localisation/Localise";

const RetirementCalculatorResult = (props) => {
  const result = props.result

  const totalRetirementSavingsDisplayText = CurrencyFormatter.getDisplayText(result?.totalRetirementSavings)
  const withdrawalAmountDisplayText = CurrencyFormatter.getDisplayText(result?.withdrawalAmount)

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