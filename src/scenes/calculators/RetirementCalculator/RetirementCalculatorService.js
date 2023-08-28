export class RetirementCalculatorService {
  static calculateRetirementSavings = (input) => {
    if (input?.monthlyExpenses == null) { return null }

    const withdrawalAmount = input.monthlyExpenses
    const totalRetirementSavings = withdrawalAmount * 12 * (100 / RetirementCalculatorServiceConstants.withdrawalRate)
    return { totalRetirementSavings, withdrawalAmount }
  }
}

const RetirementCalculatorServiceConstants = {
  withdrawalRate: 4
}

