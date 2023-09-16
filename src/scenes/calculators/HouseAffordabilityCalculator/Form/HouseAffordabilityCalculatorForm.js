import UICurrencyInput from "@components/UIInput/UICurrencyInput";
import UINumberInput from "@components/UIInput/UINumberInput";
import { useLocalise, Copy } from "@localisations/Localise";
import { Validation } from "@utils/Validation";
import { useCallback, useEffect, useState } from "react";

import "./HouseAffordabilityCalculatorForm.css";

const HouseAffordabilityCalculatorForm = (props) => {
  const { localise } = useLocalise()
  
  const monthlyIncomeParam = props.monthlyIncome
  const savedAmountParam = props.savedAmount
  const mortgageTenorParam = props.mortgageTenor
  const mortgageInterestRateParam = props.mortgageInterestRate
  const onChange = props.onChange

  const [monthlyIncome, setMonthlyIncome] = useState(monthlyIncomeParam)
  const [mortgageTenor, setMortgageTenor] = useState(mortgageTenorParam)
  const [mortgageInterestRate, setMortgageInterestRate] = useState(mortgageInterestRateParam)
  const [savedAmount, setSavedAmount] = useState(savedAmountParam)

  const onMonthlyIncomeChanged = (newValue) => {
    setMonthlyIncome(newValue)
  }

  const onMortgageTenorChanged = (newValue) => {
    setMortgageTenor(newValue)
  }

  const onMortgageInterestRateChanged = (newValue) => {
    setMortgageInterestRate(newValue)
  }

  const onSavedAmountChanged = (newValue) => {
    setSavedAmount(newValue)
  }

  const validateInput = useCallback(() => {
    return validateMonthlyIncome(monthlyIncome) == null
      && validateMortgageTenor(mortgageTenor) == null
      && validateMortgageInterestRate(mortgageInterestRate) == null
      && validateSavedAmount(savedAmount) == null
  }, [monthlyIncome, mortgageTenor, mortgageInterestRate, savedAmount])

  const validateMonthlyIncome = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return localise(Copy.houseAffordabilityCalculatorFormErrorMonthlyIncomeEmpty)
    } else {
      return null
    }
  }

  const validateMortgageTenor = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return localise(Copy.houseAffordabilityCalculatorFormErrorMortgageTenorEmpty)
    } else {
      return null
    }
  }

  const validateMortgageInterestRate = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return localise(Copy.houseAffordabilityCalculatorFormErrorMortgageInterestEmpty)
    } else {
      return null
    }
  }

  const validateSavedAmount = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return localise(Copy.houseAffordabilityCalculatorFormErrorSavedAmountEmpty)
    } else {
      return null
    }
  }

  useEffect(() => {
    const result = {
      isValid: validateInput(),
      monthlyIncome: monthlyIncome,
      mortgageTenor: mortgageTenor,
      mortgageInterestRate: mortgageInterestRate,
      savedAmount: savedAmount
    }
    onChange(result)
  }, [monthlyIncome, mortgageTenor, mortgageInterestRate, savedAmount, validateInput]);

  return (
    <div className="house-affordability-calculator-form-container">
      <UICurrencyInput
        id="monthlyIncome"
        defaultValue={monthlyIncome}
        label={localise(Copy.houseAffordabilityCalculatorFormMonthlyIncomeLabel)}
        note={localise(Copy.houseAffordabilityCalculatorFormMonthlyIncomeHelperText)}
        error={validateMonthlyIncome(monthlyIncome)}
        onChange={(e) => { onMonthlyIncomeChanged(e) }}
      />

      <UINumberInput
        id="mortgageTenor"
        defaultValue={mortgageTenor}
        label={localise(Copy.houseAffordabilityCalculatorFormMortgageTenorLabel)}
        note={localise(Copy.houseAffordabilityCalculatorFormMortgageTenorHelperText)}
        error={validateMortgageTenor(mortgageTenor)}
        onChange={(e) => { onMortgageTenorChanged(e) }}
      />

      <UINumberInput
        id="mortgageInterestRate"
        defaultValue={mortgageInterestRate}
        label={localise(Copy.houseAffordabilityCalculatorFormMortgageInterestLabel)}
        note={localise(Copy.houseAffordabilityCalculatorFormMortgageInterestHelperText)}
        error={validateMortgageInterestRate(mortgageInterestRate)}
        onChange={(e) => { onMortgageInterestRateChanged(e) }}
      />

      <UICurrencyInput
        id="savedAmount"
        defaultValue={savedAmount}
        label={localise(Copy.houseAffordabilityCalculatorFormSavedAmountLabel)}
        error={validateSavedAmount(savedAmount)}
        onChange={(e) => { onSavedAmountChanged(e) }}
      />
    </div>
  );
}

export default HouseAffordabilityCalculatorForm