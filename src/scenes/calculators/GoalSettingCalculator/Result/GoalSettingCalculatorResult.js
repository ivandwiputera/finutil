import "./GoalSettingCalculatorResult.css"
import { CurrencyFormatter } from "utils/CurrencyFormatter";
import Localise, { LocaliseKey } from "localisation/Localise";

const GoalSettingCalculatorResult = (props) => {
  const result = props.result
  const monthlyContribution = result?.monthlyContribution
  const goalAmountInFuture = result?.goalAmountInFuture

  const monthlyContributionDisplayText = CurrencyFormatter.getDisplayText(monthlyContribution)
  const goalAmountInFutureDisplayText = CurrencyFormatter.getDisplayText(goalAmountInFuture)

  return (
    <div className="goal-setting-calculator-result-container">
      <div className="font-size-body font-weight-medium">{Localise(LocaliseKey.goalSettingCalculatorResultTitle)}</div>
      <h1 className="mt-25 color-text-colored">{monthlyContributionDisplayText}</h1>
      <p className="mt-100">{Localise(LocaliseKey.goalSettingCalculatorResultDescription)}</p>
      <div className="mt-150 font-size-small">{Localise(LocaliseKey.goalSettingCalculatorResultGoalAmountInFutureLabel)}</div>
      <div className="color-text font-weight-semibold">{goalAmountInFutureDisplayText}</div>
    </div>
  );
}

export default GoalSettingCalculatorResult;