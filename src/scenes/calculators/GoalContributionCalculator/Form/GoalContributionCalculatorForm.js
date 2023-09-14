import UICurrencyInput from "@components/UIInput/UICurrencyInput";
import UINumberInput from "@components/UIInput/UINumberInput";
import Localise, { LocaliseKey } from "@localisations/Localise";
import { Validation } from "@utils/Validation";
import { useCallback, useEffect, useState } from "react";

import "./GoalContributionCalculatorForm.css";

const GoalContributionCalculatorForm = (props) => {
  const goalAmountParam = props.goalAmount
  const durationParam = props.duration
  const rateOfReturnParam = props.rateOfReturn
  const inflationParam = props.inflation
  const savedAmountParam = props.savedAmount
  const onChange = props.onChange

  const [goalAmount, setGoalAmount] = useState(goalAmountParam)
  const [duration, setDuration] = useState(durationParam)
  const [rateOfReturn, setRateOfReturn] = useState(rateOfReturnParam)
  const [inflation, setInflation] = useState(inflationParam)
  const [savedAmount, setSavedAmount] = useState(savedAmountParam)

  const onGoalAmountChanged = (newValue) => {
    setGoalAmount(newValue)
  }

  const onDurationChanged = (newValue) => {
    setDuration(newValue)
  }

  const onRateOfReturnChanged = (newValue) => {
    setRateOfReturn(newValue)
  }

  const onInflationChanged = (newValue) => {
    setInflation(newValue)
  }

  const onSavedAmountChanged = (newValue) => {
    setSavedAmount(newValue)
  }

  const validateInput = useCallback(() => {
    return validateGoalAmount(goalAmount) == null
      && validateDuration(duration) == null
      && validateRateOfReturn(rateOfReturn) == null
      && validateInflation(inflation) == null
      && validateSavedAmount(savedAmount) == null
  }, [goalAmount, duration, rateOfReturn, inflation, savedAmount])

  const validateGoalAmount = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.goalContributionCalculatorFormErrorGoalAmountEmpty)
    } else {
      return null
    }
  }

  const validateDuration = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.goalContributionCalculatorFormErrorDurationEmpty)
    } else {
      return null
    }
  }

  const validateRateOfReturn = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.goalContributionCalculatorFormErrorRateOfReturnEmpty)
    } else {
      return null
    }
  }

  const validateInflation = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.goalContributionCalculatorFormErrorInflationEmpty)
    } else {
      return null
    }
  }

  const validateSavedAmount = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.goalContributionCalculatorFormErrorSavedAmountEmpty)
    } else {
      return null
    }
  }

  useEffect(() => {
    const result = {
      isValid: validateInput(),
      goalAmount: goalAmount,
      duration: duration,
      rateOfReturn: rateOfReturn,
      inflation: inflation,
      savedAmount: savedAmount
    }
    onChange(result)
  }, [goalAmount, duration, rateOfReturn, inflation, savedAmount, validateInput]);

  return (
    <div className="goal-contribution-calculator-form-container">
      <UICurrencyInput
        id="goalAmount"
        defaultValue={goalAmount}
        label={Localise(LocaliseKey.goalContributionCalculatorFormGoalAmountLabel)}
        note={Localise(LocaliseKey.goalContributionCalculatorFormGoalAmountHelperText)}
        error={validateGoalAmount(goalAmount)}
        onChange={(e) => { onGoalAmountChanged(e) }}
      />

      <UINumberInput
        id="duration"
        defaultValue={duration}
        label={Localise(LocaliseKey.goalContributionCalculatorFormDurationLabel)}
        note={Localise(LocaliseKey.goalContributionCalculatorFormDurationHelperText)}
        error={validateDuration(duration)}
        onChange={(e) => { onDurationChanged(e) }}
      />

      <UINumberInput
        id="rateOfReturn"
        defaultValue={rateOfReturn}
        label={Localise(LocaliseKey.goalContributionCalculatorFormRateOfReturnLabel)}
        note={Localise(LocaliseKey.goalContributionCalculatorFormRateOfReturnHelperText)}
        error={validateRateOfReturn(rateOfReturn)}
        onChange={(e) => { onRateOfReturnChanged(e) }}
      />

      <UINumberInput
        id="inflation"
        defaultValue={inflation}
        label={Localise(LocaliseKey.goalContributionCalculatorFormInflationLabel)}
        note={Localise(LocaliseKey.goalContributionCalculatorFormInflationHelperText)}
        error={validateInflation(inflation)}
        onChange={(e) => { onInflationChanged(e) }}
      />

      <UICurrencyInput
        id="savedAmount"
        defaultValue={savedAmount}
        label={Localise(LocaliseKey.goalContributionCalculatorFormSavedAmountLabel)}
        error={validateSavedAmount(savedAmount)}
        onChange={(e) => { onSavedAmountChanged(e) }}
      />
    </div>
  );
}

export default GoalContributionCalculatorForm;
