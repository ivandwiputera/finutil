export const PTKPType = {
  TK0: { value: "TK0", amount: 54000000 },
  TK1: { value: "TK1", amount: 58500000 },
  TK2: { value: "TK2", amount: 63000000 },
  TK3: { value: "TK3", amount: 67500000 },
  K0: { value: "K0", amount: 58500000 },
  K1: { value: "K1", amount: 63000000 },
  K2: { value: "K2", amount: 67500000 },
  K3: { value: "K3", amount: 72000000 },
  KI0: { value: "KI0", amount: 112500000 },
  KI1: { value: "KI1", amount: 117000000 },
  KI2: { value: "KI2", amount: 121500000 },
  KI3: { value: "KI3", amount: 126000000 },
}

const TaxBracket = [
  { value: 60000000, tax: 0.05 },
  { value: 190000000, tax: 0.15 },
  { value: 250000000, tax: 0.25 },
  { value: 4500000000, tax: 0.30 },
  { value: 999999999999, tax: 0.35 }
]

const Configurations = {
  bpjsKesehatan: 0.01,
  bpjsJaminanPensiun: 0.01,
  bpjsJaminanHariTua: 0.02,
  biayaJabatan: 0.05,
  maxBpjsKesehatanValue: 1440000,
  maxBpjsJaminanPensiunValue: 1147152,
  maxBiayaJabatanValue: 6000000
}

export class NetSalaryCalculatorService {
  static calculateTaxes = (taxableIncome) => {
    if (taxableIncome <= 0) {
      return 0.0
    }

    let remainingIncome = taxableIncome
    let totalTaxes = 0
    TaxBracket.forEach(bracket => {
      if (remainingIncome <= bracket.value) {
        let taxInBracket = remainingIncome * bracket.tax
        totalTaxes += taxInBracket
        remainingIncome = 0
      } else {
        let taxInBracket = bracket.value * bracket.tax
        totalTaxes += taxInBracket
        remainingIncome -= bracket.value
      }
    });
    return totalTaxes
  }

  static calculateNetSalary = (input) => {
    if (input?.monthlyBasicSalary == null) { return null }
    if (input?.monthlyAllowances == null) { return null }
    if (input?.ptkpType == null) { return null }

    const monthlyBasicIncome = input.monthlyBasicSalary
    const monthlyAllowances = input.monthlyAllowances
    const ptkpType = this.getPtkpTypeFromValue(input.ptkpType)

    const annualBasicIncome = 12 * monthlyBasicIncome
    const annualAllowance = 12 * monthlyAllowances

    const bpjsJaminanHariTua = Configurations.bpjsJaminanHariTua * annualBasicIncome
    const bpjsJaminanPensiun = Math.min(Configurations.bpjsJaminanPensiun * annualBasicIncome, Configurations.maxBpjsJaminanPensiunValue)
    const bpjsKesehatan = Math.min(Configurations.bpjsKesehatan * annualBasicIncome, Configurations.maxBpjsKesehatanValue)
    const biayaJabatan = Math.min(Configurations.biayaJabatan * annualBasicIncome, Configurations.maxBiayaJabatanValue)
    const ptkp = ptkpType.amount

    const taxableIncome = Math.max(annualBasicIncome + annualAllowance - bpjsJaminanHariTua - bpjsJaminanPensiun - biayaJabatan - ptkp, 0)
    const totalTaxes = this.calculateTaxes(taxableIncome)
    const totalDeductions = bpjsJaminanHariTua + bpjsJaminanPensiun + bpjsKesehatan + biayaJabatan + totalTaxes

    const annualNetSalary = annualBasicIncome + annualAllowance - totalDeductions
    const netSalary = annualNetSalary / 12.0

    return { netSalary, annualNetSalary, bpjsJaminanHariTua, bpjsJaminanPensiun, bpjsKesehatan, totalTaxes, totalDeductions }
  }

  static getPtkpTypeFromValue = (value) => {
    switch (value) {
      case PTKPType.TK0.value:
        return PTKPType.TK0
      case PTKPType.TK1.value:
        return PTKPType.TK1
      case PTKPType.TK2.value:
        return PTKPType.TK2
      case PTKPType.TK3.value:
        return PTKPType.TK3
      case PTKPType.K0.value:
        return PTKPType.K0
      case PTKPType.K1.value:
        return PTKPType.K1
      case PTKPType.K2.value:
        return PTKPType.K2
      case PTKPType.K3.value:
        return PTKPType.K3
      case PTKPType.KI0.value:
        return PTKPType.KI0
      case PTKPType.KI1.value:
        return PTKPType.KI1
      case PTKPType.KI2.value:
        return PTKPType.KI2
      case PTKPType.KI3.value:
        return PTKPType.KI3
      default:
        return PTKPType.TK0
    }
  }
}