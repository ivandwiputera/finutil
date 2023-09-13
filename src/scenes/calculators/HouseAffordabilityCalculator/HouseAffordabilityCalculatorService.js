import { TVMCalculator } from "@utils/TVMCalculator"

export class HouseAffordabilityCalculatorService {
  static calculateHouseAffordability = (input) => {
    if (input?.monthlyIncome == null) { return null }
    if (input?.mortgageTenor == null) { return null }
    if (input?.mortgageInterestRate == null) { return null }
    if (input?.savedAmount == null) { return null }

    const monthlyIncome = input.monthlyIncome
    const mortgageTenor = input.mortgageTenor
    const mortgageInterestRate = input.mortgageInterestRate
    const savedAmount = input.savedAmount

    // Case: Mortgage Tenor or Monthly Income is invalid
    if (mortgageTenor <= 0 || monthlyIncome <= 0) {
      const housePrice = savedAmount
      const totalMortgageAmount = 0
      const monthlyPayment = 0
      return {housePrice, totalMortgageAmount, monthlyPayment}
    }

    // Case: Default
    const monthlyPayment = monthlyIncome * HouseAffordabilityCalculatorServiceConstants.safeDebtPercentage
    const totalMortgageAmount = -1 * TVMCalculator.pv({
      i: mortgageInterestRate/100.0,
      nper: mortgageTenor,
      pmt: monthlyPayment * 12,
      fv: 0,
      isBeginning: false
    })
    const housePrice = savedAmount + totalMortgageAmount
    return {housePrice, totalMortgageAmount, monthlyPayment}
  }
}

const HouseAffordabilityCalculatorServiceConstants = {
  safeDebtPercentage: 0.3
}