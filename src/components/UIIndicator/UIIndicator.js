import "./UIIndicator.css"

const UIIndicator = (props) => {
  const className = props.className

  return ( <div className={`ui-indicator ${className}`} />);
}
 
export default UIIndicator;