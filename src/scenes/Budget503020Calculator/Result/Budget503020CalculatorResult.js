import "./Budget503020CalculatorResult.css"
import { CurrencyFormatter } from "utils/CurrencyFormatter";
import Localise from "localisation/Localise";
import { LocaliseKey } from "localisation/Localise";

const Budget503020CalculatorResult = (props) => {
  const result = props.result

  const needs = CurrencyFormatter.getDisplayText(result?.needs)
  const wants = CurrencyFormatter.getDisplayText(result?.wants)
  const savings = CurrencyFormatter.getDisplayText(result?.savings)

  return ( 
    <div className="budget-503020-calculator-result-container">
      <div className="font-weight-semibold">{Localise(LocaliseKey.budget503020CalculatorResultNeedsLabel)}</div>
      <h2 className="color-text-colored">{needs}</h2>
      <div className="mt-50 color-text-light font-size-small">{Localise(LocaliseKey.budget503020CalculatorResultNeedsDescription)}</div>
      <div className="mt-150 font-weight-semibold">{Localise(LocaliseKey.budget503020CalculatorResultWantsLabel)}</div>
      <h2 className="color-text-colored">{wants}</h2>
      <div className="mt-50 color-text-light font-size-small">{Localise(LocaliseKey.budget503020CalculatorResultWantsDescription)}</div>
      <div className="mt-150 font-weight-semibold">{Localise(LocaliseKey.budget503020CalculatorResultSavingsLabel)}</div>
      <h2 className="color-text-colored">{savings}</h2>
      <div className="mt-50 color-text-light font-size-small">{Localise(LocaliseKey.budget503020CalculatorResultSavingsDescription)}</div>
    </div>
  );
}

export default Budget503020CalculatorResult;