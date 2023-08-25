import "./Budget503020CalculatorForm.css"
import { useState, useEffect, useCallback } from "react";
import { Validation } from "utils/Validation";
import UICurrencyInput from "uicomponents/UIInput/UICurrencyInput";

const Budget503020CalculatorForm = (props) => {
  const montlyIncomeParam = props.monthlyIncome
  const onChange = props.onChange

  const [monthlyIncome, setMonthlyIncome] = useState(montlyIncomeParam)

  const onMonthlyIncomeChanged = (newValue) => {
    setMonthlyIncome(newValue)
  }

  const validateInput = useCallback(() => {
    return validateMonthlyIncome(monthlyIncome) == null
  }, [monthlyIncome])

  const validateMonthlyIncome = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Budget503020CalculatorFormCopy.errorMonthlyIncomeEmpty
    } else {
      return null
    }
  }

  useEffect(() => {
    const result = {
      isValid: validateInput(),
      monthlyIncome: monthlyIncome
    }
    onChange(result)
  }, [monthlyIncome, onChange, validateInput]);

  return (
    <div className="budget-503020-calculator-form-container">
      <UICurrencyInput
        defaultValue={monthlyIncome}
        label={Budget503020CalculatorFormCopy.monthlyIncomeLabel}
        note={Budget503020CalculatorFormCopy.monthlyIncomeHelperText}
        error={validateMonthlyIncome(monthlyIncome)}
        onChange={(e) => { onMonthlyIncomeChanged(e) }}
      />
    </div>
  );
}

const Budget503020CalculatorFormCopy = {
  monthlyIncomeLabel: "How much is your average monthly income?",
  monthlyIncomeHelperText: "This includes both your active income and also income from side-hustles.",
  errorMonthlyIncomeEmpty: "Monthly income cannot be empty"
}

export default Budget503020CalculatorForm;