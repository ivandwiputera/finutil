import UIHeaderText from "@components/UIHeaderText/UIHeaderText";
import Localise, { LocaliseKey } from "@localisations/Localise";

import "./EmergencyFundsCalculatorIntroduction.css";

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