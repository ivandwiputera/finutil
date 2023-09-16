import UICurrencyInput from "@components/UIInput/UICurrencyInput";
import UINumberInput from "@components/UIInput/UINumberInput";
import { useLocalise, Copy } from "@localisations/Localise";
import { Validation } from "@utils/Validation";
import { useCallback, useEffect, useState } from "react";

import "./MortgageCalculatorForm.css";

const MortgageCalculatorForm = (props) => {
  const { localise } = useLocalise()
  
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
      return localise(Copy.mortgageCalculatorFormErrorHousePriceEmpty)
    } else {
      return null
    }
  }

  const validateDownPayment = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return localise(Copy.mortgageCalculatorFormErrorDownPaymentEmpty)
    } else {
      return null
    }
  }

  const validateMortgageTenor = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return localise(Copy.mortgageCalculatorFormErrorMortgageTenorEmpty)
    } else {
      return null
    }
  }

  const validateMortgageInterestRate = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return localise(Copy.mortgageCalculatorFormErrorMortgageInterestEmpty)
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
        label={localise(Copy.mortgageCalculatorFormHousePriceLabel)}
        note={localise(Copy.mortgageCalculatorFormHousePriceHelperText)}
        error={validateHousePrice(housePrice)}
        onChange={(e) => { onHousePriceChanged(e) }}
      />

      <UINumberInput
        id="downPayment"
        defaultValue={downPayment}
        label={localise(Copy.mortgageCalculatorFormDownPaymentLabel)}
        note={localise(Copy.mortgageCalculatorFormDownPaymentHelperText)}
        error={validateDownPayment(downPayment)}
        onChange={(e) => { onDownPaymentChanged(e) }}
      />

      <UINumberInput
        id="mortgageTenor"
        defaultValue={mortgageTenor}
        label={localise(Copy.mortgageCalculatorFormMortgageTenorLabel)}
        note={localise(Copy.mortgageCalculatorFormMortgageTenorHelperText)}
        error={validateMortgageTenor(mortgageTenor)}
        onChange={(e) => { onMortgageTenorChanged(e) }}
      />

      <UINumberInput
        id="mortgageInterestRate"
        defaultValue={mortgageInterestRate}
        label={localise(Copy.mortgageCalculatorFormMortgageInterestLabel)}
        note={localise(Copy.mortgageCalculatorFormMortgageInterestHelperText)}
        error={validateMortgageInterestRate(mortgageInterestRate)}
        onChange={(e) => { onMortgageInterestRateChanged(e) }}
      />
    </div>
  );
}

export default MortgageCalculatorForm