import "./GoalContributionCalculator.css"
import { useEffect, useState } from "react";
import { UIUtils } from "utils/UIUtils";
import GoalContributionCalculatorIntroduction from "../GoalContributionCalculator/Introduction/GoalContributionCalculatorIntroduction";
import GoalContributionCalculatorForm from "../GoalContributionCalculator/Form/GoalContributionCalculatorForm";
import { GoalContributionCalculatorService } from "./GoalContributionCalculatorService";
import GoalContributionCalculatorResult from "../GoalContributionCalculator/Result/GoalContributionCalculatorResult";

const GoalContributionCalculator = () => {

  const [result, setResult] = useState(undefined)

  const onInputChange = (input) => {
    // If input is invalid, set result as null to hide.
    if (!input.isValid) {
      setResult(null)
      return
    }

    // If result is invalid, set result as null to hide.
    const params = {
      goalAmount: input.goalAmount,
      duration: input.duration,
      rateOfReturn: input.rateOfReturn,
      inflation: input.inflation,
      savedAmount: input.savedAmount
    }
    const result = GoalContributionCalculatorService.calculateGoal(params)

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
    <div className="goal-contribution-calculator-container">
      <GoalContributionCalculatorIntroduction />
      <GoalContributionCalculatorForm onChange={(e) => { onInputChange(e) }} />
      {result && <GoalContributionCalculatorResult result={result} />}
    </div>
  )
}

export default GoalContributionCalculator
