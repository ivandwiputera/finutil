import "./Budget503020Calculator.css"
import { useState, useEffect } from "react";
import { Budget503020CalculatorService } from "./Budget503020CalculatorService";
import Budget503020CalculatorForm from "./Form/Budget503020CalculatorForm";
import Budget503020CalculatorIntroduction from "./Introduction/Budget503020CalculatorIntroduction";
import Budget503020CalculatorResult from "./Result/Budget503020CalculatorResult";
import { UIUtils } from "utils/UIUtils";

const Budget503020Calculator = () => {

  const [result, setResult] = useState(undefined)

  const onInputChange = (input) => {
    // If input is invalid, set result as null to hide.
    if (!input.isValid) {
      setResult(null)
      return
    }

    // If result is invalid, set result as null to hide.
    const result = Budget503020CalculatorService.calculateBudget(input)
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
    <div className="budget-503020-calculator-container">
      <Budget503020CalculatorIntroduction />
      <Budget503020CalculatorForm onChange={(e) => { onInputChange(e) }} />
      {result && <Budget503020CalculatorResult result={result} />}
    </div>
  )
}

export default Budget503020Calculator;