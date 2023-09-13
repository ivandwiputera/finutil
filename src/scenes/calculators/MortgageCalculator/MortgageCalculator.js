import { UIUtils } from "@utils/UIUtils";
import { useEffect, useState } from "react";

import "./MortgageCalculator.css";
import { MortgageCalculatorService } from "./MortgageCalculatorService";
import MortgageCalculatorForm from "./Form/MortgageCalculatorForm";
import MortgageCalculatorIntroduction from "./Introduction/MortgageCalculatorIntroduction";
import MortgageCalculatorResult from "./Result/MortgageCalculatorResult";

const MortgageCalculator = () => {
  const [result, setResult] = useState(undefined)

  const onInputChange = (input) => {
    // If input is invalid, set result as null to hide.
    if (!input.isValid) {
      setResult(null)
      return
    }

    // If result is invalid, set result as null to hide.
    const params = {
      housePrice: input.housePrice,
      downPayment: input.downPayment,
      mortgageTenor: input.mortgageTenor,
      mortgageInterestRate: input.mortgageInterestRate
    }
    const result = MortgageCalculatorService.calculateMortgage(params)

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
    <div className="mortgage-calculator-container">
      <MortgageCalculatorIntroduction />
      <MortgageCalculatorForm onChange={(e) => { onInputChange(e) }} />
      {result && <MortgageCalculatorResult result={result} />}
    </div>
  )
}

export default MortgageCalculator
