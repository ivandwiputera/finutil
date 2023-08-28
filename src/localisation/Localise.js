const Localise = (key) => {
  return LocaliseTranslation[key] ? LocaliseTranslation[key] : key
}

export const LocaliseKey = {
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
  homeToolsGoalSettingCalculator: "homeToolsGoalSettingCalculator",
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
  emergencyFundsCalculatorFormErrorMonthlyExpensesNegative: "emergencyFundsCalculatorFormErrorMonthlyExpensesNegative",
  emergencyFundsCalculatorFormErrorOccupationRiskEmpty: "emergencyFundsCalculatorFormErrorOccupationRiskEmpty",
  emergencyFundsCalculatorResultTitle: "emergencyFundsCalculatorResultTitle",
  emergencyFundsCalculatorResultDescription: "emergencyFundsCalculatorResultDescription",
  emergencyFundsCalculatorResultNumMonthsToCoverLabel: "emergencyFundsCalculatorResultNumMonthsToCoverLabel",
  emergencyFundsCalculatorResultNumMonthsToCoverUnit: "emergencyFundsCalculatorResultNumMonthsToCoverUnit",

  investmentReturnCalculatorTitle: "investmentReturnCalculatorTitle",
  investmentReturnCalculatorDescription: "investmentReturnCalculatorDescription",
  investmentReturnCalculatorFormInitialAmountLabel: "investmentReturnCalculatorFormInitialAmountLabel",
  investmentReturnCalculatorFormInitialAmountHelperText: "investmentReturnCalculatorFormInitialAmountHelperText",
  investmentReturnCalculatorFormDurationLabel: "investmentReturnCalculatorFormDurationLabel",
  investmentReturnCalculatorFormDurationHelperText: "investmentReturnCalculatorFormDurationHelperText",
  investmentReturnCalculatorFormRateOfReturnLabel: "investmentReturnCalculatorFormRateOfReturnLabel",
  investmentReturnCalculatorFormRateOfReturnHelperText: "investmentReturnCalculatorFormRateOfReturnHelperText",
  investmentReturnCalculatorFormContributionLabel: "investmentReturnCalculatorFormContributionLabel",
  investmentReturnCalculatorFormContributionHelperText: "investmentReturnCalculatorFormContributionHelperText",
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
  retirementCalculatorFormMonthlyExpensesLabel: "retirementCalculatorFormMonthlyExpensesLabel",retirementCalculatorFormMonthlyExpensesHelperText: "retirementCalculatorFormMonthlyExpensesHelperText",
  retirementCalculatorFormErrorMonthlyExpensesEmpty: "retirementCalculatorFormErrorMonthlyExpensesEmpty",
  retirementCalculatorResultTitle: "retirementCalculatorResultTitle",
  retirementCalculatorResultDescription: "retirementCalculatorResultDescription",
  retirementCalculatorResultWithdrawalAmountLabel: "retirementCalculatorResultWithdrawalAmountLabel",

  goalSettingCalculatorTitle: "goalSettingCalculatorTitle",
  goalSettingCalculatorDescription: "goalSettingCalculatorDescription",
  goalSettingCalculatorFormGoalAmountLabel: "goalSettingCalculatorFormGoalAmountLabel",
  goalSettingCalculatorFormGoalAmountHelperText: "goalSettingCalculatorFormGoalAmountHelperText",
  goalSettingCalculatorFormDurationLabel: "goalSettingCalculatorFormDurationLabel",
  goalSettingCalculatorFormDurationHelperText: "goalSettingCalculatorFormDurationHelperText",
  goalSettingCalculatorFormRateOfReturnLabel: "goalSettingCalculatorFormRateOfReturnLabel",
  goalSettingCalculatorFormRateOfReturnHelperText: "goalSettingCalculatorFormRateOfReturnHelperText",
  goalSettingCalculatorFormInflationLabel: "goalSettingCalculatorFormInflationLabel",
  goalSettingCalculatorFormInflationHelperText: "goalSettingCalculatorFormInflationHelperText",
  goalSettingCalculatorFormSavedAmountLabel: "goalSettingCalculatorFormSavedAmountLabel",
  goalSettingCalculatorFormErrorGoalAmountEmpty: "goalSettingCalculatorFormErrorGoalAmountEmpty",
  goalSettingCalculatorFormErrorDurationEmpty: "goalSettingCalculatorFormErrorDurationEmpty",
  goalSettingCalculatorFormErrorRateOfReturnEmpty: "goalSettingCalculatorFormErrorRateOfReturnEmpty",
  goalSettingCalculatorFormErrorInflationEmpty: "goalSettingCalculatorFormErrorInflationEmpty",
  goalSettingCalculatorFormErrorSavedAmountEmpty: "goalSettingCalculatorFormErrorSavedAmountEmpty",
  goalSettingCalculatorResultTitle: "goalSettingCalculatorResultTitle",
  goalSettingCalculatorResultDescription: "goalSettingCalculatorResultDescription",
  goalSettingCalculatorResultGoalAmountInFutureLabel: "goalSettingCalculatorResultGoalAmountInFutureLabel",

  mortgageCalculatorTitle: "mortgageCalculatorTitle",
  mortgageCalculatorDescription: "mortgageCalculatorDescription",
  mortgageCalculatorFormHousePriceLabel: "mortgageCalculatorFormHousePriceLabel",
  mortgageCalculatorFormHousePriceHelperText: "mortgageCalculatorFormHousePriceHelperText",
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
  netSalaryCalculatorPtkpTk0Label: "Single - 0 dependencies (TK0)",
  netSalaryCalculatorPtkpTk1Label: "Single - 1 dependency (TK1)",
  netSalaryCalculatorPtkpTk2Label: "Single - 2 dependencies (TK2)",
  netSalaryCalculatorPtkpTk3Label: "Single - 3 dependencies (TK3)",
  netSalaryCalculatorPtkpK0Label: "Married - 0 dependencies (K0)",
  netSalaryCalculatorPtkpK1Label: "Married - 1 dependency (K1)",
  netSalaryCalculatorPtkpK2Label: "Married - 2 dependencies (K2)",
  netSalaryCalculatorPtkpK3Label: "Married - 3 dependencies (K3)",
  netSalaryCalculatorPtkpKi0Label: "Married combined - 0 dependencies (KI0)",
  netSalaryCalculatorPtkpKi1Label: "Married combined - 1 dependency (KI1)",
  netSalaryCalculatorPtkpKi2Label: "Married combined - 2 dependencies (KI2)",
  netSalaryCalculatorPtkpKi3Label: "Married combined - 3 dependencies (KI3)",
}

