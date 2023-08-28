import "./NetSalaryCalculator.css"
import { useEffect, useState } from "react";
import { UIUtils } from "utils/UIUtils";
import NetSalaryCalculatorIntroduction from "./Introduction/NetSalaryCalculatorIntroduction";
import NetSalaryCalculatorForm from "./Form/NetSalaryCalculatorForm";
import { NetSalaryCalculatorService, PTKPType } from "./NetSalaryCalculatorService";
import NetSalaryCalculatorResult from "./Result/NetSalaryCalculatorResult";

const NetSalaryCalculator = () => {
  const [result, setResult] = useState(undefined)

  const calculateResult = (input) => {
    // If input is invalid, set result as null to hide.
    if (!input.isValid) { 
      setResult(null)
      return
    }

    // If result is invalid, set result as null to hide.
    const params = {
      monthlyBasicSalary: input.monthlyBasicSalary,
      monthlyAllowances: input.monthlyAllowances,
      ptkpType: input.maritalStatus.value
    }
    const result = NetSalaryCalculatorService.calculateNetSalary(params)
    
    if (result == null) {
      setResult(null)
      return
    }

    // Set result
    setResult(result)
  }

  const onInputChange = (input) => {
    calculateResult(input)
  }

  useEffect(() => {
    UIUtils.scrollToTop()
  }, []);

  return (
    <div className="house-affordability-calculator-container">
      <NetSalaryCalculatorIntroduction />
      <NetSalaryCalculatorForm onChange={(e) => { onInputChange(e) }} />
      {result && <NetSalaryCalculatorResult result={result}/> }
    </div>
  )
}

export default NetSalaryCalculator