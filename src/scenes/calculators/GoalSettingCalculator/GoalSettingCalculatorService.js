import { TVMCalculator } from "utils/TVMCalculator"

export class GoalSettingCalculatorService {
  static calculateGoal = (input) => {
    if (input?.goalAmount == null) { return null }
    if (input?.duration == null) { return null }
    if (input?.rateOfReturn == null) { return null }
    if (input?.inflation == null) { return null }
    if (input?.savedAmount == null) { return null }

    const goalAmount = input.goalAmount
    const duration = input.duration
    const rateOfReturn = input.rateOfReturn
    const inflation = input.inflation
    const savedAmount = input.savedAmount

    // Case: Goal amount is invalid
    if (goalAmount <= 0) {
      const goalAmountInFuture = 0
      const monthlyContribution = 0
      return {monthlyContribution, goalAmountInFuture}
    }

    // Case: Duration is invalid
    if (duration <= 0) {
      const goalAmountInFuture = goalAmount
      const monthlyContribution = goalAmount - savedAmount
      return {monthlyContribution, goalAmountInFuture}
    }

    // Case: Default
    const goalAmountInFuture = -1 * TVMCalculator.fv({
      i: inflation / 100.0,
      nper: duration,
      pmt: 0.0,
      pv: goalAmount,
      isBeginning: false
    })
    const monthlyContribution = TVMCalculator.pmt({
      i: rateOfReturn / 100.0,
      nper: duration,
      pv: savedAmount,
      fv: -goalAmountInFuture,
      isBeginning: false
    }) / 12.0
    return {monthlyContribution, goalAmountInFuture}
  }
}