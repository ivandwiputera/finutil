import { TVMCalculator } from "utils/TVMCalculator"

export class GoalDurationCalculatorService {
  static calculateGoal = (input) => {
    if (input?.goalAmount == null) { return null }
    if (input?.contribution == null) { return null }
    if (input?.rateOfReturn == null) { return null }
    if (input?.savedAmount == null) { return null }

    const goalAmount = input.goalAmount
    const contribution = input.contribution
    const rateOfReturn = input.rateOfReturn
    const savedAmount = input.savedAmount

    // Case: Goal amount is invalid
    if (goalAmount <= 0) {
      const numOfYears = 0
      return {numOfYears}
    }

    // Case: No payment & no saved amount
    if (savedAmount <= 0 && contribution <= 0) {
      const numOfYears = 999999999
      return {numOfYears}
    }

    // Case: No payment & no rate
    if (rateOfReturn <= 0 && contribution <= 0) {
      const numOfYears = 0
      return {numOfYears}
    }

    // Case: Default
    const numOfYears = TVMCalculator.nper({
      i: rateOfReturn / 100.0,
      pv: savedAmount,
      fv: -goalAmount,
      pmt: contribution * 12,
      isBeginning: false
    })
    return {numOfYears}
  }
}