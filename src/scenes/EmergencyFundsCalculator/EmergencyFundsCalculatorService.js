import { OccupationRiskType } from "./EmergencyFundsConstants"

export class EmergencyFundsCalculatorService {
  static calculateEmergencyFunds = (input) => {
    if (input.monthlyExpenses == null) { return null }
    if (input.occupationRisk == null) { return null }

    const numMonthsToCover = this.getNumMonthsToCover(input.occupationRisk)
    const totalEmergencyFunds = numMonthsToCover * input.monthlyExpenses
    return {totalEmergencyFunds, numMonthsToCover}
  }

  static getNumMonthsToCover = (occupationRisk) => {
    switch (occupationRisk) {
      case OccupationRiskType.low:
        return 6.0
      case OccupationRiskType.medium:
        return 9.0
      case OccupationRiskType.high:
        return 12.0
      default:
        return 0.0
    }
  }
}