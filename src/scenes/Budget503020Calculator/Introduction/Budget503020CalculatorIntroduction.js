import "./Budget503020CalculatorIntroduction.css"
import UIHeaderText from "uicomponents/UIHeaderText/UIHeaderText";

const Budget503020CalculatorIntroduction = () => {
  return ( 
    <div className="budget-503020-calculator-introduction-container">
      <UIHeaderText
        title={Budget503020CalculatorIntroductionCopy.title}
        description={Budget503020CalculatorIntroductionCopy.description}
      />
    </div>
  );
}
 
const Budget503020CalculatorIntroductionCopy = {
  title: "Budget 50-30-20 Calculator",
  description: "50-30-20 budgeting rule is a simple and intuitive way to manage your finance. The rule suggests that you divide your after-tax income into three categories of spending: 50% on needs, 30% on wants, and 20% on savings."
}

export default Budget503020CalculatorIntroduction;