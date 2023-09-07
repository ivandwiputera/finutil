import "./InvestmentReturnCalculatorResult.css"
import { Formatter } from "utils/Formatter";
import Localise, { LocaliseKey } from "localisation/Localise";

const InvestmentReturnCalculatorResult = (props) => {
  const result = props.result
  const totalInvestmentAmount = result?.totalInvestmentAmount
  const totalPrincipalAmount = result?.totalPrincipalAmount
  const totalInterestGain = result?.totalInterestGain

  const totalInvestmentAmountDisplayText = Formatter.getCurrencyText(totalInvestmentAmount)
  const totalPrincipalAmountDisplayText = Formatter.getCurrencyText(totalPrincipalAmount)
  const totalInterestGainDisplayText = Formatter.getCurrencyText(totalInterestGain)

  return (
    <div className="investment-return-calculator-result-container">
      <div className="font-size-body font-weight-medium">{Localise(LocaliseKey.investmentReturnCalculatorResultTitle)}</div>
      <h1 className="mt-25 color-text-colored">{totalInvestmentAmountDisplayText}</h1>
      <p className="mt-100">{Localise(LocaliseKey.investmentReturnCalculatorResultDescription)}</p>
      <div className="mt-150 font-size-small">{Localise(LocaliseKey.investmentReturnCalculatorResultTotalPrincipalLabel)}</div>
      <div className="color-text font-weight-semibold">{totalPrincipalAmountDisplayText}</div>
      <div className="mt-150 font-size-small">{Localise(LocaliseKey.investmentReturnCalculatorResultTotalInterestGainLabel)}</div>
      <div className="color-text font-weight-semibold">{totalInterestGainDisplayText}</div>
    </div>
  );
}

export default InvestmentReturnCalculatorResult;