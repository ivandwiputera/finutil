import "./RetirementCalculatorForm.css"
import { useState, useEffect, useCallback } from "react";
import { Validation } from "utils/Validation";
import Localise, { LocaliseKey } from "localisation/Localise";
import UICurrencyInput from "uicomponents/UIInput/UICurrencyInput";

const RetirementCalculatorForm = (props) => {
  const monthlyExpensesParam = props.monthlyExpenses
  const onChange = props.onChange

  const [monthlyExpenses, setMonthlyExpenses] = useState(monthlyExpensesParam)

  const onMonthlyExpensesChanged = (newValue) => {
    setMonthlyExpenses(newValue)
  }

  const validateInput = useCallback(() => {
    return validateMonthlyExpenses(monthlyExpenses) == null
  }, [monthlyExpenses])

  const validateMonthlyExpenses = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.emergencyFundsCalculatorFormErrorMonthlyExpensesEmpty)
    } else {
      return null
    }
  }

  useEffect(() => {
    const result = {
      isValid: validateInput(),
      monthlyExpenses: monthlyExpenses
    }
    onChange(result)
  }, [monthlyExpenses, onChange, validateInput]);

  return (
    <div className="retirement-calculator-form-container">
      <UICurrencyInput
        defaultValue={monthlyExpenses}
        label={Localise(LocaliseKey.retirementCalculatorFormMonthlyExpensesLabel)}
        note={Localise(LocaliseKey.retirementCalculatorFormMonthlyExpensesHelperText)}
        error={validateMonthlyExpenses(monthlyExpenses)}
        onChange={(e) => { onMonthlyExpensesChanged(e) }}
      />
    </div>
  );
}

export default RetirementCalculatorForm;

