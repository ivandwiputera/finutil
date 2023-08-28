import "./HouseAffordabilityCalculatorForm.css"
import UICurrencyInput from "uicomponents/UIInput/UICurrencyInput";
import UINumberInput from "uicomponents/UIInput/UINumberInput";
import { useCallback, useEffect, useState } from "react";
import { Validation } from "utils/Validation";
import Localise, { LocaliseKey } from "localisation/Localise";

const HouseAffordabilityCalculatorForm = (props) => {
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
      return Localise(LocaliseKey.houseAffordabilityCalculatorFormErrorMonthlyIncomeEmpty)
    } else {
      return null
    }
  }

  const validateMortgageTenor = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.houseAffordabilityCalculatorFormErrorMortgageTenorEmpty)
    } else {
      return null
    }
  }

  const validateMortgageInterestRate = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.houseAffordabilityCalculatorFormErrorMortgageInterestEmpty)
    } else {
      return null
    }
  }

  const validateSavedAmount = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.houseAffordabilityCalculatorFormErrorSavedAmountEmpty)
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
        label={Localise(LocaliseKey.houseAffordabilityCalculatorFormMonthlyIncomeLabel)}
        note={Localise(LocaliseKey.houseAffordabilityCalculatorFormMonthlyIncomeHelperText)}
        error={validateMonthlyIncome(monthlyIncome)}
        onChange={(e) => { onMonthlyIncomeChanged(e) }}
      />

      <UINumberInput
        id="mortgageTenor"
        defaultValue={mortgageTenor}
        label={Localise(LocaliseKey.houseAffordabilityCalculatorFormMortgageTenorLabel)}
        note={Localise(LocaliseKey.houseAffordabilityCalculatorFormMortgageTenorHelperText)}
        error={validateMortgageTenor(mortgageTenor)}
        onChange={(e) => { onMortgageTenorChanged(e) }}
      />

      <UINumberInput
        id="mortgageInterestRate"
        defaultValue={mortgageInterestRate}
        label={Localise(LocaliseKey.houseAffordabilityCalculatorFormMortgageInterestLabel)}
        note={Localise(LocaliseKey.houseAffordabilityCalculatorFormMortgageInterestHelperText)}
        error={validateMortgageInterestRate(mortgageInterestRate)}
        onChange={(e) => { onMortgageInterestRateChanged(e) }}
      />

      <UICurrencyInput
        id="savedAmount"
        defaultValue={savedAmount}
        label={Localise(LocaliseKey.houseAffordabilityCalculatorFormSavedAmountLabel)}
        error={validateSavedAmount(savedAmount)}
        onChange={(e) => { onSavedAmountChanged(e) }}
      />
    </div>
  );
}

export default HouseAffordabilityCalculatorForm