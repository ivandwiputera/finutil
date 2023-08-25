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
  description: "Emergency funds are the funds that we set aside to use in times of financial distress, such as job loss or sudden illness of a family member. These funds act as a safety net to help us cover unexpected expenses."
}
export default EmergencyFundsCalculatorIntroduction;