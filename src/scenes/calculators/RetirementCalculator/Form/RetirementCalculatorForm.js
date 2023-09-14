import UICurrencyInput from "@components/UIInput/UICurrencyInput";
import Localise, { LocaliseKey } from "@localisations/Localise";
import { Validation } from "@utils/Validation";
import { useCallback, useEffect, useState } from "react";

import "./RetirementCalculatorForm.css";

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
      return Localise(LocaliseKey.retirementCalculatorFormErrorMonthlyExpensesEmpty)
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
  }, [monthlyExpenses, validateInput]);

  return (
    <div className="retirement-calculator-form-container">
      <UICurrencyInput
        id="monthlyExpenses"
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

