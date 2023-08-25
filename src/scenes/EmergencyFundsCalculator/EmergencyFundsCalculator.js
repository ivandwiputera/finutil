import "./EmergencyFundsCalculator.css"
import { useState, useEffect } from "react";
import EmergencyFundsCalculatorForm from "./Form/EmergencyFundsCalculatorForm";
import EmergencyFundsCalculatorIntroduction from "./Introduction/EmergencyFundsCalculatorIntroduction";
import { EmergencyFundsCalculatorService } from "./EmergencyFundsCalculatorService";
import EmergencyFundsCalculatorResult from "./Result/EmergencyFundsCalculatorResult";
const EmergencyFundsCalculator = () => {

  const [result, setResult] = useState(undefined)

  const calculateResult = (input) => {
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

  const onInputChange = (input) => {
    calculateResult(input)
  }

  return (
    <div className="emergency-funds-calculator-container">
      <EmergencyFundsCalculatorIntroduction />
      <EmergencyFundsCalculatorForm onChange={(e) => { onInputChange(e) }}/>
      { result && <EmergencyFundsCalculatorResult result={result}/> }
    </div>
  );
}

export default EmergencyFundsCalculator;