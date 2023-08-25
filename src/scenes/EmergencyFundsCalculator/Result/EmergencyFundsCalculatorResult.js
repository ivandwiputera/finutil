import "./EmergencyFundsCalculatorResult.css"
import { CurrencyFormatter } from "utils/CurrencyFormatter";

const EmergencyFundsCalculatorResult = (props) => {
  const result = props.result

  const totalEmergencyFunds = result?.totalEmergencyFunds
  const numMonthsToCover = result?.numMonthsToCover

  const totalEmergencyFundsDisplayText = CurrencyFormatter.getDisplayText(totalEmergencyFunds)
  const numMonthsToCoverDisplayText = `${numMonthsToCover} ${EmergencyFundsCalculatorResultCopy.numMonthsToCoverUnit}`

  return ( 
    <div className="emergency-funds-calculator-result-container">
      <div>{EmergencyFundsCalculatorResultCopy.title}</div>
      <h1 className="mt-50 color-text-colored">{totalEmergencyFundsDisplayText}</h1>
      <p className="mt-100">{EmergencyFundsCalculatorResultCopy.description}</p>
      <div className="mt-100 font-size-small">{EmergencyFundsCalculatorResultCopy.numMonthsToCoverLabel}</div>
      <div className="color-text font-weight-semibold">{numMonthsToCoverDisplayText}</div>
    </div>
  );
}
 
const EmergencyFundsCalculatorResultCopy = {
  title: "You need to save at least:",
  description: "Above amount is the total amount you need to put away for emergency. Remember to only use the money when you are in emergency situation such as loss of income and emergency financial situations.",
  numMonthsToCoverLabel: "Number of covered monthly expenses:",
  numMonthsToCoverUnit: "months"
}

export default EmergencyFundsCalculatorResult;