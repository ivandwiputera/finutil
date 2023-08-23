import UIButton from "uicomponents/UIButton/UIButton";
import "./UIImageTextColumn.css"

const UIImageTextColumn = (props) => {
  const title = props.title
  const subtitle = props.subtitle
  const description = props.description
  const imageSrc = props.imageSrc
  const imageClassModifiers = props.imageClassModifiers
  const buttonTitle = props.buttonTitle
  const buttonIcon = props.buttonIcon
  const buttonOnClick = props.buttonOnClick
  const containerStyle = {
    textAlign: props.textAlignment
  }
  
  const imageClassNames = `ui-image-text-column__image ${imageClassModifiers}`

  return (
    <div className="ui-image-text-column" style={containerStyle}>
      { imageSrc && <img className={imageClassNames} src={imageSrc} alt=""/> }
      <div className="ui-image-text-column__text-container">
        { title && <h1 className="ui-image-text-column__title">{title}</h1> }
        { subtitle && <h3 className="ui-image-text-column__subtitle">{subtitle}</h3> }
        { description && <p className="ui-image-text-column__description">{description}</p> }
        { buttonTitle && <div className="ui-image-text-column__button">
          <UIButton
            title={buttonTitle} 
            icon={buttonIcon}
            onClick={buttonOnClick}/>
        </div> }
      </div>
    </div>
  );
}

export default UIImageTextColumn;
