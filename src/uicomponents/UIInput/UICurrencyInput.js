import "uicomponents/UIInput/UIInput.css"
import { CurrencyFormatter } from "utils/CurrencyFormatter"
import { useEffect, useState } from "react"
import { isNumber } from "utils/DataTypeUtils"

const UICurrencyInput = (props) => {
  const label = props.label
  const note = props.note
  const error = props.error
  const placeholder = props.placeholder
  const defaultValue = props.defaultValue
  const onChange = props.onChange

  const [inputValue, setInputValue] = useState(undefined)

  useEffect(() => {
    // Set as null if not a number
    if (!isValidNumber(defaultValue)) {
      setInputValue(null)
      return
    }

    const cleanNumber = Math.min(UICurrencyInputConfiguration.maxCurrencyValue, defaultValue)
    setInputValue(cleanNumber)
  }, [defaultValue]);

  const onInputChange = (value) => {
    const number = CurrencyFormatter.getValue(value)

    // Set as null if not a number
    if (!isValidNumber(number)) {
      setInputValue(null)
      onChange(null)
      return
    }

    const cleanNumber = Math.min(UICurrencyInputConfiguration.maxCurrencyValue, number)
    setInputValue(cleanNumber)
    onChange(cleanNumber)
  }
  
  const isValidNumber = (number) => {
    return number != null && isNumber(number) && !isNaN(number)
  }

  return (
    <div className="ui-input">
      <div className="ui-input-label">{label}</div>
      <input
        className="ui-input-field"
        type="text"
        value={inputValue ? CurrencyFormatter.getDisplayText(inputValue) : ""}
        placeholder={placeholder}
        onChange={(e) => {onInputChange(e.target.value)}} />
      {note && <div className="ui-input-note">{note}</div>}
      {error && <div className="ui-input-error">{error}</div>}
    </div>
  );
}

const UICurrencyInputConfiguration = {
  maxCurrencyValue: 999999999999999
}

export default UICurrencyInput;