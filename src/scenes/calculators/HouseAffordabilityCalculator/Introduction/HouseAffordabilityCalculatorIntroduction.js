import "./HouseAffordabilityCalculatorIntroduction.css"
import UIHeaderText from "uicomponents/UIHeaderText/UIHeaderText";
import Localise, { LocaliseKey } from "localisation/Localise";

const HouseAffordabilityCalculatorIntroduction = () => {
  return ( 
    <div className="house-affordability-calculator-introduction-container">
      <UIHeaderText
        title={Localise(LocaliseKey.houseAffordabilityCalculatorTitle)}
        description={Localise(LocaliseKey.houseAffordabilityCalculatorDescription)}
      /> 
    </div>
  );
}

export default HouseAffordabilityCalculatorIntroduction;