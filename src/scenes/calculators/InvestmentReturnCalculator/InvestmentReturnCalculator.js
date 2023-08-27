import "./InvestmentReturnCalculator.css"
import InvestmentReturnCalculatorIntroduction from "./Introduction/InvestmentReturnCalculatorIntroduction";
import InvestmentReturnCalculatorForm from "./Form/InvestmentReturnCalculatorForm";
import { InvestmentReturnCalculatorService } from "./InvestmentReturnCalculatorService";
import { useEffect, useState } from "react";
import InvestmentReturnCalculatorResult from "./Result/InvestmentReturnCalculatorResult";
import { UIUtils } from "utils/UIUtils";

const InvestmentReturnCalculator = () => {

  const [result, setResult] = useState(undefined)

  const calculateResult = (input) => {
    // If input is invalid, set result as null to hide.
    if (!input.isValid) { 
      setResult(null)
      return
    }

    // If result is invalid, set result as null to hide.
    const params = {
      initialAmount: input.initialAmount,
      duration: input.duration,
      rateOfReturn: input.rateOfReturn,
      contribution: input.contribution
    }
    const result = InvestmentReturnCalculatorService.calculateInvestmentReturn(params)
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
    <div className="investment-return-calculator-container">
      <InvestmentReturnCalculatorIntroduction />
      <InvestmentReturnCalculatorForm onChange={(e) => { onInputChange(e) }}/>
      { result && <InvestmentReturnCalculatorResult result={result}/> }
    </div>
  )
}

export default InvestmentReturnCalculator;