const LocaliseTranslation = {

  homeIntroductionTitle: "Hi, I'm Ivan",
  homeIntroductionSubtitle: "Personal Finance Enthusiasts",
  homeIntroductionDescription: "Someone who loves and cares about personal finance & budgeting. Send me a message to talk about personal finance.",
  homeIntroductionButtonTitle: "Contact me",

  homeToolsTitle: "Tools",
  homeToolsDescription: "Use these tools to help with your budgeting and managing your finance.",
  homeToolsBudgeting503020Calculator: "Budgeting 50-30-20 Calculator",
  homeToolsEmergencyFundsCalculator: "Emergency Funds Calculator",
  homeToolsInvestmentReturnCalculator: "Investment Return Calculator",
  homeToolsRetirementCalculator: "Retirement 4% Calculator",
  homeToolsGoalSettingCalculator: "Goal Setting Calculator",
  homeToolsMortgageCalculator: "Mortgage Calculator",
  homeToolsHouseAffordabilityCalculator: "House Affordability Calculator",
  homeToolsLifeInsuranceCoverageCalculator: "Life Insurance Coverage Calculator",
  homeToolsNetSalaryCalculator: "Net Salary Calculator",

  homeContactTitle: "Contact Me",
  homeContactDescription: "Feel free to contact me to talk about personal finance and budgeting.",
  homeContactEmailLabel: "Email",
  homeContactEmailValue: "ivan.dwiputera@gmail.com",
  homeContactInstagramLabel: "Instagram",
  homeContactInstagramValue: "@ivandwiputera",

  budget503020CalculatorTitle: "Budget 50-30-20 Calculator",
  budget503020CalculatorDescription: "50-30-20 budgeting rule is a simple and intuitive way to manage your finance. The rule suggests that you divide your after-tax income into three categories of spending: 50% on needs, 30% on wants, and 20% on savings.",
  budget503020CalculatorFormMonthlyIncomeLabel: "How much is your average monthly income? ($)",
  budget503020CalculatorFormMonthlyIncomeHelperText: "This includes both your active income and also income from side-hustles.",
  budget503020CalculatorFormErrorMonthlyIncomeEmpty: "Monthly income cannot be empty",
  budget503020CalculatorResultNeedsLabel: "Needs (50%):",
  budget503020CalculatorResultNeedsDescription: "This category includes expenses that are essential for survival, such as rent or mortgage payments, groceries, utilities, insurance, and minimum debt payments. The rule suggests that you should spend up to 50% of your after-tax income on these needs and obligations.",
  budget503020CalculatorResultWantsLabel: "Wants (30%):",
  budget503020CalculatorResultWantsDescription: "This category includes expenses that are not essential but add value to your life, such as dining out, entertainment, travel, and shopping. The rule suggests that you should spend up to 30% of your after-tax income on these discretionary expenses.",
  budget503020CalculatorResultSavingsLabel: "Savings (20%):",
  budget503020CalculatorResultSavingsDescription: "This category includes money that you save for emergencies, retirement, or other long-term goals. The rule suggests that you should allocate at least 20% of your after-tax income to savings and investments.",

  emergencyFundsCalculatorTitle: "Emergency Funds Calculator",
  emergencyFundsCalculatorDescription: "Emergency funds are the funds that we set aside to use in times of financial distress, such as job loss or sudden illness of a family member. These funds act as a safety net to help us cover unexpected expenses.",
  emergencyFundsCalculatorFormMonthlyExpensesLabel: "How much do you usually spend in a month? ($)",
  emergencyFundsCalculatorFormMonthlyExpensesHelperText: "This includes all your living costs, necessities, mortgage payments, and other debt repayments.",
  emergencyFundsCalculatorFormOccupationRiskLabel: "How many dependencies do you have? (~)",
  emergencyFundsCalculatorFormOccupationRiskHelperText: "Dependencies can be having kids, parents to support, unemployed wife, mortgage to repay, etc.",
  emergencyFundsCalculatorFormOccupationRiskOptionLow: "No dependencies",
  emergencyFundsCalculatorFormOccupationRiskOptionMedium: "1 dependency",
  emergencyFundsCalculatorFormOccupationRiskOptionHigh: "2+ dependencies",
  emergencyFundsCalculatorFormErrorMonthlyExpensesEmpty: "Monthly expenses cannot be empty",
  emergencyFundsCalculatorFormErrorMonthlyExpensesNegative: "Monthly expenses must be greater or equal to zero",
  emergencyFundsCalculatorFormErrorOccupationRiskEmpty: "Occupation risk cannot be empty",
  emergencyFundsCalculatorResultTitle: "You need to save at least:",
  emergencyFundsCalculatorResultDescription: "Above amount is the total amount you need to put away for emergency. Remember to only use the money when you are in emergency situation such as loss of income and emergency financial situations.",
  emergencyFundsCalculatorResultNumMonthsToCoverLabel: "Number of covered monthly expenses:",
  emergencyFundsCalculatorResultNumMonthsToCoverUnit: "months",

  investmentReturnCalculatorTitle: "Investment Return Calculator",
  investmentReturnCalculatorDescription: "Investment return is the potential returns on your investments over a certain period of time.",
  investmentReturnCalculatorFormInitialAmountLabel: "How much money are you planning to invest? ($)",
  investmentReturnCalculatorFormInitialAmountHelperText: "This is the amount of money you plan to invest initially. If you don't have any money to invest, you can enter '0'.",
  investmentReturnCalculatorFormDurationLabel: "How many years do you intend to hold your investments? (#)",
  investmentReturnCalculatorFormDurationHelperText: "This is the duration for which you will retain your investments. Experiment with larger number to witness the magic of 'compound interest' in investment.",
  investmentReturnCalculatorFormRateOfReturnLabel: "What is the expected rate of return for your investment? (%)",
  investmentReturnCalculatorFormRateOfReturnHelperText: "This is the expected 'annual' rate of return for this investment",
  investmentReturnCalculatorFormContributionLabel: "What is the amount you are willing to invest every month? ($)",
  investmentReturnCalculatorFormContributionHelperText: "This is the amount you will commit to put into your investment every month.",
  investmentReturnCalculatorFormErrorInitialAmountEmpty: "Initial investment amount cannot be empty.",
  investmentReturnCalculatorFormErrorDurationEmpty: "Number of years cannot be empty.",
  investmentReturnCalculatorFormErrorRateOfReturnEmpty: "Rate of return cannot be empty.",
  investmentReturnCalculatorFormErrorContributionEmpty: "Contribution cannot be empty",
  investmentReturnCalculatorResultTitle: "You will end up with this amount",
  investmentReturnCalculatorResultDescription: "Compound interest is a powerful tool that can help investors grow their wealth over time. Unlike simple interest, which is calculated only on the principal amount, compound interest is calculated on both the initial principal and the accumulated interest from previous periods. This means that the interest earned in one period is added to the principal amount, and the interest for the next period is calculated on the new total. This process continues for each period, resulting in exponential growth of your investment.",
  investmentReturnCalculatorResultTotalPrincipalLabel: "Total money you invest during investment period:",
  investmentReturnCalculatorResultTotalInterestGainLabel: "Total money you get from interests:",

  retirementCalculatorTitle: "Retirement 4% Calculator",
  retirementCalculatorDescription: "The 4% rule is a guideline used by some financial planners and retirees to estimate a comfortable but safe income for retirement. It suggests that retirees are safe to withdraw 4% from retirement savings each year.",
  retirementCalculatorFormMonthlyExpensesLabel: "How much do you usually spend in a month? ($)",
  retirementCalculatorFormMonthlyExpensesHelperText: "This will be the amount you withdraw from retirement savings during your retirement",
  retirementCalculatorFormErrorMonthlyExpensesEmpty: "Monthly expenses must be greater or equal to zero",
  retirementCalculatorResultTitle: "You will need:",
  retirementCalculatorResultDescription: "The sum of money mentioned above is an estimated amount that you will require for your retirement. You can withdraw 4% of this amount every month, which should last you for approximately 25 to 50 years of retirement.",
  retirementCalculatorResultWithdrawalAmountLabel: "Monthly withdrawal amount:",

  goalSettingCalculatorTitle: "Goal Setting Calculator",
  goalSettingCalculatorDescription: "Breaking down big financial goals into smaller steps is a great way to make them more manageable and achievable. Start by identifying your financial goals, such as buying a house, saving for retirement, or paying off debt. Once you have identified your financial goals, break them down into smaller, more manageable steps.\n\nUse this calculator to determine how much you need to contribute monthly to achieve your goal.",
  goalSettingCalculatorFormGoalAmountLabel: "What is your financial goal amount? ($)",
  goalSettingCalculatorFormGoalAmountHelperText: "This is the total amount you want to save.",
  goalSettingCalculatorFormDurationLabel: "How many years do you plan to save? (#)",
  goalSettingCalculatorFormDurationHelperText: "The duration in years for which you intend to save.",
  goalSettingCalculatorFormRateOfReturnLabel: "What is the expected rate of return for your investment? (%)",
  goalSettingCalculatorFormRateOfReturnHelperText: "This is the expected 'annual' rate of return for this investment",
  goalSettingCalculatorFormInflationLabel: "What is the estimated inflation rate? (%)",
  goalSettingCalculatorFormInflationHelperText: "This is estimated inflation rate you expected for the goal. You can leave it at '0' if you don't want to include inflation.",
  goalSettingCalculatorFormSavedAmountLabel: "What is the amount you have already saved towards your goal? ($)",
  goalSettingCalculatorFormErrorGoalAmountEmpty: "Goal amount cannot be empty",
  goalSettingCalculatorFormErrorDurationEmpty: "Duration cannot be empty",
  goalSettingCalculatorFormErrorRateOfReturnEmpty: "Rate of return cannot be empty",
  goalSettingCalculatorFormErrorInflationEmpty: "Inflation cannot be empty.",
  goalSettingCalculatorFormErrorSavedAmountEmpty: "Saved amount cannot be empty.",
  goalSettingCalculatorResultTitle: "You must make a monthly contribution of at least:",
  goalSettingCalculatorResultDescription: "Achieving a big financial goal can be challenging, stay consistent and focus contributing each month and you will achieve it one day. You can extend and give more time if you think the amount is not managable.",
  goalSettingCalculatorResultGoalAmountInFutureLabel: "Goal amount after inflation:",

  mortgageCalculatorTitle: "Mortgage Calculator",
  mortgageCalculatorDescription: "Estimate your monthly mortgage payments by considering the principal amount, interest rate, loan term, and other factors.",
  mortgageCalculatorFormHousePriceLabel: "What is the cost of the home? ($)",
  mortgageCalculatorFormHousePriceHelperText: "This is the price of the house you're going to buy.",
  mortgageCalculatorFormDownPaymentLabel: "What percentage you're going to pay upfront as down payment? (%)",
  mortgageCalculatorFormDownPaymentHelperText: "Generally it is best to do at least 20% of the house price as down payment.",
  mortgageCalculatorFormMortgageTenorLabel: "What is the duration of your mortgage? (#)",
  mortgageCalculatorFormMortgageTenorHelperText: "The usual duration of a mortgage can vary between 5 and 30 years.",
  mortgageCalculatorFormMortgageInterestLabel: "What is the interest rate for the mortgage? (%)",
  mortgageCalculatorFormMortgageInterestHelperText: "This depends on the bank of which you are applying mortgage.",
  mortgageCalculatorFormErrorHousePriceEmpty: "House price cannot be empty",
  mortgageCalculatorFormErrorDownPaymentEmpty: "Down payment cannot be empty",
  mortgageCalculatorFormErrorMortgageTenorEmpty: "Mortgage tenor cannot be empty",
  mortgageCalculatorFormErrorMortgageInterestEmpty: "Mortgage interest cannot be empty",
  mortgageCalculatorResultTitle: "You must make a monthly payment of:",
  mortgageCalculatorResultDescription: "To maintain a healthy cash flow, it is advisable to keep the amount mentioned above below 30% of your monthly income.",
  mortgageCalculatorResultTotalMortgageAmountLabel: "Total mortgage amount:",
  mortgageCalculatorResultTotalAmountLabel: "Total amount of both your house price and mortgage:",

  houseAffordabilityCalculatorTitle: "House Affordability Calculator",
  houseAffordabilityCalculatorDescription: " To determine the house price you can afford, you need to consider your income, debts, and down payment. A good rule of thumb is to spend no more than 30% of your monthly income for total debts, including your mortgage, credit cards, and other loans",
  houseAffordabilityCalculatorFormMonthlyIncomeLabel: "How much is your average monthly income? ($)",
  houseAffordabilityCalculatorFormMonthlyIncomeHelperText: "This includes both your active income and also income from side-hustles.",
  houseAffordabilityCalculatorFormMortgageTenorLabel: "What is the duration of your mortgage? (#)",
  houseAffordabilityCalculatorFormMortgageTenorHelperText: "The usual duration of a mortgage can vary between 5 and 30 years.",
  houseAffordabilityCalculatorFormMortgageInterestLabel: "What is the interest rate for the mortgage? (%)",
  houseAffordabilityCalculatorFormMortgageInterestHelperText: "This depends on the bank of which you are applying mortgage.",
  houseAffordabilityCalculatorFormSavedAmountLabel: "What is the amount you have already saved towards buying the house? ($)",
  houseAffordabilityCalculatorFormErrorMonthlyIncomeEmpty: "Monthly income cannot be empty",
  houseAffordabilityCalculatorFormErrorMortgageTenorEmpty: "Mortgage tenor cannot be empty",
  houseAffordabilityCalculatorFormErrorMortgageInterestEmpty: "Mortgage interest cannot be empty",
  houseAffordabilityCalculatorFormErrorSavedAmountEmpty: "Saved amount cannot be empty",
  houseAffordabilityResultTitle: "The estimated cost of a house that you can afford:",
  houseAffordabilityResultDescription: "The above amount is calculated by calculating the estimated total mortgage payment you can safely afford with 30% of your monthly income. And on top of it, adding the saved amount you already have.",
  houseAffordabilityResultTotalMortgageAmountLabel: "Total mortgage amount:",
  houseAffordabilityResultMortgageMonthlyPaymentLabel: "Mortgage monthly payment:",

  netSalaryCalculatorTitle: "Net Salary Calculator",
  netSalaryCalculatorDescription: "Use this calculator to calculate estimated net salary from your gross salary.",
  netSalaryCalculatorFormMonthlyBasicSalaryLabel: "What is your monthly basic salary? ($)",
  netSalaryCalculatorFormMonthlyBasicSalaryHelperText: "This includes your monthly basic salary only, without any allowances or bonus.",
  netSalaryCalculatorFormMonthlyAllowanceLabel: "What is your monthly allowances or bonus? ($)",
  netSalaryCalculatorFormMonthlyAllowanceHelperText: "This includes all allowances and bonus you get.",
  netSalaryCalculatorFormMaritalStatusLabel: "What is your current marital status? (~)",
  netSalaryCalculatorFormErrorMonthlyBasicSalaryEmpty: "Monthly basic salary cannot be empty.",
  netSalaryCalculatorFormErrorMonthlyAllowanceEmpty: "Monthly allowance cannot be empty.",
  netSalaryCalculatorFormErrorMaritalStatusEmpty: "Marital status cannot be empty.",
  netSalaryCalculatorResultTitle: "You will receive an estimated salary of:",
  netSalaryCalculatorResultDescription: "The amount mentioned is an estimate and has already factored in expenses such as BPJS Kesehatan, BPJS Jaminan Pensiun, BPJS Jaminan Hari Tua, and taxes.",
  netSalaryCalculatorResultBpjsJHTLabel: "BPJS Jaminan Hari Tua (annual):",
  netSalaryCalculatorResultBpjsJPLabel: "BPJS Jaminan Pensiun (annual):",
  netSalaryCalculatorResultBpjsKesehatanLabel: "BPJS Kesehatan (annual):",
  netSalaryCalculatorResultTaxableIncomeLabel: "Taxable Income (annual):",
  netSalaryCalculatorResultTotalTaxLabel: "Total Taxes (annual):",
  netSalaryCalculatorResultTotalNetSalaryLabel: "Net Salary (annual):",
}
 
export default Localise