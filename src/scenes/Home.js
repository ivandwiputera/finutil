import UIImageTextColumn from "uicomponents/UIImageTextColumn";
import UIIconTextCard from "uicomponents/UIIconTextCard";
import image from "assets/images/img-profile.jpg"

const Home = () => {
  return (  
    <div className="home-container">
      <div className="home-introduction-container">
        <HomeIntroduction />
      </div>
      <div className="home-tools-container">
        <HomeTools />
      </div>
    </div>
  );
}

const HomeIntroduction = () => {
  return (  
    <UIImageTextColumn 
        title = "Hi, I'm Ivan"
        subtitle = "Personal Finance Enthusiasts"
        description = "A person who loves and cares about personal finance & budgeting. Feel free to send me message to talk about personal finance."
        imageSrc = {image}
        imageClassModifiers = "img-masking-blobs"
        buttonTitle = "Contact me"
        buttonIcon = "envelope"
        buttonOnClick = {() => {
          console.log("Button clicked")
        }}
      />
  );
}

const HomeTools = () => {
  return (  
    <div>
        <UIImageTextColumn 
          title = "Tools"
          description = "Feel free to use these tools to help with your budgeting and planning your financial goals."
          textAlignment = "center"
        />
        <div className="home-tools-container__grid">
            <UIIconTextCard 
              className = "home-tools-container__grid-item"
              icon = "chartPie"
              text = "Budgeting 50-30-20 Calculator"
              onClick = {() => {
                console.log("Button clicked")
              }}
            />

            <UIIconTextCard 
              className = "home-tools-container__grid-item"
              icon = "exclamationTriangle"
              text = "Emergency Funds Calculator"
              onClick = {() => {
                console.log("Button clicked")
              }}
            />

            <UIIconTextCard 
              className = "home-tools-container__grid-item"
              icon = "rocketLaunch"
              text = "Investment Return Calculator"
              onClick = {() => {
                console.log("Button clicked")
              }}
            />

            <UIIconTextCard 
              className = "home-tools-container__grid-item"
              icon = "currencyDollar"
              text = "Financial Freedom Calculator"
              onClick = {() => {
                console.log("Button clicked")
              }}
            />

            <UIIconTextCard 
              className = "home-tools-container__grid-item"
              icon = "faceSmile"
              text = "Retirement 4% Calculator"
              onClick = {() => {
                console.log("Button clicked")
              }}
            />

            <UIIconTextCard 
              className = "home-tools-container__grid-item"
              icon = "flag"
              text = "Goal Setting Calculator"
              onClick = {() => {
                console.log("Button clicked")
              }}
            />

            <UIIconTextCard 
              className = "home-tools-container__grid-item"
              icon = "bank"
              text = "Mortgage Calculator"
              onClick = {() => {
                console.log("Button clicked")
              }}
            />

            <UIIconTextCard 
              className = "home-tools-container__grid-item"
              icon = "home"
              text = "House Affordability Calculator"
              onClick = {() => {
                console.log("Button clicked")
              }}
            />

            <UIIconTextCard 
              className = "home-tools-container__grid-item"
              icon = "shieldCheck"
              text = "Life Insurance Coverage Calculator"
              onClick = {() => {
                console.log("Button clicked")
              }}
            />

            <UIIconTextCard 
              className = "home-tools-container__grid-item"
              icon = "banknotes"
              text = "Net Salary Calculator"
              onClick = {() => {
                console.log("Button clicked")
              }}
            />
          
        </div>
    </div>
  );
}
 
export default Home;