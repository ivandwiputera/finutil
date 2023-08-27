import "./RetirementCalculator.css"
import { UIUtils } from "utils/UIUtils";
import { useState, useEffect } from "react";
import RetirementCalculatorIntroduction from "./Introduction/RetirementCalculatorIntroduction";
import RetirementCalculatorForm from "./Form/RetirementCalculatorForm";
import RetirementCalculatorResult from "./Result/RetirementCalculatorResult";
import { RetirementCalculatorService } from "./RetirementCalculatorService";

const RetirementCalculator = () => {

  const [result, setResult] = useState(undefined)

  const calculateResult = (input) => {
    // If input is invalid, set result as null to hide.
    if (!input.isValid) { 
      setResult(null)
      return
    }

    // If result is invalid, set result as null to hide.
    const result = RetirementCalculatorService.calculateRetirementSavings(input)
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

  useEffect(() => {
    UIUtils.scrollToTop()
  }, []);

  return (
    <div className="retirement-calculator-container">
      <RetirementCalculatorIntroduction />
      <RetirementCalculatorForm onChange={(e) => { onInputChange(e) }}/>
      { result && <RetirementCalculatorResult result={result}/> }
    </div>
  )
}

export default RetirementCalculator;