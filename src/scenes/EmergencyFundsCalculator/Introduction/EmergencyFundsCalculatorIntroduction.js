import "./EmergencyFundsCalculatorIntroduction.css"
import UIHeaderText from "uicomponents/UIHeaderText/UIHeaderText";
import Localise from "localisation/Localise";
import { LocaliseKey } from "localisation/Localise";

const EmergencyFundsCalculatorIntroduction = () => {
  return ( 
    <div className="emergency-funds-calculator-introduction-container">
      <UIHeaderText
        title={Localise(LocaliseKey.emergencyFundsCalculatorTitle)}
        description={Localise(LocaliseKey.emergencyFundsCalculatorDescription)}
      />
    </div>
  );
}

export default EmergencyFundsCalculatorIntroduction;