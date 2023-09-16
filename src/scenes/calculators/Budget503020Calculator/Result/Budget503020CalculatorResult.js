import { useLocalise, Copy } from "@localisations/Localise";
import { Formatter } from "@utils/Formatter";

import "./Budget503020CalculatorResult.css";

const Budget503020CalculatorResult = (props) => {
  const { localise } = useLocalise()

  const result = props.result

  const needs = Formatter.getCurrencyText(result?.needs)
  const wants = Formatter.getCurrencyText(result?.wants)
  const savings = Formatter.getCurrencyText(result?.savings)

  return ( 
    <div className="budget-503020-calculator-result-container">
      <div className="font-weight-semibold">{localise(Copy.budget503020CalculatorResultNeedsLabel)}</div>
      <h2 className="color-text-colored">{needs}</h2>
      <div className="mt-50 color-text-light font-size-small">{localise(Copy.budget503020CalculatorResultNeedsDescription)}</div>
      <div className="mt-150 font-weight-semibold">{localise(Copy.budget503020CalculatorResultWantsLabel)}</div>
      <h2 className="color-text-colored">{wants}</h2>
      <div className="mt-50 color-text-light font-size-small">{localise(Copy.budget503020CalculatorResultWantsDescription)}</div>
      <div className="mt-150 font-weight-semibold">{localise(Copy.budget503020CalculatorResultSavingsLabel)}</div>
      <h2 className="color-text-colored">{savings}</h2>
      <div className="mt-50 color-text-light font-size-small">{localise(Copy.budget503020CalculatorResultSavingsDescription)}</div>
    </div>
  );
}

export default Budget503020CalculatorResult;