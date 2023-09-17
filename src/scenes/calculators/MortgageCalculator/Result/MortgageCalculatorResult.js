import { useLocalise, Copy } from "@localisations/Localise";
import { Formatter } from "@utils/Formatter";

import "./MortgageCalculatorResult.css";

const MortgageCalculatorResult = (props) => {
  const { localise } = useLocalise()
  
  const result = props.result

  const monthlyMortgagePayment = result?.monthlyMortgagePayment
  const totalMortgageAmount = result?.totalMortgageAmount
  const totalAmount = result?.totalAmount

  const monthlyMortgagePaymentDisplayText = Formatter.getCurrencyText(monthlyMortgagePayment)
  const totalMortgageAmountDisplayText = Formatter.getCurrencyText(totalMortgageAmount)
  const totalAmountDisplayText = Formatter.getCurrencyText(totalAmount)

  return (
    <div className="mortgage-calculator-result-container">
      <div className="font-size-body font-weight-medium color-text">{localise(Copy.mortgageCalculatorResultTitle)}</div>
      <h1 className="mt-25 color-text-colored">{monthlyMortgagePaymentDisplayText}</h1>
      <p className="mt-100">{localise(Copy.mortgageCalculatorResultDescription)}</p>
      <div className="mt-150 font-size-small color-text">{localise(Copy.mortgageCalculatorResultTotalMortgageAmountLabel)}</div>
      <div className="color-text font-weight-semibold">{totalMortgageAmountDisplayText}</div>
      <div className="mt-150 font-size-small color-text">{localise(Copy.mortgageCalculatorResultTotalAmountLabel)}</div>
      <div className="color-text font-weight-semibold">{totalAmountDisplayText}</div>
    </div>
  );
}

export default MortgageCalculatorResult;