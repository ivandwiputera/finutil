import "./EmergencyFundsCalculator.css"
import EmergencyFundsCalculatorForm from "./EmergencyFundsCalculatorForm/EmergencyFundsCalculatorForm";
import EmergencyFundsCalculatorIntroduction from "./EmergencyFundsIntroduction/EmergencyFundsCalculatorIntroduction";
const EmergencyFundsCalculator = () => {
  return (
    <div className="emergency-funds-calculator-container">
      <EmergencyFundsCalculatorIntroduction />
      <EmergencyFundsCalculatorForm />
    </div>

  );
}

export default EmergencyFundsCalculator;