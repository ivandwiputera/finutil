import "./UIInput.css"

const UIInput = (props) => {
  const label = props.label
  const note = props.note
  const error = props.error

  return ( 
    <div className="ui-input">
      <div className="font-size-body font-weight-medium ml-25">{label}</div>
      <input className="ui-input-field" type="text"/>
      {note && <div className="font-size-tiny color-text-light ml-25">{note}</div>}
      {error && <div className="ui-input-error font-size-tiny color-error ml-25">{error}</div>}
    </div>
  );
}
 
export default UIInput;