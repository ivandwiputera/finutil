export class Budget503020CalculatorService {
  static calculateBudget = (input) => {
    if (input?.monthlyIncome == null) { return null }

    const monthlyIncome = input.monthlyIncome
    const needs = 0.5 * monthlyIncome
    const wants = 0.3 * monthlyIncome
    const savings = 0.2 * monthlyIncome
    return {needs, wants, savings}
  }
}