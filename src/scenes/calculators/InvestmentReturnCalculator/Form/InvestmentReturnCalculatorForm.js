import UICurrencyInput from "@components/UIInput/UICurrencyInput";
import UINumberInput from "@components/UIInput/UINumberInput";
import Localise, { LocaliseKey } from "@localisations/Localise";
import { Validation } from "@utils/Validation";
import { useCallback, useEffect, useState } from "react";

import "./InvestmentReturnCalculatorForm.css";

const InvestmentReturnCalculatorForm = (props) => {
  const initialAmountParam = props.initialAmount
  const durationParam = props.duration
  const rateOfReturnParam = props.rateOfReturn
  const contributionParam = props.contribution
  const onChange = props.onChange

  const [initialAmount, setInitialAmount] = useState(initialAmountParam)
  const [duration, setDuration] = useState(durationParam)
  const [rateOfReturn, setRateOfReturn] = useState(rateOfReturnParam)
  const [contribution, setContribution] = useState(contributionParam)

  const onInitialAmountChanged = (newValue) => {
    setInitialAmount(newValue)
  }

  const onDurationChanged = (newValue) => {
    setDuration(newValue)
  }

  const onRateOfReturnChanged = (newValue) => {
    setRateOfReturn(newValue)
  }

  const onContributionChanged = (newValue) => {
    setContribution(newValue)
  }

  const validateInput = useCallback(() => {
    return validateInitialAmount(initialAmount) == null
      && validateDuration(duration) == null
      && validateRateOfReturn(rateOfReturn) == null
      && validateContribution(contribution) == null
  }, [initialAmount, duration, rateOfReturn, contribution])

  const validateInitialAmount = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.investmentReturnCalculatorFormErrorInitialAmountEmpty)
    } else {
      return null
    }
  }

  const validateDuration = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.investmentReturnCalculatorFormErrorDurationEmpty)
    } else {
      return null
    }
  }

  const validateRateOfReturn = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.investmentReturnCalculatorFormErrorRateOfReturnEmpty)
    } else {
      return null
    }
  }

  const validateContribution = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.investmentReturnCalculatorFormErrorContributionEmpty)
    } else {
      return null
    }
  }

  useEffect(() => {
    const result = {
      isValid: validateInput(),
      initialAmount: initialAmount,
      duration: duration,
      rateOfReturn: rateOfReturn,
      contribution: contribution
    }
    onChange(result)
  }, [initialAmount, duration, rateOfReturn, contribution, validateInput]);

  return (
    <div className="investment-return-calculator-form-container">
      <UICurrencyInput
        id="initialAmount"
        defaultValue={initialAmount}
        label={Localise(LocaliseKey.investmentReturnCalculatorFormInitialAmountLabel)}
        note={Localise(LocaliseKey.investmentReturnCalculatorFormInitialAmountHelperText)}
        error={validateInitialAmount(initialAmount)}
        onChange={(e) => { onInitialAmountChanged(e) }}
      />

      <UINumberInput
        id="duration"
        defaultValue={duration}
        label={Localise(LocaliseKey.investmentReturnCalculatorFormDurationLabel)}
        note={Localise(LocaliseKey.investmentReturnCalculatorFormDurationHelperText)}
        error={validateDuration(duration)}
        onChange={(e) => { onDurationChanged(e) }}
      />

      <UINumberInput
        id="rateOfReturn"
        defaultValue={rateOfReturn}
        label={Localise(LocaliseKey.investmentReturnCalculatorFormRateOfReturnLabel)}
        note={Localise(LocaliseKey.investmentReturnCalculatorFormRateOfReturnHelperText)}
        error={validateRateOfReturn(rateOfReturn)}
        onChange={(e) => { onRateOfReturnChanged(e) }}
      />

      <UICurrencyInput
        id="contribution"
        defaultValue={contribution}
        label={Localise(LocaliseKey.investmentReturnCalculatorFormContributionLabel)}
        note={Localise(LocaliseKey.investmentReturnCalculatorFormContributionHelperText)}
        error={validateContribution(contribution)}
        onChange={(e) => { onContributionChanged(e) }}
      />
    </div>
  );
}

export default InvestmentReturnCalculatorForm;
