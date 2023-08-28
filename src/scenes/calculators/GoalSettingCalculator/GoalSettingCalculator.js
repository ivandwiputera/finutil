import "./GoalSettingCalculator.css"
import { useEffect, useState } from "react";
import { UIUtils } from "utils/UIUtils";
import GoalSettingCalculatorIntroduction from "./Introduction/GoalSettingCalculatorIntroduction";
import GoalSettingCalculatorForm from "./Form/GoalSettingCalculatorForm";
import { GoalSettingCalculatorService } from "./GoalSettingCalculatorService";
import GoalSettingCalculatorResult from "./Result/GoalSettingCalculatorResult";

const GoalSettingCalculator = () => {

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
    const result = GoalSettingCalculatorService.calculateGoal(params)

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
    <div className="goal-setting-calculator-container">
      <GoalSettingCalculatorIntroduction />
      <GoalSettingCalculatorForm onChange={(e) => { onInputChange(e) }} />
      {result && <GoalSettingCalculatorResult result={result} />}
    </div>
  )
}

export default GoalSettingCalculator
