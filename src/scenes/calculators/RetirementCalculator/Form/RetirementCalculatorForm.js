import UICurrencyInput from "@components/UIInput/UICurrencyInput";
import { useLocalise, Copy } from "@localisations/Localise";
import { Validation } from "@utils/Validation";
import { useCallback, useEffect, useState } from "react";

import "./RetirementCalculatorForm.css";

const RetirementCalculatorForm = (props) => {
  const { localise } = useLocalise()
  
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
      return localise(Copy.retirementCalculatorFormErrorMonthlyExpensesEmpty)
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
        label={localise(Copy.retirementCalculatorFormMonthlyExpensesLabel)}
        note={localise(Copy.retirementCalculatorFormMonthlyExpensesHelperText)}
        error={validateMonthlyExpenses(monthlyExpenses)}
        onChange={(e) => { onMonthlyExpensesChanged(e) }}
      />
    </div>
  );
}

export default RetirementCalculatorForm;

