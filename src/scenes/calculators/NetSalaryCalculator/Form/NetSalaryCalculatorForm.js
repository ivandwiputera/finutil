import "./NetSalaryCalculatorForm.css"
import UICurrencyInput from "uicomponents/UIInput/UICurrencyInput";
import { useCallback, useEffect, useState } from "react";
import { Validation } from "utils/Validation";
import { PTKPType } from "../NetSalaryCalculatorService";
import Localise, { LocaliseKey } from "localisation/Localise";
import UIDropdownInput from "uicomponents/UIInput/UIDropdownInput";

const NetSalaryCalculatorForm = (props) => {
  const monthlyBasicSalaryParam = props.monthlyBasicSalary
  const monthlyAllowancesParam = props.monthlyAllowances
  const maritalStatusParam = props.maritalStatus
  const onChange = props.onChange

  const [monthlyBasicSalary, setMonthlyBasicSalary] = useState(monthlyBasicSalaryParam)
  const [monthlyAllowances, setMonthlyAllowances] = useState(monthlyAllowancesParam)
  const [maritalStatus, setMaritalStatus] = useState(maritalStatusParam)

  const maritalStatusOptions = [
    { value: PTKPType.TK0.value, label: Localise(LocaliseKey.netSalaryCalculatorPtkpTk0Label) },
    { value: PTKPType.TK1.value, label: Localise(LocaliseKey.netSalaryCalculatorPtkpTk1Label) },
    { value: PTKPType.TK2.value, label: Localise(LocaliseKey.netSalaryCalculatorPtkpTk2Label) },
    { value: PTKPType.TK3.value, label: Localise(LocaliseKey.netSalaryCalculatorPtkpTk3Label) },
    { value: PTKPType.K0.value, label: Localise(LocaliseKey.netSalaryCalculatorPtkpK0Label) },
    { value: PTKPType.K1.value, label: Localise(LocaliseKey.netSalaryCalculatorPtkpK1Label) },
    { value: PTKPType.K2.value, label: Localise(LocaliseKey.netSalaryCalculatorPtkpK2Label) },
    { value: PTKPType.K3.value, label: Localise(LocaliseKey.netSalaryCalculatorPtkpK3Label) },
    { value: PTKPType.KI0.value, label: Localise(LocaliseKey.netSalaryCalculatorPtkpKi0Label) },
    { value: PTKPType.KI1.value, label: Localise(LocaliseKey.netSalaryCalculatorPtkpKi1Label) },
    { value: PTKPType.KI2.value, label: Localise(LocaliseKey.netSalaryCalculatorPtkpKi2Label) },
    { value: PTKPType.KI3.value, label: Localise(LocaliseKey.netSalaryCalculatorPtkpKi3Label) }
  ]

  const onMonthlyBasicSalaryChanged = (newValue) => {
    setMonthlyBasicSalary(newValue)
  }

  const onMonthlyAllowancesChanged = (newValue) => {
    setMonthlyAllowances(newValue)
  }

  const onMaritalStatusChanged = (newValue) => {
    setMaritalStatus(newValue)
  }

  const validateInput = useCallback(() => {
    return validateMonthlyBasicSalary(monthlyBasicSalary) == null
      && validateMonthlyAllowances(monthlyAllowances) == null
      && validateMaritalStatus(maritalStatus) == null
  }, [monthlyBasicSalary, monthlyAllowances, maritalStatus])

  const validateMonthlyBasicSalary = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.netSalaryCalculatorFormErrorMonthlyBasicSalaryEmpty)
    } else {
      return null
    }
  }

  const validateMonthlyAllowances = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.netSalaryCalculatorFormErrorMonthlyAllowanceEmpty)
    } else {
      return null
    }
  }

  const validateMaritalStatus = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.netSalaryCalculatorFormErrorMaritalStatusEmpty)
    } else {
      return null
    }
  }

  useEffect(() => {
    const result = {
      isValid: validateInput(),
      monthlyBasicSalary: monthlyBasicSalary,
      monthlyAllowances: monthlyAllowances,
      maritalStatus: maritalStatus
    }
    onChange(result)
  }, [monthlyBasicSalary, monthlyAllowances, maritalStatus, onChange, validateInput]);

  return (
    <div className="net-salary-calculator-form-container">
      <UICurrencyInput
        defaultValue={monthlyBasicSalary}
        label={Localise(LocaliseKey.netSalaryCalculatorFormMonthlyBasicSalaryLabel)}
        note={Localise(LocaliseKey.netSalaryCalculatorFormMonthlyBasicSalaryHelperText)}
        error={validateMonthlyBasicSalary(monthlyBasicSalary)}
        onChange={(e) => { onMonthlyBasicSalaryChanged(e) }}
      />

      <UICurrencyInput
        defaultValue={monthlyAllowances}
        label={Localise(LocaliseKey.netSalaryCalculatorFormMonthlyAllowanceLabel)}
        note={Localise(LocaliseKey.netSalaryCalculatorFormMonthlyAllowanceHelperText)}
        error={validateMonthlyAllowances(monthlyAllowances)}
        onChange={(e) => { onMonthlyAllowancesChanged(e) }}
      />

      <UIDropdownInput
        defaultValue={maritalStatus}
        label={Localise(LocaliseKey.netSalaryCalculatorFormMaritalStatusLabel)}
        error={validateMaritalStatus(maritalStatus)}
        options={maritalStatusOptions}
        onChange={(e) => { onMaritalStatusChanged(e) }}
      />
    </div>
  );
}

export default NetSalaryCalculatorForm;
