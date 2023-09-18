import { LocalStorageType } from "common/LocalStorageType"
import { useTranslation } from "react-i18next"

export const useLocalise = () => {
  const { t } = useTranslation()

  const localise = (key) => {
    return t(key) ? t(key) : key
  }
  return { localise }
}

export const useLanguage = () => {
  const { i18n } = useTranslation()

  const language = i18n.language
  const setLanguage = (value) => {
    setCachedLanguage(value)
    return i18n.changeLanguage(value)
  }

  return { language, setLanguage }
}

export const getCachedLanguage = () => {
  return localStorage.getItem(LocalStorageType.language)
}

export const setCachedLanguage = (value) => {
  return localStorage.setItem(LocalStorageType.language, value)
}

export const Copy = {
  formatterYear: "formatterYear",
  formatterYears: "formatterYears",
  formatterMonth: "formatterMonth",
  formatterMonths: "formatterMonths",

  languageSwitcherEnglish: "languageSwitcherEnglish",
  languageSwitcherBahasa: "languageSwitcherBahasa",

  homeIntroductionTitle: "homeIntroductionTitle",
  homeIntroductionSubtitle: "homeIntroductionSubtitle",
  homeIntroductionDescription: "homeIntroductionDescription",
  homeIntroductionButtonTitle: "homeIntroductionButtonTitle",

  homeToolsTitle: "homeToolsTitle",
  homeToolsDescription: "homeToolsDescription",
  homeToolsBudgeting503020Calculator: "homeToolsBudgeting503020Calculator",
  homeToolsEmergencyFundsCalculator: "homeToolsEmergencyFundsCalculator",
  homeToolsInvestmentReturnCalculator: "homeToolsInvestmentReturnCalculator",
  homeToolsRetirementCalculator: "homeToolsRetirementCalculator",
  homeToolsGoalContributionCalculator: "homeToolsGoalContributionCalculator",
  homeToolsGoalDurationCalculator: "homeToolsGoalDurationCalculator",
  homeToolsMortgageCalculator: "homeToolsMortgageCalculator",
  homeToolsHouseAffordabilityCalculator: "homeToolsHouseAffordabilityCalculator",
  homeToolsLifeInsuranceCoverageCalculator: "homeToolsLifeInsuranceCoverageCalculator",
  homeToolsNetSalaryCalculator: "homeToolsNetSalaryCalculator",

  homeContactTitle: "homeContactTitle",
  homeContactDescription: "homeContactDescription",
  homeContactEmailLabel: "homeContactEmailLabel",
  homeContactEmailValue: "homeContactEmailValue",
  homeContactInstagramLabel: "homeContactInstagramLabel",
  homeContactInstagramValue: "homeContactInstagramValue",

  budget503020CalculatorTitle: "budget503020CalculatorTitle",
  budget503020CalculatorDescription: "budget503020CalculatorDescription",
  budget503020CalculatorFormMonthlyIncomeLabel: "budget503020CalculatorFormMonthlyIncomeLabel",
  budget503020CalculatorFormMonthlyIncomeHelperText: "budget503020CalculatorFormMonthlyIncomeHelperText",
  budget503020CalculatorFormErrorMonthlyIncomeEmpty: "budget503020CalculatorFormErrorMonthlyIncomeEmpty",
  budget503020CalculatorResultNeedsLabel: "budget503020CalculatorResultNeedsLabel",
  budget503020CalculatorResultNeedsDescription: "budget503020CalculatorResultNeedsDescription",
  budget503020CalculatorResultWantsLabel: "budget503020CalculatorResultWantsLabel",
  budget503020CalculatorResultWantsDescription: "budget503020CalculatorResultWantsDescription",
  budget503020CalculatorResultSavingsLabel: "budget503020CalculatorResultSavingsLabel",
  budget503020CalculatorResultSavingsDescription: "budget503020CalculatorResultSavingsDescription",
  budget503020CalculatorResultNote: "budget503020CalculatorResultNote",

  emergencyFundsCalculatorTitle: "emergencyFundsCalculatorTitle",
  emergencyFundsCalculatorDescription: "emergencyFundsCalculatorDescription",
  emergencyFundsCalculatorFormMonthlyExpensesLabel: "emergencyFundsCalculatorFormMonthlyExpensesLabel",
  emergencyFundsCalculatorFormMonthlyExpensesHelperText: "emergencyFundsCalculatorFormMonthlyExpensesHelperText",
  emergencyFundsCalculatorFormOccupationRiskLabel: "emergencyFundsCalculatorFormOccupationRiskLabel",
  emergencyFundsCalculatorFormOccupationRiskHelperText: "emergencyFundsCalculatorFormOccupationRiskHelperText",
  emergencyFundsCalculatorFormOccupationRiskOptionLow: "emergencyFundsCalculatorFormOccupationRiskOptionLow",
  emergencyFundsCalculatorFormOccupationRiskOptionMedium: "emergencyFundsCalculatorFormOccupationRiskOptionMedium",
  emergencyFundsCalculatorFormOccupationRiskOptionHigh: "emergencyFundsCalculatorFormOccupationRiskOptionHigh",
  emergencyFundsCalculatorFormErrorMonthlyExpensesEmpty: "emergencyFundsCalculatorFormErrorMonthlyExpensesEmpty",
  emergencyFundsCalculatorFormErrorOccupationRiskEmpty: "emergencyFundsCalculatorFormErrorOccupationRiskEmpty",
  emergencyFundsCalculatorResultTitle: "emergencyFundsCalculatorResultTitle",
  emergencyFundsCalculatorResultDescription: "emergencyFundsCalculatorResultDescription",
  emergencyFundsCalculatorResultNumMonthsToCoverLabel: "emergencyFundsCalculatorResultNumMonthsToCoverLabel",
  emergencyFundsCalculatorResultNumMonthsToCoverUnit: "emergencyFundsCalculatorResultNumMonthsToCoverUnit",
  emergencyFundsCalculatorResultNote: "emergencyFundsCalculatorResultNote",

  investmentReturnCalculatorTitle: "investmentReturnCalculatorTitle",
  investmentReturnCalculatorDescription: "investmentReturnCalculatorDescription",
  investmentReturnCalculatorFormInitialAmountLabel: "investmentReturnCalculatorFormInitialAmountLabel",
  investmentReturnCalculatorFormInitialAmountHelperText: "investmentReturnCalculatorFormInitialAmountHelperText",
  investmentReturnCalculatorFormDurationLabel: "investmentReturnCalculatorFormDurationLabel",
  investmentReturnCalculatorFormDurationHelperText: "investmentReturnCalculatorFormDurationHelperText",
  investmentReturnCalculatorFormRateOfReturnLabel: "investmentReturnCalculatorFormRateOfReturnLabel",
  investmentReturnCalculatorFormRateOfReturnHelperText: "investmentReturnCalculatorFormRateOfReturnHelperText",
  investmentReturnCalculatorFormContributionLabel: "investmentReturnCalculatorFormContributionLabel",
  investmentReturnCalculatorFormErrorInitialAmountEmpty: "investmentReturnCalculatorFormErrorInitialAmountEmpty",
  investmentReturnCalculatorFormErrorDurationEmpty: "investmentReturnCalculatorFormErrorDurationEmpty",
  investmentReturnCalculatorFormErrorRateOfReturnEmpty: "investmentReturnCalculatorFormErrorRateOfReturnEmpty",
  investmentReturnCalculatorFormErrorContributionEmpty: "investmentReturnCalculatorFormErrorContributionEmpty",
  investmentReturnCalculatorResultTitle: "investmentReturnCalculatorResultTitle",
  investmentReturnCalculatorResultDescription: "investmentReturnCalculatorResultDescription",
  investmentReturnCalculatorResultTotalPrincipalLabel: "investmentReturnCalculatorResultTotalPrincipalLabel",
  investmentReturnCalculatorResultTotalInterestGainLabel: "investmentReturnCalculatorResultTotalInterestGainLabel",

  retirementCalculatorTitle: "retirementCalculatorTitle",
  retirementCalculatorDescription: "retirementCalculatorDescription",
  retirementCalculatorFormMonthlyExpensesLabel: "retirementCalculatorFormMonthlyExpensesLabel", retirementCalculatorFormMonthlyExpensesHelperText: "retirementCalculatorFormMonthlyExpensesHelperText",
  retirementCalculatorFormErrorMonthlyExpensesEmpty: "retirementCalculatorFormErrorMonthlyExpensesEmpty",
  retirementCalculatorResultTitle: "retirementCalculatorResultTitle",
  retirementCalculatorResultDescription: "retirementCalculatorResultDescription",
  retirementCalculatorResultWithdrawalAmountLabel: "retirementCalculatorResultWithdrawalAmountLabel",

  goalContributionCalculatorTitle: "goalContributionCalculatorTitle",
  goalContributionCalculatorDescription: "goalContributionCalculatorDescription",
  goalContributionCalculatorFormGoalAmountLabel: "goalContributionCalculatorFormGoalAmountLabel",
  goalContributionCalculatorFormDurationLabel: "goalContributionCalculatorFormDurationLabel",
  goalContributionCalculatorFormRateOfReturnLabel: "goalContributionCalculatorFormRateOfReturnLabel",
  goalContributionCalculatorFormRateOfReturnHelperText: "goalContributionCalculatorFormRateOfReturnHelperText",
  goalContributionCalculatorFormInflationLabel: "goalContributionCalculatorFormInflationLabel",
  goalContributionCalculatorFormInflationHelperText: "goalContributionCalculatorFormInflationHelperText",
  goalContributionCalculatorFormSavedAmountLabel: "goalContributionCalculatorFormSavedAmountLabel",
  goalContributionCalculatorFormErrorGoalAmountEmpty: "goalContributionCalculatorFormErrorGoalAmountEmpty",
  goalContributionCalculatorFormErrorDurationEmpty: "goalContributionCalculatorFormErrorDurationEmpty",
  goalContributionCalculatorFormErrorRateOfReturnEmpty: "goalContributionCalculatorFormErrorRateOfReturnEmpty",
  goalContributionCalculatorFormErrorInflationEmpty: "goalContributionCalculatorFormErrorInflationEmpty",
  goalContributionCalculatorFormErrorSavedAmountEmpty: "goalContributionCalculatorFormErrorSavedAmountEmpty",
  goalContributionCalculatorResultTitle: "goalContributionCalculatorResultTitle",
  goalContributionCalculatorResultDescription: "goalContributionCalculatorResultDescription",
  goalContributionCalculatorResultGoalAmountInFutureLabel: "goalContributionCalculatorResultGoalAmountInFutureLabel",

  goalDurationCalculatorTitle: "goalDurationCalculatorTitle",
  goalDurationCalculatorDescription: "goalDurationCalculatorDescription",
  goalDurationCalculatorFormGoalAmountLabel: "goalDurationCalculatorFormGoalAmountLabel",
  goalDurationCalculatorFormContributionLabel: "goalDurationCalculatorFormContributionLabel",
  goalDurationCalculatorFormRateOfReturnLabel: "goalDurationCalculatorFormRateOfReturnLabel",
  goalDurationCalculatorFormRateOfReturnHelperText: "goalDurationCalculatorFormRateOfReturnHelperText",
  goalDurationCalculatorFormSavedAmountLabel: "goalDurationCalculatorFormSavedAmountLabel",
  goalDurationCalculatorFormErrorGoalAmountEmpty: "goalDurationCalculatorFormErrorGoalAmountEmpty",
  goalDurationCalculatorFormErrorContributionEmpty: "goalDurationCalculatorFormErrorContributionEmpty",
  goalDurationCalculatorFormErrorRateOfReturnEmpty: "goalDurationCalculatorFormErrorRateOfReturnEmpty",
  goalDurationCalculatorFormErrorSavedAmountEmpty: "goalDurationCalculatorFormErrorSavedAmountEmpty",
  goalDurationCalculatorResultTitle: "goalDurationCalculatorResultTitle",
  goalDurationCalculatorResultDescription: "goalDurationCalculatorResultDescription",

  mortgageCalculatorTitle: "mortgageCalculatorTitle",
  mortgageCalculatorDescription: "mortgageCalculatorDescription",
  mortgageCalculatorFormHousePriceLabel: "mortgageCalculatorFormHousePriceLabel",
  mortgageCalculatorFormDownPaymentLabel: "mortgageCalculatorFormDownPaymentLabel",
  mortgageCalculatorFormDownPaymentHelperText: "mortgageCalculatorFormDownPaymentHelperText",
  mortgageCalculatorFormMortgageTenorLabel: "mortgageCalculatorFormMortgageTenorLabel",
  mortgageCalculatorFormMortgageTenorHelperText: "mortgageCalculatorFormMortgageTenorHelperText",
  mortgageCalculatorFormMortgageInterestLabel: "mortgageCalculatorFormMortgageInterestLabel",
  mortgageCalculatorFormMortgageInterestHelperText: "mortgageCalculatorFormMortgageInterestHelperText",
  mortgageCalculatorFormErrorHousePriceEmpty: "mortgageCalculatorFormErrorHousePriceEmpty",
  mortgageCalculatorFormErrorDownPaymentEmpty: "mortgageCalculatorFormErrorDownPaymentEmpty",
  mortgageCalculatorFormErrorMortgageTenorEmpty: "mortgageCalculatorFormErrorMortgageTenorEmpty",
  mortgageCalculatorFormErrorMortgageInterestEmpty: "mortgageCalculatorFormErrorMortgageInterestEmpty",
  mortgageCalculatorResultTitle: "mortgageCalculatorResultTitle",
  mortgageCalculatorResultDescription: "mortgageCalculatorResultDescription",
  mortgageCalculatorResultTotalMortgageAmountLabel: "mortgageCalculatorResultTotalMortgageAmountLabel",
  mortgageCalculatorResultTotalAmountLabel: "mortgageCalculatorResultTotalAmountLabel",

  houseAffordabilityCalculatorTitle: "houseAffordabilityCalculatorTitle",
  houseAffordabilityCalculatorDescription: "houseAffordabilityCalculatorDescription",
  houseAffordabilityCalculatorFormMonthlyIncomeLabel: "houseAffordabilityCalculatorFormMonthlyIncomeLabel",
  houseAffordabilityCalculatorFormMonthlyIncomeHelperText: "houseAffordabilityCalculatorFormMonthlyIncomeHelperText",
  houseAffordabilityCalculatorFormMortgageTenorLabel: "houseAffordabilityCalculatorFormMortgageTenorLabel",
  houseAffordabilityCalculatorFormMortgageTenorHelperText: "houseAffordabilityCalculatorFormMortgageTenorHelperText",
  houseAffordabilityCalculatorFormMortgageInterestLabel: "houseAffordabilityCalculatorFormMortgageInterestLabel",
  houseAffordabilityCalculatorFormMortgageInterestHelperText: "houseAffordabilityCalculatorFormMortgageInterestHelperText",
  houseAffordabilityCalculatorFormSavedAmountLabel: "houseAffordabilityCalculatorFormSavedAmountLabel",
  houseAffordabilityCalculatorFormErrorMonthlyIncomeEmpty: "houseAffordabilityCalculatorFormErrorMonthlyIncomeEmpty",
  houseAffordabilityCalculatorFormErrorMortgageTenorEmpty: "houseAffordabilityCalculatorFormErrorMortgageTenorEmpty",
  houseAffordabilityCalculatorFormErrorMortgageInterestEmpty: "houseAffordabilityCalculatorFormErrorMortgageInterestEmpty",
  houseAffordabilityCalculatorFormErrorSavedAmountEmpty: "houseAffordabilityCalculatorFormErrorSavedAmountEmpty",
  houseAffordabilityResultTitle: "houseAffordabilityResultTitle",
  houseAffordabilityResultDescription: "houseAffordabilityResultDescription",
  houseAffordabilityResultTotalMortgageAmountLabel: "houseAffordabilityResultTotalMortgageAmountLabel",
  houseAffordabilityResultMortgageMonthlyPaymentLabel: "houseAffordabilityResultMortgageMonthlyPaymentLabel",

  netSalaryCalculatorTitle: "netSalaryCalculatorTitle",
  netSalaryCalculatorDescription: "netSalaryCalculatorDescription",
  netSalaryCalculatorFormMonthlyBasicSalaryLabel: "netSalaryCalculatorFormMonthlyBasicSalaryLabel",
  netSalaryCalculatorFormMonthlyBasicSalaryHelperText: "netSalaryCalculatorFormMonthlyBasicSalaryHelperText",
  netSalaryCalculatorFormMonthlyAllowanceLabel: "netSalaryCalculatorFormMonthlyAllowanceLabel",
  netSalaryCalculatorFormMonthlyAllowanceHelperText: "netSalaryCalculatorFormMonthlyAllowanceHelperText",
  netSalaryCalculatorFormMaritalStatusLabel: "netSalaryCalculatorFormMaritalStatusLabel",
  netSalaryCalculatorFormMaritalStatusHelperText: "netSalaryCalculatorFormMaritalStatusHelperText",
  netSalaryCalculatorFormErrorMonthlyBasicSalaryEmpty: "netSalaryCalculatorFormErrorMonthlyBasicSalaryEmpty",
  netSalaryCalculatorFormErrorMonthlyAllowanceEmpty: "netSalaryCalculatorFormErrorMonthlyAllowanceEmpty",
  netSalaryCalculatorFormErrorMaritalStatusEmpty: "netSalaryCalculatorFormErrorMaritalStatusEmpty",
  netSalaryCalculatorResultTitle: "netSalaryCalculatorResultTitle",
  netSalaryCalculatorResultDescription: "netSalaryCalculatorResultDescription",
  netSalaryCalculatorResultBpjsJHTLabel: "netSalaryCalculatorResultBpjsJHTLabel",
  netSalaryCalculatorResultBpjsJPLabel: "netSalaryCalculatorResultBpjsJPLabel",
  netSalaryCalculatorResultBpjsKesehatanLabel: "netSalaryCalculatorResultBpjsKesehatanLabel",
  netSalaryCalculatorResultTaxableIncomeLabel: "netSalaryCalculatorResultTaxableIncomeLabel",
  netSalaryCalculatorResultTotalTaxLabel: "netSalaryCalculatorResultTotalTaxLabel",
  netSalaryCalculatorResultTotalNetSalaryLabel: "netSalaryCalculatorResultTotalNetSalaryLabel",
  netSalaryCalculatorPtkpTk0Label: "netSalaryCalculatorPtkpTk0Label",
  netSalaryCalculatorPtkpTk1Label: "netSalaryCalculatorPtkpTk1Label",
  netSalaryCalculatorPtkpTk2Label: "netSalaryCalculatorPtkpTk2Label",
  netSalaryCalculatorPtkpTk3Label: "netSalaryCalculatorPtkpTk3Label",
  netSalaryCalculatorPtkpK0Label: "netSalaryCalculatorPtkpK0Label",
  netSalaryCalculatorPtkpK1Label: "netSalaryCalculatorPtkpK1Label",
  netSalaryCalculatorPtkpK2Label: "netSalaryCalculatorPtkpK2Label",
  netSalaryCalculatorPtkpK3Label: "netSalaryCalculatorPtkpK3Label",
  netSalaryCalculatorPtkpKi0Label: "netSalaryCalculatorPtkpKi0Label",
  netSalaryCalculatorPtkpKi1Label: "netSalaryCalculatorPtkpKi1Label",
  netSalaryCalculatorPtkpKi2Label: "netSalaryCalculatorPtkpKi2Label",
  netSalaryCalculatorPtkpKi3Label: "netSalaryCalculatorPtkpKi3Label",
}