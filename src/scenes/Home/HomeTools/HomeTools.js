import "./HomeTools.css"
import UIImageTextColumn from "uicomponents/UIImageTextColumn/UIImageTextColumn";
import UIIconTextCard from "uicomponents/UIIconTextCard/UIIconTextCard";
const HomeTools = () => {
  return (
    <div>
      <UIImageTextColumn
        title="Tools"
        description="Feel free to use these tools to help with your budgeting and planning your financial goals."
        textAlignment="center"
      />
      <div className="home-tools-grid">
        <UIIconTextCard
          className="home-tools-grid-item"
          icon="chartPie"
          text="Budgeting 50-30-20 Calculator"
          onClick={() => {
            console.log("Button clicked")
          }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon="exclamationTriangle"
          text="Emergency Funds Calculator"
          onClick={() => {
            console.log("Button clicked")
          }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon="rocketLaunch"
          text="Investment Return Calculator"
          onClick={() => {
            console.log("Button clicked")
          }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon="currencyDollar"
          text="Financial Freedom Calculator"
          onClick={() => {
            console.log("Button clicked")
          }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon="faceSmile"
          text="Retirement 4% Calculator"
          onClick={() => {
            console.log("Button clicked")
          }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon="flag"
          text="Goal Setting Calculator"
          onClick={() => {
            console.log("Button clicked")
          }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon="bank"
          text="Mortgage Calculator"
          onClick={() => {
            console.log("Button clicked")
          }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon="home"
          text="House Affordability Calculator"
          onClick={() => {
            console.log("Button clicked")
          }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon="shieldCheck"
          text="Life Insurance Coverage Calculator"
          onClick={() => {
            console.log("Button clicked")
          }}
        />

        <UIIconTextCard
          className="home-tools-grid-item"
          icon="banknotes"
          text="Net Salary Calculator"
          onClick={() => {
            console.log("Button clicked")
          }}
        />

      </div>
    </div>
  );
}

export default HomeTools