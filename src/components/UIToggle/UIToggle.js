import UIIcon from "@components/UIIcon/UIIcon"
import { useEffect, useState } from "react"

import "./UIToggle.css"

const UIToggle = (props) => {
  const defaultValue = props.defaultValue
  const options = props.options
  const onChange = props.onChange

  const [selectedItem, setSelectedItem] = useState(undefined)

  useEffect(() => {
    setSelectedItem(defaultValue || options[0])
  }, [defaultValue]);

  const onClick = (item) => {
    const nextItem = getNextItem()
    if (nextItem != null) {
      setSelectedItem(nextItem)
      onChange(nextItem)
    }
  }

  const getNextItem = () => {
    if (selectedItem == null || options.length <= 0) { return null }

    const currIndex = options.indexOf(selectedItem)
    if (currIndex + 1 < options.length) {
      return options[currIndex + 1]
    } else {
      return options[0]
    }
  }

  return (
    <div className="ui-toggle" onClick={onClick}>
      {selectedItem?.icon && <UIIcon className="ui-icon-medium" icon={selectedItem.icon} />}
      {selectedItem?.label && <div className="font-size-body">{selectedItem.label}</div>}
    </div>
  );
}

export default UIToggle;