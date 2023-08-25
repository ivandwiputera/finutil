import "./Budget503020CalculatorResult.css"
import { CurrencyFormatter } from "utils/CurrencyFormatter";

const Budget503020CalculatorResult = (props) => {
  const result = props.result

  const needs = CurrencyFormatter.getDisplayText(result?.needs)
  const wants = CurrencyFormatter.getDisplayText(result?.wants)
  const savings = CurrencyFormatter.getDisplayText(result?.savings)

  return ( 
    <div className="budget-503020-calculator-result-container">
      <div className="font-weight-semibold">{BudgetCalculatorResultCopy.needsLabel}</div>
      <h2 className="color-text-colored">{needs}</h2>
      <div className="mt-50 color-text-light font-size-small">{BudgetCalculatorResultCopy.needsDescription}</div>
      <div className="mt-150 font-weight-semibold">{BudgetCalculatorResultCopy.wantsLabel}</div>
      <h2 className="color-text-colored">{wants}</h2>
      <div className="mt-50 color-text-light font-size-small">{BudgetCalculatorResultCopy.wantsDescription}</div>
      <div className="mt-150 font-weight-semibold">{BudgetCalculatorResultCopy.savingsLabel}</div>
      <h2 className="color-text-colored">{savings}</h2>
      <div className="mt-50 color-text-light font-size-small">{BudgetCalculatorResultCopy.savingsDescription}</div>
    </div>
  );
}
 
const BudgetCalculatorResultCopy = {
  needsLabel: "Needs (50%):",
  needsDescription: "This category includes expenses that are essential for survival, such as rent or mortgage payments, groceries, utilities, insurance, and minimum debt payments. The rule suggests that you should spend up to 50% of your after-tax income on these needs and obligations.",
  wantsLabel: "Wants (30%):",
  wantsDescription: "This category includes expenses that are not essential but add value to your life, such as dining out, entertainment, travel, and shopping. The rule suggests that you should spend up to 30% of your after-tax income on these discretionary expenses.",
  savingsLabel: "Savings (20%):",
  savingsDescription: "This category includes money that you save for emergencies, retirement, or other long-term goals. The rule suggests that you should allocate at least 20% of your after-tax income to savings and investments.",
}

export default Budget503020CalculatorResult;