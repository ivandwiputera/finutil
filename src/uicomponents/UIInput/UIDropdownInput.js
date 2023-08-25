import "uicomponents/UIInput/UIInput.css"
import "uicomponents/UIInput/UIDropdownInput.css"

import { useEffect, useState } from "react"

const UIDropdownInput = (props) => {
  const label = props.label
  const note = props.note
  const error = props.error
  const placeholder = props.placeholder
  const options = props.options
  const defaultValue = props.defaultValue
  const onChange = props.onChange

  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedItem, setSelectedItem] = useState(undefined)

  useEffect(() => {
    setSelectedItem(defaultValue)
  }, [defaultValue]);

  const onClick = () => {
    setIsExpanded(!isExpanded)
  }

  const onFocus = () => {
    setIsExpanded(true)
  }

  const onItemClick = (item) => {
    setIsExpanded(false)
    setSelectedItem(item)
    onChange(item)
  }

  return (
    <div className="ui-input">
      <div className="ui-input-label">{label}</div>
      <div className="ui-dropdown-input-wrapper-div" onClick={onClick}>
        <input
          className="ui-input-field user-interaction-disabled"
          type="text"
          value={selectedItem ? selectedItem.label : ""}
          placeholder={placeholder}
          onFocus={onFocus}
          readOnly={true} />
      </div>
      {isExpanded &&
        <UIDropdownView
          options={options}
          onItemClick={onItemClick}
        />
      }

      {note && <div className="ui-input-note">{note}</div>}
      {error && <div className="ui-input-error">{error}</div>}
    </div>
  );
}

const UIDropdownView = (props) => {
  const options = props.options
  const onItemClick = props.onItemClick

  return (
    <ul className="ui-dropdown-view">
      {options.map((option) => {
        return <li className="ui-dropdown-li" key={option.value}>
          <UIDropdownItemView
            option={option}
            onItemClick={onItemClick} />
        </li>
      })}
    </ul>
  )
}

const UIDropdownItemView = (props) => {
  const option = props.option
  const onItemClick = props.onItemClick

  return (
    <div className="ui-dropdown-item-view" onClick={() => {onItemClick(option)}}>
      {option.label}
    </div>
  )
}

export default UIDropdownInput;