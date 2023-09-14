import Localise, { LocaliseKey } from "@localisations/Localise";
import { Formatter } from "@utils/Formatter";

import "./GoalContributionCalculatorResult.css";

const GoalContributionCalculatorResult = (props) => {
  const result = props.result
  const monthlyContribution = result?.monthlyContribution
  const goalAmountInFuture = result?.goalAmountInFuture

  const monthlyContributionDisplayText = Formatter.getCurrencyText(monthlyContribution)
  const goalAmountInFutureDisplayText = Formatter.getCurrencyText(goalAmountInFuture)

  return (
    <div className="goal-contribution-calculator-result-container">
      <div className="font-size-body font-weight-medium">{Localise(LocaliseKey.goalContributionCalculatorResultTitle)}</div>
      <h1 className="mt-25 color-text-colored">{monthlyContributionDisplayText}</h1>
      <p className="mt-100">{Localise(LocaliseKey.goalContributionCalculatorResultDescription)}</p>
      <div className="mt-150 font-size-small">{Localise(LocaliseKey.goalContributionCalculatorResultGoalAmountInFutureLabel)}</div>
      <div className="color-text font-weight-semibold">{goalAmountInFutureDisplayText}</div>
    </div>
  );
}

export default GoalContributionCalculatorResult;