import { TVMCalculator } from "utils/TVMCalculator"

export class InvestmentReturnCalculatorService {
  static calculateInvestmentReturn = (input) => {
    if (input?.initialAmount == null) { return null }
    if (input?.duration == null) { return null }
    if (input?.rateOfReturn == null) { return null }
    if (input?.contribution == null) { return null }

    const params = {
      pv: input.initialAmount,
      nper: input.duration,
      i: input.rateOfReturn / 100.0,
      pmt: input.contribution * 12,
      isBeginning: false
    }
    const totalInvestmentAmount = TVMCalculator.fv(params) * -1
    const totalPrincipalAmount = input.initialAmount + input.duration * input.contribution
    const totalInterestGain = totalInvestmentAmount - totalPrincipalAmount
    return { totalInvestmentAmount, totalPrincipalAmount, totalInterestGain }
  }
}