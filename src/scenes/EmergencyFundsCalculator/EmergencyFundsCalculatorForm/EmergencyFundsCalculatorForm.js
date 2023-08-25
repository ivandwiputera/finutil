import "scenes/EmergencyFundsCalculator/EmergencyFundsCalculatorForm/EmergencyFundsCalculatorForm.css"
import UICurrencyInput from "uicomponents/UIInput/UICurrencyInput";
import UIDropdownInput from "uicomponents/UIInput/UIDropdownInput";
import { useState } from "react";
import { OccupationRiskType } from "scenes/EmergencyFundsCalculator/EmergencyFundsConstants";

const EmergencyFundsCalculatorForm = () => {
  const occupationRiskOptions = [
    { value: OccupationRiskType.low, label: EmergencyFundsCalculatorFormCopy.occupationRiskOptionLow },
    { value: OccupationRiskType.medium, label: EmergencyFundsCalculatorFormCopy.occupationRiskOptionMedium },
    { value: OccupationRiskType.high, label: EmergencyFundsCalculatorFormCopy.occupationRiskOptionHigh }
  ]

  const [monthlyExpenses, setMonthlyExpenses] = useState(undefined)
  const [occupationRisk, setOccupationRisk] = useState(undefined)

  const onMonthlyExpensesChanged = (newValue) => {
    setMonthlyExpenses(newValue)
  }

  const onOccupationRiskChanged = (newValue) => {
    setOccupationRisk(newValue)
  }

  return (
    <div className="emergency-funds-calculator-form-container">
      <UICurrencyInput
        defaultValue={monthlyExpenses}
        label={EmergencyFundsCalculatorFormCopy.monthlyExpensesLabel}
        note={EmergencyFundsCalculatorFormCopy.monthlyExpensesHelperText}
        onChange={(e) => { onMonthlyExpensesChanged(e) }}
      />

      <UIDropdownInput
        defaultValue={occupationRisk}
        label={EmergencyFundsCalculatorFormCopy.occupationRiskLabel}
        note={EmergencyFundsCalculatorFormCopy.occupationRiskHelperText}
        options={occupationRiskOptions}
        onChange={(e) => { onOccupationRiskChanged(e) }}
      />
    </div>
  );
}

const EmergencyFundsCalculatorFormCopy = {
  monthlyExpensesLabel: "How much do you usually spend in a month?",
  monthlyExpensesHelperText: "This includes all your living costs, necessities, mortgage payments, and other debt repayments.",
  occupationRiskLabel: "How big is the risk of losing your income?",
  occupationRiskHelperText: "Low: Easy to find another job with comparable income (< 3 months).\nMedium: Quite hard to find another job with comparable income (3 - 6 months)\nHigh: Very hard to find another job with comparable income (> 6 months)",
  occupationRiskOptionLow: "Low occupation risk",
  occupationRiskOptionMedium: "Medium occupation risk",
  occupationRiskOptionHigh: "High occupation risk"
}

export default EmergencyFundsCalculatorForm;