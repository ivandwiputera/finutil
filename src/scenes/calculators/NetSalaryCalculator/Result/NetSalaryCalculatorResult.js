import "./NetSalaryCalculatorResult.css"
import { Formatter } from "utils/Formatter";
import Localise, { LocaliseKey } from "localisation/Localise";

const NetSalaryCalculatorResult = (props) => {
  const result = props.result

  const netSalary = Formatter.getCurrencyText(result?.netSalary)
  const bpjsJaminanHariTua = Formatter.getCurrencyText(result?.bpjsJaminanHariTua)
  const bpjsJaminanPensiun = Formatter.getCurrencyText(result?.bpjsJaminanPensiun)
  const bpjsKesehatan = Formatter.getCurrencyText(result?.bpjsKesehatan)
  const totalTaxes = Formatter.getCurrencyText(result?.totalTaxes)
  const annualNetSalary = Formatter.getCurrencyText(result?.annualNetSalary)

  return (
    <div className="net-salary-calculator-result-container">
      <div className="font-size-body font-weight-medium">{Localise(LocaliseKey.netSalaryCalculatorResultTitle)}</div>
      <h1 className="mt-25 color-text-colored">{netSalary}</h1>
      <p className="mt-100">{Localise(LocaliseKey.netSalaryCalculatorResultDescription)}</p>
      <div className="mt-150 font-size-small">{Localise(LocaliseKey.netSalaryCalculatorResultBpjsJHTLabel)}</div>
      <div className="color-text font-weight-semibold">{bpjsJaminanHariTua}</div>
      <div className="mt-150 font-size-small">{Localise(LocaliseKey.netSalaryCalculatorResultBpjsJPLabel)}</div>
      <div className="color-text font-weight-semibold">{bpjsJaminanPensiun}</div>
      <div className="mt-150 font-size-small">{Localise(LocaliseKey.netSalaryCalculatorResultBpjsKesehatanLabel)}</div>
      <div className="color-text font-weight-semibold">{bpjsKesehatan}</div>
      <div className="mt-150 font-size-small">{Localise(LocaliseKey.netSalaryCalculatorResultTotalTaxLabel)}</div>
      <div className="color-text font-weight-semibold">{totalTaxes}</div>
      <div className="mt-150 font-size-small">{Localise(LocaliseKey.netSalaryCalculatorResultTotalNetSalaryLabel)}</div>
      <div className="color-text font-weight-semibold">{annualNetSalary}</div>
    </div>
  );
}

export default NetSalaryCalculatorResult;