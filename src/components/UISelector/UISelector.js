import UIIcon, { UIIconType } from "@components/UIIcon/UIIcon"
import { useEffect, useState } from "react"

import "./UISelector.css"

const UISelector = (props) => {
  const defaultValue = props.defaultValue
  const options = props.options
  const onChange = props.onChange

  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedItem, setSelectedItem] = useState(undefined)

  useEffect(() => {
    setSelectedItem(defaultValue)
  }, [defaultValue]);

  const onClick = () => {
    setIsExpanded(!isExpanded)
  }

  const onItemClick = (item) => {
    setIsExpanded(false)
    setSelectedItem(item)
    onChange(item)
  }

  return (
    <div className="ui-selector">
      <UISelectorView option={selectedItem} onClick={onClick}/>
      {isExpanded &&
        <UISelectorDropdownView
          options={options}
          onItemClick={onItemClick}
        />
      }
    </div>
  );
}

const UISelectorView = (props) => {
  const option = props.option
  const onClick = props.onClick

  return (
    <div className="ui-selector-view" onClick={onClick}>
      {option?.icon && <UIIcon className="ui-icon-medium" icon={option.icon} />}
      {option?.label && <div className="font-size-body">{option.label}</div>}
      <UIIcon className="ui-selector-view-icon ui-icon-tiny" icon={UIIconType.chevronDown} />
    </div>
  )
}

const UISelectorDropdownView = (props) => {
  const options = props.options
  const onItemClick = props.onItemClick

  return (
    <ul className="ui-selector-dropdown-view">
      {options.map((option) => {
        return <li className="ui-selector-dropdown-li" key={option.value}>
          <UISelectorDropDownItem
            option={option}
            onClick={onItemClick} />
        </li>
      })}
    </ul>
  )
}

const UISelectorDropDownItem = (props) => {
  const option = props.option
  const onClick = props.onClick

  return (
    <div className="ui-selector-dropdown-item" onClick={() => { onClick(option) }}>
      {option.icon && <UIIcon className="ui-icon-medium" icon={option.icon} />}
      {option.label && <div className="font-size-body">{option.label}</div>}
    </div>
  );
}

export default UISelector;