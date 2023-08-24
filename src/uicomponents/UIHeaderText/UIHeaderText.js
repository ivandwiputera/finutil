import "./UIHeaderText.css"

const UIHeaderText = (props) => {
  const className = props.className
  const title = props.title
  const subtitle = props.subtitle
  const description = props.description

  return (
    <div className={`ui-header-text ${className}`}>
      {title && <h1>{title}</h1>}
      {subtitle && <h3>{subtitle}</h3>}
      {description && <p>{description}</p>}
    </div>
  );
}

export default UIHeaderText;