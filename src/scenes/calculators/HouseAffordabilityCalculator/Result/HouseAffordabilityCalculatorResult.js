import "./HouseAffordabilityCalculatorResult.css"
import { CurrencyFormatter } from "utils/CurrencyFormatter";
import Localise, { LocaliseKey } from "localisation/Localise";

const HouseAffordabilityCalculatorResult = (props) => {
  const result = props.result

  const housePrice = result?.housePrice
  const totalMortgageAmount = result?.totalMortgageAmount
  const monthlyPayment = result?.monthlyPayment

  const housePriceDisplayText = CurrencyFormatter.getDisplayText(housePrice)
  const totalMortgageAmountDisplayText = CurrencyFormatter.getDisplayText(totalMortgageAmount)
  const monthlyPaymentDisplayText = CurrencyFormatter.getDisplayText(monthlyPayment)

  return (
    <div className="house-affordability-calculator-result-container">
      <div className="font-size-body font-weight-medium">{Localise(LocaliseKey.houseAffordabilityResultTitle)}</div>
      <h1 className="mt-25 color-text-colored">{housePriceDisplayText}</h1>
      <p className="mt-100">{Localise(LocaliseKey.houseAffordabilityResultDescription)}</p>
      <div className="mt-150 font-size-small">{Localise(LocaliseKey.houseAffordabilityResultTotalMortgageAmountLabel)}</div>
      <div className="color-text font-weight-semibold">{totalMortgageAmountDisplayText}</div>
      <div className="mt-150 font-size-small">{Localise(LocaliseKey.houseAffordabilityResultMortgageMonthlyPaymentLabel)}</div>
      <div className="color-text font-weight-semibold">{monthlyPaymentDisplayText}</div>
    </div>
  );
}

export default HouseAffordabilityCalculatorResult;