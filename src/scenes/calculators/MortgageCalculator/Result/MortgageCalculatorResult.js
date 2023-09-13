import Localise, { LocaliseKey } from "@localisation/Localise";
import { Formatter } from "@utils/Formatter";

import "./MortgageCalculatorResult.css";

const MortgageCalculatorResult = (props) => {
  const result = props.result

  const monthlyMortgagePayment = result?.monthlyMortgagePayment
  const totalMortgageAmount = result?.totalMortgageAmount
  const totalAmount = result?.totalAmount

  const monthlyMortgagePaymentDisplayText = Formatter.getCurrencyText(monthlyMortgagePayment)
  const totalMortgageAmountDisplayText = Formatter.getCurrencyText(totalMortgageAmount)
  const totalAmountDisplayText = Formatter.getCurrencyText(totalAmount)

  return (
    <div className="mortgage-calculator-result-container">
      <div className="font-size-body font-weight-medium">{Localise(LocaliseKey.mortgageCalculatorResultTitle)}</div>
      <h1 className="mt-25 color-text-colored">{monthlyMortgagePaymentDisplayText}</h1>
      <p className="mt-100">{Localise(LocaliseKey.mortgageCalculatorResultDescription)}</p>
      <div className="mt-150 font-size-small">{Localise(LocaliseKey.mortgageCalculatorResultTotalMortgageAmountLabel)}</div>
      <div className="color-text font-weight-semibold">{totalMortgageAmountDisplayText}</div>
      <div className="mt-150 font-size-small">{Localise(LocaliseKey.mortgageCalculatorResultTotalAmountLabel)}</div>
      <div className="color-text font-weight-semibold">{totalAmountDisplayText}</div>
    </div>
  );
}

export default MortgageCalculatorResult;