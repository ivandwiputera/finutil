import UIHeaderText from "@components/UIHeaderText/UIHeaderText";
import { useLocalise, Copy } from "@localisations/Localise";

import "./GoalDurationCalculatorIntroduction.css";

const GoalDurationCalculatorIntroduction = () => {
  const { localise } = useLocalise()
  
  return ( 
    <div className="goal-duration-calculator-introduction-container">
      <UIHeaderText
        title={localise(Copy.goalDurationCalculatorTitle)}
        description={localise(Copy.goalDurationCalculatorDescription)}
      /> 
    </div>
  );
}

export default GoalDurationCalculatorIntroduction;