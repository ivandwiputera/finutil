import "./EmergencyFundsCalculatorIntroduction.css"
import UIHeaderText from "uicomponents/UIHeaderText/UIHeaderText";

const EmergencyFundsCalculatorIntroduction = () => {
  return ( 
    <div className="emergency-funds-calculator-introduction-container">
      <UIHeaderText
        title={EmergencyFundsCalculatorIntroductionCopy.title}
        description={EmergencyFundsCalculatorIntroductionCopy.description}
      />
    </div>
  );
}
 
const EmergencyFundsCalculatorIntroductionCopy = {
  title: "Emergency Funds Calculator",
  description: "To calculate how much emergency funds we need to have. Emergency funds is the money stashed away that we can use in times of financial distress such as job lost, family member sudden illness, etc. Emergency funds will act like a safety net that will cover those kind of expenses."
}
export default EmergencyFundsCalculatorIntroduction;