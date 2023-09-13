import Localise, { LocaliseKey } from "@localisation/Localise";
import { Formatter } from "@utils/Formatter";

import "./GoalDurationCalculatorResult.css";

const GoalDurationCalculatorResult = (props) => {
  const result = props.result
  const numOfYears = result?.numOfYears
  const numYearsDisplayText = Formatter.getNumYearsText(numOfYears)
  return (
    <div className="goal-duration-calculator-result-container">
      <div className="font-size-body font-weight-medium">{Localise(LocaliseKey.goalDurationCalculatorResultTitle)}</div>
      <h1 className="mt-25 color-text-colored">{numYearsDisplayText}</h1>
      <p className="mt-100">{Localise(LocaliseKey.goalDurationCalculatorResultDescription)}</p>
    </div>
  );
}

export default GoalDurationCalculatorResult;