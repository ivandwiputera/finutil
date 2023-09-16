import UICurrencyInput from "@components/UIInput/UICurrencyInput";
import UINumberInput from "@components/UIInput/UINumberInput";
import { useLocalise, Copy } from "@localisations/Localise";
import { Validation } from "@utils/Validation";
import { useCallback, useEffect, useState } from "react";

import "./GoalContributionCalculatorForm.css";

const GoalContributionCalculatorForm = (props) => {
  const { localise } = useLocalise()
  
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
      return localise(Copy.goalContributionCalculatorFormErrorGoalAmountEmpty)
    } else {
      return null
    }
  }

  const validateDuration = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return localise(Copy.goalContributionCalculatorFormErrorDurationEmpty)
    } else {
      return null
    }
  }

  const validateRateOfReturn = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return localise(Copy.goalContributionCalculatorFormErrorRateOfReturnEmpty)
    } else {
      return null
    }
  }

  const validateInflation = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return localise(Copy.goalContributionCalculatorFormErrorInflationEmpty)
    } else {
      return null
    }
  }

  const validateSavedAmount = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return localise(Copy.goalContributionCalculatorFormErrorSavedAmountEmpty)
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
        label={localise(Copy.goalContributionCalculatorFormGoalAmountLabel)}
        note={localise(Copy.goalContributionCalculatorFormGoalAmountHelperText)}
        error={validateGoalAmount(goalAmount)}
        onChange={(e) => { onGoalAmountChanged(e) }}
      />

      <UINumberInput
        id="duration"
        defaultValue={duration}
        label={localise(Copy.goalContributionCalculatorFormDurationLabel)}
        note={localise(Copy.goalContributionCalculatorFormDurationHelperText)}
        error={validateDuration(duration)}
        onChange={(e) => { onDurationChanged(e) }}
      />

      <UINumberInput
        id="rateOfReturn"
        defaultValue={rateOfReturn}
        label={localise(Copy.goalContributionCalculatorFormRateOfReturnLabel)}
        note={localise(Copy.goalContributionCalculatorFormRateOfReturnHelperText)}
        error={validateRateOfReturn(rateOfReturn)}
        onChange={(e) => { onRateOfReturnChanged(e) }}
      />

      <UINumberInput
        id="inflation"
        defaultValue={inflation}
        label={localise(Copy.goalContributionCalculatorFormInflationLabel)}
        note={localise(Copy.goalContributionCalculatorFormInflationHelperText)}
        error={validateInflation(inflation)}
        onChange={(e) => { onInflationChanged(e) }}
      />

      <UICurrencyInput
        id="savedAmount"
        defaultValue={savedAmount}
        label={localise(Copy.goalContributionCalculatorFormSavedAmountLabel)}
        error={validateSavedAmount(savedAmount)}
        onChange={(e) => { onSavedAmountChanged(e) }}
      />
    </div>
  );
}

export default GoalContributionCalculatorForm;
