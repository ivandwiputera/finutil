import "./EmergencyFundsCalculatorForm.css"
import UIInput from "uicomponents/UIInput/UIInput";

const EmergencyFundsForm = () => {
  return ( 
    <div className="emergency-funds-calculator-form-container">
      <UIInput label="Monthly Income" note="Please enter your monthly income" error="Monthly income cannot be empty" />
      <UIInput label="Monthly Income" note="Please enter your monthly income" error="Monthly income cannot be empty" />
    </div>
  );
}
 
export default EmergencyFundsForm;