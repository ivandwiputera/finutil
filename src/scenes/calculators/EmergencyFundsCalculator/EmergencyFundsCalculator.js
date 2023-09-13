import { UIUtils } from "@utils/UIUtils";
import { useEffect, useState } from "react";

import "./EmergencyFundsCalculator.css";
import { EmergencyFundsCalculatorService } from "./EmergencyFundsCalculatorService";
import EmergencyFundsCalculatorForm from "./Form/EmergencyFundsCalculatorForm";
import EmergencyFundsCalculatorIntroduction from "./Introduction/EmergencyFundsCalculatorIntroduction";
import EmergencyFundsCalculatorResult from "./Result/EmergencyFundsCalculatorResult";

const EmergencyFundsCalculator = () => {

  const [result, setResult] = useState(undefined)

  const onInputChange = (input) => {
    // If input is invalid, set result as null to hide.
    if (!input.isValid) {
      setResult(null)
      return
    }

    // If result is invalid, set result as null to hide.
    const result = EmergencyFundsCalculatorService.calculateEmergencyFunds(input)
    if (result == null) {
      setResult(null)
      return
    }

    // Set result
    setResult(result)
  }

  useEffect(() => {
    UIUtils.scrollToTop()
  }, []);

  return (
    <div className="emergency-funds-calculator-container">
      <EmergencyFundsCalculatorIntroduction />
      <EmergencyFundsCalculatorForm onChange={(e) => { onInputChange(e) }} />
      {result && <EmergencyFundsCalculatorResult result={result} />}
    </div>
  );
}

export default EmergencyFundsCalculator;