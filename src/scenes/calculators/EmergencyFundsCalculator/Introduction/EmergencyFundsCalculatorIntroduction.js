import UIHeaderText from "@components/UIHeaderText/UIHeaderText";
import { useLocalise, Copy } from "@localisations/Localise";

import "./EmergencyFundsCalculatorIntroduction.css";

const EmergencyFundsCalculatorIntroduction = () => {
  const { localise } = useLocalise()

  return ( 
    <div className="emergency-funds-calculator-introduction-container">
      <UIHeaderText
        title={localise(Copy.emergencyFundsCalculatorTitle)}
        description={localise(Copy.emergencyFundsCalculatorDescription)}
      />
    </div>
  );
}

export default EmergencyFundsCalculatorIntroduction;