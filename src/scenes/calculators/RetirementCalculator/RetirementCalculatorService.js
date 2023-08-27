export class RetirementCalculatorService {
  static calculateRetirementSavings = (input) => {
    if (input?.monthlyExpenses == null) { return null }

    const withdrawalRate = 4
    const withdrawalAmount = input.monthlyExpenses
    const totalRetirementSavings = withdrawalAmount * 12 * (100 / withdrawalRate)
    return {totalRetirementSavings, withdrawalAmount}
  }
}