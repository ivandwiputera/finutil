import "@components/UIInput/UIInput.css"
import { useState } from "react"

const UITextInput = (props) => {
  const label = props.label
  const note = props.note
  const error = props.error
  const placeholder = props.placeholder
  const defaultValue = props.defaultValue
  const onChange = props.onChange

  const [displayText, setDisplayText] = useState(defaultValue)

  const onInputChange = (e) => {
    const value = e.target.value
    setDisplayText(value)
    onChange(value)
  }

  return (
    <div className="ui-input">
      <div className="ui-input-label">{label}</div>
      <input
        className="ui-input-field"
        type="text"
        value={displayText}
        placeholder={placeholder}
        onChange={(e) => {onInputChange(e)}} />
      {note && <div className="ui-input-note">{note}</div>}
      {error && <div className="ui-input-error">{error}</div>}
    </div>
  );
}

export default UITextInput;