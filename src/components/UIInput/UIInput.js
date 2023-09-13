import UICurrencyInput from "@components/UIInput/UICurrencyInput"
import UITextInput from "@components/UIInput/UITextInput"
import UIDropdownInput from "@components/UIInput/UIDropdownInput"

const UIInput = (props) => {
  const type = props.type
  const label = props.label
  const note = props.note
  const error = props.error
  const placeholder = props.placeholder
  const defaultValue = props.defaultValue
  const onChange = props.onChange

  switch (type) {
    case UIInputType.currency:
      return (
        <UICurrencyInput
          defaultValue={defaultValue}
          placeholder={placeholder}
          label={label}
          note={note}
          error={error}
          onChange={onChange} />
      )
    case UIInputType.dropdown:
      return (
        <UIDropdownInput
          defaultValue={defaultValue}
          placeholder={placeholder}
          label={label}
          note={note}
          error={error}
          onChange={onChange} />
      )
    default:
      return (
        <UITextInput
          defaultValue={defaultValue}
          placeholder={placeholder}
          label={label}
          note={note}
          error={error} />
      )
  }
}

export default UIInput;

export const UIInputType = {
  text: 'text',
  currency: 'currency',
  number: 'number',
  dropdown: 'dropdown'
}