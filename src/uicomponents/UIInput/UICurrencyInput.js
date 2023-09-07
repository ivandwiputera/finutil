import "uicomponents/UIInput/UIInput.css"
import { Formatter } from "utils/Formatter"
import { useEffect, useState } from "react"
import { isValidNumber } from "utils/DataTypeUtils"

const UICurrencyInput = (props) => {
  const id = props.id
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

    // Set input value
    const cleanNumber = Math.min(UICurrencyInputConfiguration.maxCurrencyValue, defaultValue)
    setInputValue(cleanNumber)
  }, [defaultValue]);

  const onInputChange = (value) => {
    const number = Formatter.getCurrencyValue(value)

    // Set as null if currency symbol left or empty
    if (value === UICurrencyInputConfiguration.currencySymbol || value === "") {
      setInputValue(null)
      return
    }

    // Don't allow input if not a number
    if (!isValidNumber(number)) {
      setInputValue(inputValue)
      return
    }

    // Allow set input value by default
    const cleanNumber = Math.min(UICurrencyInputConfiguration.maxCurrencyValue, number)
    setInputValue(cleanNumber)
  }

  const onBlur = () => {
    const number = Formatter.getCurrencyValue(inputValue)

    // Trigger on change null if number is invalid
    if (!isValidNumber(number)) {
      onChange(null)
      return
    }

    // Trigger on change with valid number
    const cleanNumber = Math.min(UICurrencyInputConfiguration.maxCurrencyValue, number)
    onChange(cleanNumber)
  }

  return (
    <div className="ui-input">
      <div className="ui-input-label">{label}</div>
      <input
        id={id ? id : ""}
        className="ui-input-field"
        type="text"
        inputMode="numeric"
        value={inputValue != null ? Formatter.getCurrencyText(inputValue) : ""}
        placeholder={placeholder}
        onChange={(e) => {onInputChange(e.target.value)}}
        onBlur={onBlur} />
      {note && <div className="ui-input-note">{note}</div>}
      {error && <div className="ui-input-error">{error}</div>}
    </div>
  );
}

const UICurrencyInputConfiguration = {
  currencySymbol: "$",
  maxCurrencyValue: 999999999999999
}

export default UICurrencyInput;