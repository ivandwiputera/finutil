import UICurrencyInput from "@components/UIInput/UICurrencyInput";
import UINumberInput from "@components/UIInput/UINumberInput";
import Localise, { LocaliseKey } from "@localisation/Localise";
import { Validation } from "@utils/Validation";
import { useCallback, useEffect, useState } from "react";

import "./GoalDurationCalculatorForm.css";

const GoalDurationCalculatorForm = (props) => {
  const goalAmountParam = props.goalAmount
  const contributionParam = props.contribution
  const rateOfReturnParam = props.rateOfReturn
  const savedAmountParam = props.savedAmount
  const onChange = props.onChange

  const [goalAmount, setGoalAmount] = useState(goalAmountParam)
  const [contribution, setContribution] = useState(contributionParam)
  const [rateOfReturn, setRateOfReturn] = useState(rateOfReturnParam)
  const [savedAmount, setSavedAmount] = useState(savedAmountParam)

  const onGoalAmountChanged = (newValue) => {
    setGoalAmount(newValue)
  }

  const onContributionChanged = (newValue) => {
    setContribution(newValue)
  }

  const onRateOfReturnChanged = (newValue) => {
    setRateOfReturn(newValue)
  }

  const onSavedAmountChanged = (newValue) => {
    setSavedAmount(newValue)
  }

  const validateInput = useCallback(() => {
    return validateGoalAmount(goalAmount) == null
      && validateContribution(contribution) == null
      && validateRateOfReturn(rateOfReturn) == null
      && validateSavedAmount(savedAmount) == null
  }, [goalAmount, contribution, rateOfReturn, savedAmount])

  const validateGoalAmount = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.goalDurationCalculatorFormErrorGoalAmountEmpty)
    } else {
      return null
    }
  }

  const validateContribution = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.goalDurationCalculatorFormErrorContributionEmpty)
    } else {
      return null
    }
  }

  const validateRateOfReturn = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.goalDurationCalculatorFormErrorRateOfReturnEmpty)
    } else {
      return null
    }
  }

  const validateSavedAmount = (value) => {
    if (!Validation.validateNotEmpty(value)) {
      return Localise(LocaliseKey.goalDurationCalculatorFormErrorSavedAmountEmpty)
    } else {
      return null
    }
  }

  useEffect(() => {
    const result = {
      isValid: validateInput(),
      goalAmount: goalAmount,
      contribution: contribution,
      rateOfReturn: rateOfReturn,
      savedAmount: savedAmount
    }
    onChange(result)
  }, [goalAmount, contribution, rateOfReturn, savedAmount, validateInput]);

  return (
    <div className="goal-duration-calculator-form-container">
      <UICurrencyInput
        id="goalAmount"
        defaultValue={goalAmount}
        label={Localise(LocaliseKey.goalDurationCalculatorFormGoalAmountLabel)}
        note={Localise(LocaliseKey.goalDurationCalculatorFormGoalAmountHelperText)}
        error={validateGoalAmount(goalAmount)}
        onChange={(e) => { onGoalAmountChanged(e) }}
      />

      <UICurrencyInput
        id="contribution"
        defaultValue={contribution}
        label={Localise(LocaliseKey.goalDurationCalculatorFormContributionLabel)}
        note={Localise(LocaliseKey.goalDurationCalculatorFormContributionHelperText)}
        error={validateContribution(contribution)}
        onChange={(e) => { onContributionChanged(e) }}
      />

      <UINumberInput
        id="rateOfReturn"
        defaultValue={rateOfReturn}
        label={Localise(LocaliseKey.goalDurationCalculatorFormRateOfReturnLabel)}
        note={Localise(LocaliseKey.goalDurationCalculatorFormRateOfReturnHelperText)}
        error={validateRateOfReturn(rateOfReturn)}
        onChange={(e) => { onRateOfReturnChanged(e) }}
      />

      <UICurrencyInput
        id="savedAmount"
        defaultValue={savedAmount}
        label={Localise(LocaliseKey.goalDurationCalculatorFormSavedAmountLabel)}
        error={validateSavedAmount(savedAmount)}
        onChange={(e) => { onSavedAmountChanged(e) }}
      />
    </div>
  );
}

export default GoalDurationCalculatorForm;
