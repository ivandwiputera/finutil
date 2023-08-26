import "./EmergencyFundsCalculatorResult.css"
import { CurrencyFormatter } from "utils/CurrencyFormatter";
import Localise from "localisation/Localise";
import { LocaliseKey } from "localisation/Localise";

const EmergencyFundsCalculatorResult = (props) => {
  const result = props.result

  const totalEmergencyFunds = result?.totalEmergencyFunds
  const numMonthsToCover = result?.numMonthsToCover

  const totalEmergencyFundsDisplayText = CurrencyFormatter.getDisplayText(totalEmergencyFunds)
  const numMonthsToCoverDisplayText = `${numMonthsToCover} ${Localise(LocaliseKey.emergencyFundsCalculatorResultNumMonthsToCoverUnit)}`

  return ( 
    <div className="emergency-funds-calculator-result-container">
      <div className="font-size-body font-weight-medium">{Localise(LocaliseKey.emergencyFundsCalculatorResultTitle)}</div>
      <h1 className="mt-25 color-text-colored">{totalEmergencyFundsDisplayText}</h1>
      <p className="mt-100">{Localise(LocaliseKey.emergencyFundsCalculatorResultDescription)}</p>
      <div className="mt-150 font-size-small">{Localise(LocaliseKey.emergencyFundsCalculatorResultNumMonthsToCoverLabel)}</div>
      <div className="color-text font-weight-semibold">{numMonthsToCoverDisplayText}</div>
    </div>
  );
}

export default EmergencyFundsCalculatorResult;