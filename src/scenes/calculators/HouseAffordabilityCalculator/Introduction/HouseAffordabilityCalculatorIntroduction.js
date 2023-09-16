import UIHeaderText from "@components/UIHeaderText/UIHeaderText";
import { useLocalise, Copy } from "@localisations/Localise";

import "./HouseAffordabilityCalculatorIntroduction.css";

const HouseAffordabilityCalculatorIntroduction = () => {
  const { localise } = useLocalise()
  
  return (
    <div className="house-affordability-calculator-introduction-container">
      <UIHeaderText
        title={localise(Copy.houseAffordabilityCalculatorTitle)}
        description={localise(Copy.houseAffordabilityCalculatorDescription)}
      />
    </div>
  );
}

export default HouseAffordabilityCalculatorIntroduction;