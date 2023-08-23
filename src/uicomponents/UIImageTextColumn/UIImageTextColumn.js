import "./UIImageTextColumn.css"
import UIButton from "uicomponents/UIButton/UIButton";
import UIHeaderText from "uicomponents/UIHeaderText/UIHeaderText";

const UIImageTextColumn = (props) => {
  const className = props.className
  const title = props.title
  const subtitle = props.subtitle
  const description = props.description
  const imageSrc = props.imageSrc
  const imageClassModifiers = props.imageClassModifiers
  const buttonTitle = props.buttonTitle
  const buttonIcon = props.buttonIcon
  const buttonOnClick = props.buttonOnClick

  return (
    <div className={`ui-image-text-column ${className}`}>
      {imageSrc && <img className={`ui-image-text-column__image m-100 ${imageClassModifiers}`} src={imageSrc} alt="" />}
      <div className="ui-image-text-column__text-container">

        <UIHeaderText
          title={title}
          subtitle={subtitle}
          description={description}
        />

        {buttonTitle &&
          <UIButton
            className="mt-150"
            title={buttonTitle}
            icon={buttonIcon}
            onClick={buttonOnClick}
          />
        }
      </div>
    </div>
  );
}

export default UIImageTextColumn;
