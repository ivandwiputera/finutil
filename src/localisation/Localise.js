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
  emergencyFundsCalculatorFormOccupationRiskLabel: "How many dependencies do you have?",
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
  investmentReturnCalculatorFormDurationLabel: "How many years do you intend to hold your investments?",
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
  goalSettingCalculatorFormDurationLabel: "How many years do you plan to save?",
  goalSettingCalculatorFormDurationHelperText: "The duration in years for which you intend to save.",
  goalSettingCalculatorFormRateOfReturnLabel: "What is the expected rate of return for your investment? (%)",
  goalSettingCalculatorFormRateOfReturnHelperText: "This is the expected 'annual' rate of return for this investment",
  goalSettingCalculatorFormInflationLabel: "What is the estimated inflation rate?",
  goalSettingCalculatorFormInflationHelperText: "This is estimated inflation rate you expected for the goal. You can leave it at '0' if you don't want to include inflation.",
  goalSettingCalculatorFormSavedAmountLabel: "What is the amount you have already saved towards your goal?",
  goalSettingCalculatorFormErrorGoalAmountEmpty: "Goal amount cannot be empty",
  goalSettingCalculatorFormErrorDurationEmpty: "Duration cannot be empty",
  goalSettingCalculatorFormErrorRateOfReturnEmpty: "Rate of return cannot be empty",
  goalSettingCalculatorFormErrorInflationEmpty: "Inflation cannot be empty. You can put as '0' to exclude inflation from calculation.",
  goalSettingCalculatorFormErrorSavedAmountEmpty: "Saved amount cannot be empty. You can put as '0' if you don't have any.",
  goalSettingCalculatorResultTitle: "You must make a monthly contribution of at least:",
  goalSettingCalculatorResultDescription: "Achieving a big financial goal can be challenging, stay consistent and focus contributing each month and you will achieve it one day. You can extend and give more time if you think the amount is not managable.",
  goalSettingCalculatorResultGoalAmountInFutureLabel: "Goal amount after inflation:",
}
 
export default Localise