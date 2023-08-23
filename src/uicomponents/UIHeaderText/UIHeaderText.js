import "./UIHeaderText.css"

const UIHeaderText = (props) => {
  const className = props.className
  const title = props.title
  const subtitle = props.subtitle
  const description = props.description

  return (
    <div className={`ui-header-text ${className}`}>
      {title && <h1 className="ui-header-text__title">{title}</h1>}
      {subtitle && <h3 className="ui-header-text__subtitle mt-50">{subtitle}</h3>}
      {description && <p className="ui-header-text__description mt-50">{description}</p>}
    </div>
  );
}

export default UIHeaderText;