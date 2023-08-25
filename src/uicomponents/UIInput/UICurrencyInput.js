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

  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    const number = CurrencyFormatter.getValue(defaultValue)

    // Set as empty if not a number
    if (!isValidNumber(number)) {
      setDisplayText("")
      return
    }

    // Format currency then display
    const cleanNumber = Math.min(UICurrencyInputConfiguration.maxCurrencyValue, number)
    const text = CurrencyFormatter.getDisplayText(cleanNumber)
    setDisplayText(text)
  }, [defaultValue]);

  const onInputChange = (value) => {
    const number = CurrencyFormatter.getValue(value)
    setDisplayTextWithValue(number)
    triggerOnChangeCallback(number)
  }

  const setDisplayTextWithValue = (number) => {
    // Set as empty if not a number
    if (!isValidNumber(number)) {
      setDisplayText("")
      return
    }

    // Format currency then display
    const cleanNumber = Math.min(UICurrencyInputConfiguration.maxCurrencyValue, number)
    const text = CurrencyFormatter.getDisplayText(cleanNumber)
    setDisplayText(text)
  }

  const triggerOnChangeCallback = (number) => {
    // Set as empty if not a number
    if (!isValidNumber(number)) {
      onChange(null)
      return
    }

    // Trigger on change callback
    const cleanNumber = Math.min(UICurrencyInputConfiguration.maxCurrencyValue, number)
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
        value={displayText}
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