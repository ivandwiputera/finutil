import "uicomponents/UIInput/UIInput.css"
import { useState } from "react"
import { isNumber } from "utils/DataTypeUtils"

const UINumberInput = (props) => {
  const label = props.label
  const note = props.note
  const error = props.error
  const placeholder = props.placeholder
  const defaultValue = props.defaultValue
  const onChange = props.onChange

  const [inputValue, setInputValue] = useState(defaultValue)

  const onInputChange = (value) => {
    const number = Number(value)

    // Set as null if not a number
    if (!isValidNumber(number)) {
      setInputValue(null)
      onChange(null)
      return
    }

    setInputValue(number)
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
        value={inputValue != null ? inputValue : ""}
        placeholder={placeholder}
        onChange={(e) => {onInputChange(e.target.value)}} />
      {note && <div className="ui-input-note">{note}</div>}
      {error && <div className="ui-input-error">{error}</div>}
    </div>
  );
}

export default UINumberInput;