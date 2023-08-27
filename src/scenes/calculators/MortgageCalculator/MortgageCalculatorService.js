import { TVMCalculator } from "utils/TVMCalculator"

export class MortgageCalculatorService {
  static calculateMortgage = (input) => {
    if (input?.housePrice == null) { return null }
    if (input?.downPayment == null) { return null }
    if (input?.mortgageTenor == null) { return null }
    if (input?.mortgageInterestRate == null) { return null }

    const housePrice = input.housePrice
    const downPayment = input.downPayment
    const mortgageTenor = input.mortgageTenor
    const mortgageInterestRate = input.mortgageInterestRate

     // Case: House price is invalid
     if (housePrice <= 0) {
      const monthlyMortgagePayment = 0
      const totalMortgageAmount = 0
      const totalAmount = 0
      return {monthlyMortgagePayment, totalMortgageAmount, totalAmount}
    }

    // Case: Down payment is invalid
    if (downPayment >= 100) {
      const monthlyMortgagePayment = 0
      const totalMortgageAmount = 0
      const totalAmount = housePrice
      return {monthlyMortgagePayment, totalMortgageAmount, totalAmount}
    }

    // Case: Mortgage Tenor is invalid
    if (mortgageTenor <= 0) {
      const monthlyMortgagePayment = 0
      const totalMortgageAmount = 0
      const totalAmount = housePrice
      return {monthlyMortgagePayment, totalMortgageAmount, totalAmount}
    }

    // Case: Default
    const downPaymentValue = Math.min(housePrice, (downPayment/100.0) * housePrice)
    const totalMortgageAmount = Math.max(housePrice - downPaymentValue, 0.0)
    const monthlyMortgagePayment = -1 * TVMCalculator.pmt({
      i: mortgageInterestRate/100.0,
      nper: mortgageTenor,
      pv: totalMortgageAmount,
      fv: 0,
      isBeginning: false})/12.0
    const totalAmount = monthlyMortgagePayment*12.0*mortgageTenor + downPaymentValue
    return {monthlyMortgagePayment, totalMortgageAmount, totalAmount}

  }
}