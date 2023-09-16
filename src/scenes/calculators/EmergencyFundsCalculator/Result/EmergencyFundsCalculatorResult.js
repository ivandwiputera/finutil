import { useLocalise, Copy } from "@localisations/Localise";
import { Formatter } from "@utils/Formatter";

import "./EmergencyFundsCalculatorResult.css";

const EmergencyFundsCalculatorResult = (props) => {
  const { localise } = useLocalise()

  const result = props.result

  const totalEmergencyFunds = result?.totalEmergencyFunds
  const numMonthsToCover = result?.numMonthsToCover

  const totalEmergencyFundsDisplayText = Formatter.getCurrencyText(totalEmergencyFunds)
  const numMonthsToCoverDisplayText = `${numMonthsToCover} ${localise(Copy.emergencyFundsCalculatorResultNumMonthsToCoverUnit)}`

  return ( 
    <div className="emergency-funds-calculator-result-container">
      <div className="font-size-body font-weight-medium">{localise(Copy.emergencyFundsCalculatorResultTitle)}</div>
      <h1 className="mt-25 color-text-colored">{totalEmergencyFundsDisplayText}</h1>
      <p className="mt-100">{localise(Copy.emergencyFundsCalculatorResultDescription)}</p>
      <div className="mt-150 font-size-small">{localise(Copy.emergencyFundsCalculatorResultNumMonthsToCoverLabel)}</div>
      <div className="color-text font-weight-semibold">{numMonthsToCoverDisplayText}</div>
    </div>
  );
}

export default EmergencyFundsCalculatorResult;