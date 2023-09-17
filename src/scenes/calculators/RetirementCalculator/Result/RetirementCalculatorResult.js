import "./RetirementCalculatorResult.css"
import { Formatter } from "@utils/Formatter";
import { useLocalise, Copy } from "@localisations/Localise";

const RetirementCalculatorResult = (props) => {
  const { localise } = useLocalise()
  
  const result = props.result

  const totalRetirementSavingsDisplayText = Formatter.getCurrencyText(result?.totalRetirementSavings)
  const withdrawalAmountDisplayText = Formatter.getCurrencyText(result?.withdrawalAmount)

  return ( 
    <div className="retirement-calculator-result-container">
      <div className="font-size-body font-weight-medium color-text">{localise(Copy.retirementCalculatorResultTitle)}</div>
      <h1 className="mt-25 color-text-colored">{totalRetirementSavingsDisplayText}</h1>
      <p className="mt-100">{localise(Copy.retirementCalculatorResultDescription)}</p>
      <div className="mt-150 font-size-small color-text">{localise(Copy.retirementCalculatorResultWithdrawalAmountLabel)}</div>
      <div className="color-text font-weight-semibold">{withdrawalAmountDisplayText}</div>
    </div>
  );
}

export default RetirementCalculatorResult;