import { useLocalise, Copy } from "@localisations/Localise";
import { Formatter } from "@utils/Formatter";

import "./NetSalaryCalculatorResult.css";

const NetSalaryCalculatorResult = (props) => {
  const { localise } = useLocalise()
  
  const result = props.result

  const netSalary = Formatter.getCurrencyText(result?.netSalary)
  const bpjsJaminanHariTua = Formatter.getCurrencyText(result?.bpjsJaminanHariTua)
  const bpjsJaminanPensiun = Formatter.getCurrencyText(result?.bpjsJaminanPensiun)
  const bpjsKesehatan = Formatter.getCurrencyText(result?.bpjsKesehatan)
  const totalTaxes = Formatter.getCurrencyText(result?.totalTaxes)
  const annualNetSalary = Formatter.getCurrencyText(result?.annualNetSalary)

  return (
    <div className="net-salary-calculator-result-container">
      <div className="font-size-body font-weight-medium color-text">{localise(Copy.netSalaryCalculatorResultTitle)}</div>
      <h1 className="mt-25 color-text-colored">{netSalary}</h1>
      <p className="mt-100">{localise(Copy.netSalaryCalculatorResultDescription)}</p>
      <div className="mt-150 font-size-small color-text">{localise(Copy.netSalaryCalculatorResultBpjsJHTLabel)}</div>
      <div className="color-text font-weight-semibold">{bpjsJaminanHariTua}</div>
      <div className="mt-150 font-size-small color-text">{localise(Copy.netSalaryCalculatorResultBpjsJPLabel)}</div>
      <div className="color-text font-weight-semibold">{bpjsJaminanPensiun}</div>
      <div className="mt-150 font-size-small color-text">{localise(Copy.netSalaryCalculatorResultBpjsKesehatanLabel)}</div>
      <div className="color-text font-weight-semibold">{bpjsKesehatan}</div>
      <div className="mt-150 font-size-small color-text">{localise(Copy.netSalaryCalculatorResultTotalTaxLabel)}</div>
      <div className="color-text font-weight-semibold">{totalTaxes}</div>
      <div className="mt-150 font-size-small color-text">{localise(Copy.netSalaryCalculatorResultTotalNetSalaryLabel)}</div>
      <div className="color-text font-weight-semibold">{annualNetSalary}</div>
    </div>
  );
}

export default NetSalaryCalculatorResult;