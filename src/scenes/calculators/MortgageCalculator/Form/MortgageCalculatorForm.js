import "./MortgageCalculatorForm.css"
import UICurrencyInput from "uicomponents/UIInput/UICurrencyInput";
import UINumberInput from "uicomponents/UIInput/UINumberInput";
import { useCallback, useEffect, useState } from "react";
import { Validation } from "utils/Validation";
import Localise, { LocaliseKey } from "localisation/Localise";

const MortgageCalculatorForm = (props) => {
  const housePriceParam = props.housePrice
  const downPaymentParam = props.downPayment
  const mortgageTenorParam = props.mortgageTenor
  const mortgageInterestRateParam = props.mortgageInterestRate
  const onChange = props.onChange

  const [housePrice, setHousePrice] = useState(housePriceParam)
  const [downPayment, setDownPayment] = useState(downPaymentParam)
  const [mortgageTenor, setMortgageTenor] = useState(mortgageTenorParam)
  const [mortgageInterestRate, setMortgageInterestRate] = useState(mortgageInterestRateParam)

  const onHousePriceChanged = (newValue) => {
    setHousePrice(newValue)
  }

  const onDownPaymentChanged = (newValue) => {
    setDownPayment(newValue)
  }

  const onMortgageTenorChanged = (newValue) => {
    setMortgageTenor(newValue)
  }

  const onMortgageInterestRateChanged = (newValue) => {
    setMortgageInterestRate(newValue)
  }

  const validateInput = useCallback(() => {
    return validateHousePrice(housePrice) == null
      && validateDownPayment(downPayment) == null
      && validateMortgageTenor(mortgageTenor) == null
      && validateMortgageInterestRate(mortgageInterestRate) == null
  }, [housePrice, downPayment, mortgageTenor, mortgageInterestRate])

  const validateHousePrice = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.mortgageCalculatorFormErrorHousePriceEmpty)
    } else {
      return null
    }
  }

  const validateDownPayment = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.mortgageCalculatorFormErrorDownPaymentEmpty)
    } else {
      return null
    }
  }

  const validateMortgageTenor = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.mortgageCalculatorFormErrorMortgageTenorEmpty)
    } else {
      return null
    }
  }

  const validateMortgageInterestRate = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.mortgageCalculatorFormErrorMortgageInterestEmpty)
    } else {
      return null
    }
  }

  useEffect(() => {
    const result = {
      isValid: validateInput(),
      housePrice: housePrice,
      downPayment: downPayment,
      mortgageTenor: mortgageTenor,
      mortgageInterestRate: mortgageInterestRate
    }
    onChange(result)
  }, [housePrice, downPayment, mortgageTenor, mortgageInterestRate, validateInput]);

  return (
    <div className="goal-contribution-calculator-form-container">
      <UICurrencyInput
        id="housePrice"
        defaultValue={housePrice}
        label={Localise(LocaliseKey.mortgageCalculatorFormHousePriceLabel)}
        note={Localise(LocaliseKey.mortgageCalculatorFormHousePriceHelperText)}
        error={validateHousePrice(housePrice)}
        onChange={(e) => { onHousePriceChanged(e) }}
      />

      <UINumberInput
        id="downPayment"
        defaultValue={downPayment}
        label={Localise(LocaliseKey.mortgageCalculatorFormDownPaymentLabel)}
        note={Localise(LocaliseKey.mortgageCalculatorFormDownPaymentHelperText)}
        error={validateDownPayment(downPayment)}
        onChange={(e) => { onDownPaymentChanged(e) }}
      />

      <UINumberInput
        id="mortgageTenor"
        defaultValue={mortgageTenor}
        label={Localise(LocaliseKey.mortgageCalculatorFormMortgageTenorLabel)}
        note={Localise(LocaliseKey.mortgageCalculatorFormMortgageTenorHelperText)}
        error={validateMortgageTenor(mortgageTenor)}
        onChange={(e) => { onMortgageTenorChanged(e) }}
      />

      <UINumberInput
        id="mortgageInterestRate"
        defaultValue={mortgageInterestRate}
        label={Localise(LocaliseKey.mortgageCalculatorFormMortgageInterestLabel)}
        note={Localise(LocaliseKey.mortgageCalculatorFormMortgageInterestHelperText)}
        error={validateMortgageInterestRate(mortgageInterestRate)}
        onChange={(e) => { onMortgageInterestRateChanged(e) }}
      />
    </div>
  );
}

export default MortgageCalculatorForm