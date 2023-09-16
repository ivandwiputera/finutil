import UIHeaderText from "@components/UIHeaderText/UIHeaderText";
import { useLocalise, Copy } from "@localisations/Localise";

import "./GoalContributionCalculatorIntroduction.css";

const GoalContributionCalculatorIntroduction = () => {
  const { localise } = useLocalise()
  
  return ( 
    <div className="goal-contribution-calculator-introduction-container">
      <UIHeaderText
        title={localise(Copy.goalContributionCalculatorTitle)}
        description={localise(Copy.goalContributionCalculatorDescription)}
      /> 
    </div>
  );
}

export default GoalContributionCalculatorIntroduction;