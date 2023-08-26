import "uicomponents/UIInput/UIInput.css"
import { useState, useEffect } from "react"
import { isNumber } from "utils/DataTypeUtils"

const UINumberInput = (props) => {
  const label = props.label
  const note = props.note
  const error = props.error
  const placeholder = props.placeholder
  const defaultValue = props.defaultValue
  const onChange = props.onChange

  const [inputValue, setInputValue] = useState(undefined)

  useEffect(() => {
    // Set as null if empty or null
    if (defaultValue == null || defaultValue === "") {
      setInputValue(null)
      return
    }
  
    // Set as null if not a number
    const number = Number(defaultValue)
    if (!isValidNumber(number)) {
      setInputValue(null)
      return
    }

    // Set input value
    setInputValue(number)
  }, [defaultValue]);

  const onInputChange = (value) => {
    const trimmedValue = value.replace(/ /g,'')
    const cleanValue = trimmedValue.replaceAll("00", "0")

    // Set as null if value is empty
    if (cleanValue === "") {
      setInputValue(null)
      return
    }

    // Don't allow input if not a number
    const number = Number(value)
    if (!isValidNumber(number)) {
      setInputValue(inputValue)
      return
    }

    // Allow set input value by default
    setInputValue(cleanValue)
  }

  const onBlur = () => {
    const number = Number(inputValue)

    // Trigger on change null if number is invalid
    if (!isValidNumber(number)) {
      onChange(null)
      return
    }

    // Trigger on change with valid number
    onChange(number)
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
        inputMode="decimal"
        value={inputValue != null ? inputValue : ""}
        placeholder={placeholder}
        onChange={(e) => {onInputChange(e.target.value)}}
        onBlur={onBlur} />
      {note && <div className="ui-input-note">{note}</div>}
      {error && <div className="ui-input-error">{error}</div>}
    </div>
  );
}

export default UINumberInput;