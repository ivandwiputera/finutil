import "@components/UIInput/UIInput.css"
import { useState, useEffect } from "react"
import { isNumber } from "@utils/DataTypeUtils"

const UINumberInput = (props) => {
  const id = props.id
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
    const cleanNumber = Math.min(UINumberInputConfiguration.maxValue, number)
    setInputValue(cleanNumber)
  }, [defaultValue]);

  const onInputChange = (value) => {
    const trimmedValue = value.replace(/ /g,'')
    const cleanValue = trimmedValue.replace(/^0+/, '0');

    // Set as null if value is empty
    if (cleanValue === "") {
      setInputValue(null)
      return
    }

    // Don't allow input if not a number
    const number = Number(cleanValue)
    if (!isValidNumber(number)) {
      setInputValue(inputValue)
      return
    }

    // Set input value as max value if greater than max value
    if (number > UINumberInputConfiguration.maxValue) {
      setInputValue(UINumberInputConfiguration.maxValue)
      return
    }

    // Allow set input value by default
    setInputValue(cleanValue)
  }

  const onBlur = () => {
    // Trigger on change null if empty
    if (inputValue == null || inputValue === "" ) {
      onChange(null)
      return
    }

    // Trigger on change null if number is invalid
    const number = Number(inputValue)
    if (!isValidNumber(number)) {
      onChange(null)
      return
    }

    // Trigger on change with valid number
    const cleanNumber = Math.min(UINumberInputConfiguration.maxValue, number)
    onChange(cleanNumber)
  }
  
  const isValidNumber = (number) => {
    return number != null && isNumber(number) && !isNaN(number)
  }

  return (
    <div className="ui-input">
      <div className="ui-input-label">{label}</div>
      <input
        id={id ? id : ""}
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

const UINumberInputConfiguration = {
  maxValue: 999999999999999
}

export default UINumberInput;