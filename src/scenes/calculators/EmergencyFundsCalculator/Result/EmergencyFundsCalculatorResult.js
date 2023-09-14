import Localise, { LocaliseKey } from "@localisations/Localise";
import { Formatter } from "@utils/Formatter";

import "./EmergencyFundsCalculatorResult.css";

const EmergencyFundsCalculatorResult = (props) => {
  const result = props.result

  const totalEmergencyFunds = result?.totalEmergencyFunds
  const numMonthsToCover = result?.numMonthsToCover

  const totalEmergencyFundsDisplayText = Formatter.getCurrencyText(totalEmergencyFunds)
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