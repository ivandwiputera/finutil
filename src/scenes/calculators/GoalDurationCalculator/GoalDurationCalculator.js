import { UIUtils } from "@utils/UIUtils";
import { useEffect, useState } from "react";

import "./GoalDurationCalculator.css";
import { GoalDurationCalculatorService } from "./GoalDurationCalculatorService";
import GoalDurationCalculatorForm from "../GoalDurationCalculator/Form/GoalDurationCalculatorForm";
import GoalDurationCalculatorIntroduction from "../GoalDurationCalculator/Introduction/GoalDurationCalculatorIntroduction";
import GoalDurationCalculatorResult from "../GoalDurationCalculator/Result/GoalDurationCalculatorResult";

const GoalDurationCalculator = () => {

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
      contribution: input.contribution,
      rateOfReturn: input.rateOfReturn,
      savedAmount: input.savedAmount
    }
    const result = GoalDurationCalculatorService.calculateGoal(params)

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
    <div className="goal-duration-calculator-container">
      <GoalDurationCalculatorIntroduction />
      <GoalDurationCalculatorForm onChange={(e) => { onInputChange(e) }} />
      {result && <GoalDurationCalculatorResult result={result} />}
    </div>
  )
}

export default GoalDurationCalculator
