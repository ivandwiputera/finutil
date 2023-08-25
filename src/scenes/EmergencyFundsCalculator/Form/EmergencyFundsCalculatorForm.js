import "./EmergencyFundsCalculatorForm.css"
import UICurrencyInput from "uicomponents/UIInput/UICurrencyInput";
import UIDropdownInput from "uicomponents/UIInput/UIDropdownInput";
import { useCallback, useEffect, useState } from "react";
import { OccupationRiskType } from "scenes/EmergencyFundsCalculator/EmergencyFundsConstants";
import { Validation } from "utils/Validation";

const EmergencyFundsCalculatorForm = (props) => {
  const monthlyExpensesParam = props.monthlyExpenses
  const occupationRiskParam = props.monthlyExpenses
  const onChange = props.onChange

  const occupationRiskOptions = [
    { value: OccupationRiskType.low, label: EmergencyFundsCalculatorFormCopy.occupationRiskOptionLow },
    { value: OccupationRiskType.medium, label: EmergencyFundsCalculatorFormCopy.occupationRiskOptionMedium },
    { value: OccupationRiskType.high, label: EmergencyFundsCalculatorFormCopy.occupationRiskOptionHigh }
  ]

  const [monthlyExpenses, setMonthlyExpenses] = useState(monthlyExpensesParam)
  const [occupationRisk, setOccupationRisk] = useState(occupationRiskParam)

  const onMonthlyExpensesChanged = (newValue) => {
    setMonthlyExpenses(newValue)
  }

  const onOccupationRiskChanged = (newValue) => {
    setOccupationRisk(newValue)
  }

  const validateInput = useCallback(() => {
    return validateMonthlyExpenses(monthlyExpenses) == null
      && validateOccupationRisk(occupationRisk?.value) == null
  }, [monthlyExpenses, occupationRisk])

  const validateMonthlyExpenses = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return EmergencyFundsCalculatorFormCopy.errorMonthlyExpensesEmpty
    } else {
      return null
    }
  }

  const validateOccupationRisk = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return EmergencyFundsCalculatorFormCopy.errorOccupationRiskEmpty
    } else {
      return null
    }
  }

  useEffect(() => {
    const result = {
      isValid: validateInput(),
      monthlyExpenses: monthlyExpenses,
      occupationRisk: occupationRisk?.value
    }
    onChange(result)
  }, [monthlyExpenses, occupationRisk, onChange, validateInput]);

  return (
    <div className="emergency-funds-calculator-form-container">
      <UICurrencyInput
        defaultValue={monthlyExpenses}
        label={EmergencyFundsCalculatorFormCopy.monthlyExpensesLabel}
        note={EmergencyFundsCalculatorFormCopy.monthlyExpensesHelperText}
        error={validateMonthlyExpenses(monthlyExpenses)}
        onChange={(e) => { onMonthlyExpensesChanged(e) }}
      />

      <UIDropdownInput
        defaultValue={occupationRisk}
        label={EmergencyFundsCalculatorFormCopy.occupationRiskLabel}
        note={EmergencyFundsCalculatorFormCopy.occupationRiskHelperText}
        options={occupationRiskOptions}
        error={validateOccupationRisk(occupationRisk)}
        onChange={(e) => { onOccupationRiskChanged(e) }}
      />
    </div>
  );
}

const EmergencyFundsCalculatorFormCopy = {
  monthlyExpensesLabel: "How much do you usually spend in a month?",
  monthlyExpensesHelperText: "This includes all your living costs, necessities, mortgage payments, and other debt repayments.",
  occupationRiskLabel: "How many dependencies do you have?",
  occupationRiskHelperText: "Dependencies can be having kids, parents to support, unemployed wife, mortgage to repay, etc.",
  occupationRiskOptionLow: "No dependency",
  occupationRiskOptionMedium: "1 dependency",
  occupationRiskOptionHigh: "At least 2 or more dependencies",
  errorMonthlyExpensesEmpty: "Monthly expenses cannot be empty",
  errorMonthlyExpensesNegative: "Monthly expenses must be greater or equal to zero",
  errorOccupationRiskEmpty: "Occupation risk cannot be empty",
}

export default EmergencyFundsCalculatorForm;