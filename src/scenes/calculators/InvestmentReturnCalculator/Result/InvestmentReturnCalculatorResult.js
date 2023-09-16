import { useLocalise, Copy } from "@localisations/Localise";
import { Formatter } from "@utils/Formatter";

import "./InvestmentReturnCalculatorResult.css";

const InvestmentReturnCalculatorResult = (props) => {
  const { localise } = useLocalise()
  
  const result = props.result
  const totalInvestmentAmount = result?.totalInvestmentAmount
  const totalPrincipalAmount = result?.totalPrincipalAmount
  const totalInterestGain = result?.totalInterestGain

  const totalInvestmentAmountDisplayText = Formatter.getCurrencyText(totalInvestmentAmount)
  const totalPrincipalAmountDisplayText = Formatter.getCurrencyText(totalPrincipalAmount)
  const totalInterestGainDisplayText = Formatter.getCurrencyText(totalInterestGain)

  return (
    <div className="investment-return-calculator-result-container">
      <div className="font-size-body font-weight-medium">{localise(Copy.investmentReturnCalculatorResultTitle)}</div>
      <h1 className="mt-25 color-text-colored">{totalInvestmentAmountDisplayText}</h1>
      <p className="mt-100">{localise(Copy.investmentReturnCalculatorResultDescription)}</p>
      <div className="mt-150 font-size-small">{localise(Copy.investmentReturnCalculatorResultTotalPrincipalLabel)}</div>
      <div className="color-text font-weight-semibold">{totalPrincipalAmountDisplayText}</div>
      <div className="mt-150 font-size-small">{localise(Copy.investmentReturnCalculatorResultTotalInterestGainLabel)}</div>
      <div className="color-text font-weight-semibold">{totalInterestGainDisplayText}</div>
    </div>
  );
}

export default InvestmentReturnCalculatorResult;