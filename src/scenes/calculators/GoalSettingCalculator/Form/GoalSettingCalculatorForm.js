import "./GoalSettingCalculatorForm.css"
import UICurrencyInput from "uicomponents/UIInput/UICurrencyInput";
import { useCallback, useEffect, useState } from "react";
import { Validation } from "utils/Validation";
import Localise, { LocaliseKey } from "localisation/Localise";
import UINumberInput from "uicomponents/UIInput/UINumberInput";

const GoalSettingCalculatorForm = (props) => {
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
      return Localise(LocaliseKey.goalSettingCalculatorFormErrorGoalAmountEmpty)
    } else {
      return null
    }
  }

  const validateDuration = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.goalSettingCalculatorFormErrorDurationEmpty)
    } else {
      return null
    }
  }

  const validateRateOfReturn = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.goalSettingCalculatorFormErrorRateOfReturnEmpty)
    } else {
      return null
    }
  }

  const validateInflation = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.goalSettingCalculatorFormErrorInflationEmpty)
    } else {
      return null
    }
  }

  const validateSavedAmount = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.goalSettingCalculatorFormErrorSavedAmountEmpty)
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
  }, [goalAmount, duration, rateOfReturn, inflation, savedAmount, onChange, validateInput]);

  return (
    <div className="goal-setting-calculator-form-container">
      <UICurrencyInput
        defaultValue={goalAmount}
        label={Localise(LocaliseKey.goalSettingCalculatorFormGoalAmountLabel)}
        note={Localise(LocaliseKey.goalSettingCalculatorFormGoalAmountHelperText)}
        error={validateGoalAmount(goalAmount)}
        onChange={(e) => { onGoalAmountChanged(e) }}
      />

      <UINumberInput
        defaultValue={duration}
        label={Localise(LocaliseKey.goalSettingCalculatorFormDurationLabel)}
        note={Localise(LocaliseKey.goalSettingCalculatorFormDurationHelperText)}
        error={validateDuration(duration)}
        onChange={(e) => { onDurationChanged(e) }}
      />

      <UINumberInput
        defaultValue={rateOfReturn}
        label={Localise(LocaliseKey.goalSettingCalculatorFormRateOfReturnLabel)}
        note={Localise(LocaliseKey.goalSettingCalculatorFormRateOfReturnHelperText)}
        error={validateRateOfReturn(rateOfReturn)}
        onChange={(e) => { onRateOfReturnChanged(e) }}
      />

      <UINumberInput
        defaultValue={inflation}
        label={Localise(LocaliseKey.goalSettingCalculatorFormInflationLabel)}
        note={Localise(LocaliseKey.goalSettingCalculatorFormInflationHelperText)}
        error={validateInflation(inflation)}
        onChange={(e) => { onInflationChanged(e) }}
      />

      <UICurrencyInput
        defaultValue={savedAmount}
        label={Localise(LocaliseKey.goalSettingCalculatorFormSavedAmountLabel)}
        error={validateSavedAmount(savedAmount)}
        onChange={(e) => { onSavedAmountChanged(e) }}
      />
    </div>
  );
}

export default GoalSettingCalculatorForm;
