import UICurrencyInput from "@components/UIInput/UICurrencyInput";
import UIDropdownInput from "@components/UIInput/UIDropdownInput";
import { useLocalise, Copy } from "@localisations/Localise";
import { Validation } from "@utils/Validation";
import { useCallback, useEffect, useState } from "react";
import { OccupationRiskType } from "../EmergencyFundsConstants";

import "./EmergencyFundsCalculatorForm.css";

const EmergencyFundsCalculatorForm = (props) => {
  const { localise } = useLocalise()
  
  const monthlyExpensesParam = props.monthlyExpenses
  const occupationRiskParam = props.monthlyExpenses
  const onChange = props.onChange

  const occupationRiskOptions = [
    { value: OccupationRiskType.low, label: localise(Copy.emergencyFundsCalculatorFormOccupationRiskOptionLow) },
    { value: OccupationRiskType.medium, label: localise(Copy.emergencyFundsCalculatorFormOccupationRiskOptionMedium) },
    { value: OccupationRiskType.high, label: localise(Copy.emergencyFundsCalculatorFormOccupationRiskOptionHigh) }
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
      return localise(Copy.emergencyFundsCalculatorFormErrorMonthlyExpensesEmpty)
    } else {
      return null
    }
  }

  const validateOccupationRisk = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return localise(Copy.emergencyFundsCalculatorFormErrorOccupationRiskEmpty)
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
  }, [monthlyExpenses, occupationRisk, validateInput]);

  return (
    <div className="emergency-funds-calculator-form-container">
      <UICurrencyInput
        id="monthlyExpenses"
        defaultValue={monthlyExpenses}
        label={localise(Copy.emergencyFundsCalculatorFormMonthlyExpensesLabel)}
        note={localise(Copy.emergencyFundsCalculatorFormMonthlyExpensesHelperText)}
        error={validateMonthlyExpenses(monthlyExpenses)}
        onChange={(e) => { onMonthlyExpensesChanged(e) }}
      />

      <UIDropdownInput
        id="occupationRisk"
        defaultValue={occupationRisk}
        label={localise(Copy.emergencyFundsCalculatorFormOccupationRiskLabel)}
        note={localise(Copy.emergencyFundsCalculatorFormOccupationRiskHelperText)}
        options={occupationRiskOptions}
        error={validateOccupationRisk(occupationRisk)}
        onChange={(e) => { onOccupationRiskChanged(e) }}
      />
    </div>
  );
}

export default EmergencyFundsCalculatorForm;