import "./HouseAffordabilityCalculator.css"
import { useEffect, useState } from "react";
import { UIUtils } from "utils/UIUtils";
import { HouseAffordabilityCalculatorService } from "./HouseAffordabilityCalculatorService";
import HouseAffordabilityCalculatorIntroduction from "./Introduction/HouseAffordabilityCalculatorIntroduction";
import HouseAffordabilityCalculatorForm from "./Form/HouseAffordabilityCalculatorForm";
import HouseAffordabilityCalculatorResult from "./Result/HouseAffordabilityCalculatorResult";

const HouseAffordabilityCalculator = () => {
  const [result, setResult] = useState(undefined)

  const onInputChange = (input) => {
    // If input is invalid, set result as null to hide.
    if (!input.isValid) {
      setResult(null)
      return
    }

    // If result is invalid, set result as null to hide.
    const params = {
      monthlyIncome: input.monthlyIncome,
      mortgageTenor: input.mortgageTenor,
      mortgageInterestRate: input.mortgageInterestRate,
      savedAmount: input.savedAmount,
    }
    const result = HouseAffordabilityCalculatorService.calculateHouseAffordability(params)

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
    <div className="house-affordability-calculator-container">
      <HouseAffordabilityCalculatorIntroduction />
      <HouseAffordabilityCalculatorForm onChange={(e) => { onInputChange(e) }} />
      {result && <HouseAffordabilityCalculatorResult result={result} />}
    </div>
  )
}

export default HouseAffordabilityCalculator
