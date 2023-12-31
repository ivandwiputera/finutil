import { UIUtils } from "@utils/UIUtils";
import { useEffect, useState } from "react";

import "./NetSalaryCalculator.css";
import NetSalaryCalculatorForm from "./Form/NetSalaryCalculatorForm";
import NetSalaryCalculatorIntroduction from "./Introduction/NetSalaryCalculatorIntroduction";
import { NetSalaryCalculatorService } from "./NetSalaryCalculatorService";
import NetSalaryCalculatorResult from "./Result/NetSalaryCalculatorResult";

const NetSalaryCalculator = () => {
  const [result, setResult] = useState(undefined)

  const onInputChange = (input) => {
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

  useEffect(() => {
    UIUtils.scrollToTop()
  }, []);

  return (
    <div className="house-affordability-calculator-container">
      <NetSalaryCalculatorIntroduction />
      <NetSalaryCalculatorForm onChange={(e) => { onInputChange(e) }} />
      {result && <NetSalaryCalculatorResult result={result} />}
    </div>
  )
}

export default NetSalaryCalculator