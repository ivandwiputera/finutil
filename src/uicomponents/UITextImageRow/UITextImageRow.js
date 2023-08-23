import UIButton from "uicomponents/UIButton/UIButton";
import "./UITextImageRow.css"

const UITextImageRow = (props) => {
  const title = props.title
  const subtitle = props.subtitle
  const description = props.description
  const imageSrc = props.imageSrc
  const buttonTitle = props.buttonTitle
  const buttonOnClick = props.buttonOnClick

  return (
    <div className="ui-text-image-row">
      <div className="ui-text-image-row__text-container">
        { title && <h1 className="ui-text-image-row__title">{title}</h1> }
        { subtitle && <h3 className="ui-text-image-row__subtitle">{subtitle}</h3> }
        { description && <p className="ui-text-image-row__description">{description}</p> }
        { buttonTitle && <div className="ui-text-image-row__button">
          <UIButton
            title={buttonTitle} 
            onClick={buttonOnClick}/>
        </div> }
      </div>
      { imageSrc && <img className="ui-text-image-row__image" src={imageSrc}/> }
    </div>
  );
}

export default UITextImageRow;
