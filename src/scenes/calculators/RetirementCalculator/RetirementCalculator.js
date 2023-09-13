import { UIUtils } from "@utils/UIUtils";
import { useEffect, useState } from "react";

import "./RetirementCalculator.css";
import { RetirementCalculatorService } from "./RetirementCalculatorService";
import RetirementCalculatorForm from "./Form/RetirementCalculatorForm";
import RetirementCalculatorIntroduction from "./Introduction/RetirementCalculatorIntroduction";
import RetirementCalculatorResult from "./Result/RetirementCalculatorResult";

const RetirementCalculator = () => {

  const [result, setResult] = useState(undefined)

  const onInputChange = (input) => {
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

  useEffect(() => {
    UIUtils.scrollToTop()
  }, []);

  return (
    <div className="retirement-calculator-container">
      <RetirementCalculatorIntroduction />
      <RetirementCalculatorForm onChange={(e) => { onInputChange(e) }} />
      {result && <RetirementCalculatorResult result={result} />}
    </div>
  )
}

export default RetirementCalculator;