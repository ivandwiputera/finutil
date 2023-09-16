import UIHeaderText from "@components/UIHeaderText/UIHeaderText";
import { useLocalise, Copy } from "@localisations/Localise";

import "./Budget503020CalculatorIntroduction.css";

const Budget503020CalculatorIntroduction = () => {
  const { localise } = useLocalise()

  return ( 
    <div className="budget-503020-calculator-introduction-container">
      <UIHeaderText
        title={localise(Copy.budget503020CalculatorTitle)}
        description={localise(Copy.budget503020CalculatorDescription)}
      />
    </div>
  );
}

export default Budget503020CalculatorIntroduction;