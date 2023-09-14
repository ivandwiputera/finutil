import UICurrencyInput from "@components/UIInput/UICurrencyInput";
import Localise, { LocaliseKey } from "@localisations/Localise";
import { Validation } from "@utils/Validation";
import { useCallback, useEffect, useState } from "react";

import "./Budget503020CalculatorForm.css";

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
      return Localise(LocaliseKey.budget503020CalculatorFormErrorMonthlyIncomeEmpty)
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
  }, [monthlyIncome, validateInput]);

  return (
    <div className="budget-503020-calculator-form-container">
      <UICurrencyInput
        id="monthlyIncome"
        defaultValue={monthlyIncome}
        label={Localise(LocaliseKey.budget503020CalculatorFormMonthlyIncomeLabel)}
        note={Localise(LocaliseKey.budget503020CalculatorFormMonthlyIncomeHelperText)}
        error={validateMonthlyIncome(monthlyIncome)}
        onChange={(e) => { onMonthlyIncomeChanged(e) }}
      />
    </div>
  );
}

export default Budget503020CalculatorForm;