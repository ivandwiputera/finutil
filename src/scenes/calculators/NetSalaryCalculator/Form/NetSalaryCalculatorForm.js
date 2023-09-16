import UICurrencyInput from "@components/UIInput/UICurrencyInput";
import UIDropdownInput from "@components/UIInput/UIDropdownInput";
import { useLocalise, Copy } from "@localisations/Localise";
import { Validation } from "@utils/Validation";
import { useCallback, useEffect, useState } from "react";
import { PTKPType } from "../NetSalaryCalculatorService";

import "./NetSalaryCalculatorForm.css";

const NetSalaryCalculatorForm = (props) => {
  const { localise } = useLocalise()
  
  const monthlyBasicSalaryParam = props.monthlyBasicSalary
  const monthlyAllowancesParam = props.monthlyAllowances
  const maritalStatusParam = props.maritalStatus
  const onChange = props.onChange

  const [monthlyBasicSalary, setMonthlyBasicSalary] = useState(monthlyBasicSalaryParam)
  const [monthlyAllowances, setMonthlyAllowances] = useState(monthlyAllowancesParam)
  const [maritalStatus, setMaritalStatus] = useState(maritalStatusParam)

  const maritalStatusOptions = [
    { value: PTKPType.TK0.value, label: localise(Copy.netSalaryCalculatorPtkpTk0Label) },
    { value: PTKPType.TK1.value, label: localise(Copy.netSalaryCalculatorPtkpTk1Label) },
    { value: PTKPType.TK2.value, label: localise(Copy.netSalaryCalculatorPtkpTk2Label) },
    { value: PTKPType.TK3.value, label: localise(Copy.netSalaryCalculatorPtkpTk3Label) },
    { value: PTKPType.K0.value, label: localise(Copy.netSalaryCalculatorPtkpK0Label) },
    { value: PTKPType.K1.value, label: localise(Copy.netSalaryCalculatorPtkpK1Label) },
    { value: PTKPType.K2.value, label: localise(Copy.netSalaryCalculatorPtkpK2Label) },
    { value: PTKPType.K3.value, label: localise(Copy.netSalaryCalculatorPtkpK3Label) },
    { value: PTKPType.KI0.value, label: localise(Copy.netSalaryCalculatorPtkpKi0Label) },
    { value: PTKPType.KI1.value, label: localise(Copy.netSalaryCalculatorPtkpKi1Label) },
    { value: PTKPType.KI2.value, label: localise(Copy.netSalaryCalculatorPtkpKi2Label) },
    { value: PTKPType.KI3.value, label: localise(Copy.netSalaryCalculatorPtkpKi3Label) }
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
      return localise(Copy.netSalaryCalculatorFormErrorMonthlyBasicSalaryEmpty)
    } else {
      return null
    }
  }

  const validateMonthlyAllowances = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return localise(Copy.netSalaryCalculatorFormErrorMonthlyAllowanceEmpty)
    } else {
      return null
    }
  }

  const validateMaritalStatus = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return localise(Copy.netSalaryCalculatorFormErrorMaritalStatusEmpty)
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
  }, [monthlyBasicSalary, monthlyAllowances, maritalStatus, validateInput]);

  return (
    <div className="net-salary-calculator-form-container">
      <UICurrencyInput
        id="monthlyBasicSalary"
        defaultValue={monthlyBasicSalary}
        label={localise(Copy.netSalaryCalculatorFormMonthlyBasicSalaryLabel)}
        note={localise(Copy.netSalaryCalculatorFormMonthlyBasicSalaryHelperText)}
        error={validateMonthlyBasicSalary(monthlyBasicSalary)}
        onChange={(e) => { onMonthlyBasicSalaryChanged(e) }}
      />

      <UICurrencyInput
        id="monthlyAllowances"
        defaultValue={monthlyAllowances}
        label={localise(Copy.netSalaryCalculatorFormMonthlyAllowanceLabel)}
        note={localise(Copy.netSalaryCalculatorFormMonthlyAllowanceHelperText)}
        error={validateMonthlyAllowances(monthlyAllowances)}
        onChange={(e) => { onMonthlyAllowancesChanged(e) }}
      />

      <UIDropdownInput
        id="maritalStatus"
        defaultValue={maritalStatus}
        label={localise(Copy.netSalaryCalculatorFormMaritalStatusLabel)}
        error={validateMaritalStatus(maritalStatus)}
        options={maritalStatusOptions}
        onChange={(e) => { onMaritalStatusChanged(e) }}
      />
    </div>
  );
}

export default NetSalaryCalculatorForm;
