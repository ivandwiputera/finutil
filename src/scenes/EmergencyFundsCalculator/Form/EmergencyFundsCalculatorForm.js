import "./EmergencyFundsCalculatorForm.css"
import UICurrencyInput from "uicomponents/UIInput/UICurrencyInput";
import UIDropdownInput from "uicomponents/UIInput/UIDropdownInput";
import { useCallback, useEffect, useState } from "react";
import { OccupationRiskType } from "scenes/EmergencyFundsCalculator/EmergencyFundsConstants";
import { Validation } from "utils/Validation";
import Localise from "localisation/Localise";
import { LocaliseKey } from "localisation/Localise";

const EmergencyFundsCalculatorForm = (props) => {
  const monthlyExpensesParam = props.monthlyExpenses
  const occupationRiskParam = props.monthlyExpenses
  const onChange = props.onChange

  const occupationRiskOptions = [
    { value: OccupationRiskType.low, label: Localise(LocaliseKey.emergencyFundsCalculatorFormOccupationRiskOptionLow)},
    { value: OccupationRiskType.medium, label: Localise(LocaliseKey.emergencyFundsCalculatorFormOccupationRiskOptionMedium) },
    { value: OccupationRiskType.high, label: Localise(LocaliseKey.emergencyFundsCalculatorFormOccupationRiskOptionHigh) }
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
      return Localise(LocaliseKey.emergencyFundsCalculatorFormErrorMonthlyExpensesEmpty)
    } else {
      return null
    }
  }

  const validateOccupationRisk = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.emergencyFundsCalculatorFormErrorOccupationRiskEmpty)
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
        label={Localise(LocaliseKey.emergencyFundsCalculatorFormMonthlyExpensesLabel)}
        note={Localise(LocaliseKey.emergencyFundsCalculatorFormMonthlyExpensesHelperText)}
        error={validateMonthlyExpenses(monthlyExpenses)}
        onChange={(e) => { onMonthlyExpensesChanged(e) }}
      />

      <UIDropdownInput
        defaultValue={occupationRisk}
        label={Localise(LocaliseKey.emergencyFundsCalculatorFormOccupationRiskLabel)}
        note={Localise(LocaliseKey.emergencyFundsCalculatorFormOccupationRiskHelperText)}
        options={occupationRiskOptions}
        error={validateOccupationRisk(occupationRisk)}
        onChange={(e) => { onOccupationRiskChanged(e) }}
      />
    </div>
  );
}

export default EmergencyFundsCalculatorForm;