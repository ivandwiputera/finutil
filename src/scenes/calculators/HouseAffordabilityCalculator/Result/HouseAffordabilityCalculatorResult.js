import { useLocalise, Copy } from "@localisations/Localise";
import { Formatter } from "@utils/Formatter";

import "./HouseAffordabilityCalculatorResult.css";

const HouseAffordabilityCalculatorResult = (props) => {
  const { localise } = useLocalise()
  
  const result = props.result

  const housePrice = result?.housePrice
  const totalMortgageAmount = result?.totalMortgageAmount
  const monthlyPayment = result?.monthlyPayment

  const housePriceDisplayText = Formatter.getCurrencyText(housePrice)
  const totalMortgageAmountDisplayText = Formatter.getCurrencyText(totalMortgageAmount)
  const monthlyPaymentDisplayText = Formatter.getCurrencyText(monthlyPayment)

  return (
    <div className="house-affordability-calculator-result-container">
      <div className="font-size-body font-weight-medium color-text">{localise(Copy.houseAffordabilityResultTitle)}</div>
      <h1 className="mt-25 color-text-colored">{housePriceDisplayText}</h1>
      <p className="mt-100">{localise(Copy.houseAffordabilityResultDescription)}</p>
      <div className="mt-150 font-size-small color-text">{localise(Copy.houseAffordabilityResultTotalMortgageAmountLabel)}</div>
      <div className="color-text font-weight-semibold">{totalMortgageAmountDisplayText}</div>
      <div className="mt-150 font-size-small color-text">{localise(Copy.houseAffordabilityResultMortgageMonthlyPaymentLabel)}</div>
      <div className="color-text font-weight-semibold">{monthlyPaymentDisplayText}</div>
    </div>
  );
}

export default HouseAffordabilityCalculatorResult;