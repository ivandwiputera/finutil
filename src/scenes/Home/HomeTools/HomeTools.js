import "./HomeTools.css"
import UIHeaderText from "uicomponents/UIHeaderText/UIHeaderText";
import UIIconTextCard from "uicomponents/UIIconTextCard/UIIconTextCard";

const HomeTools = () => {
  return (
    <div>
      <UIHeaderText
        className="text-align-center  ml-200 mr-200"
        title="Tools"
        description="Feel free to use these tools to help with your budgeting and planning your financial goals."
      />
      <div className="home-tools-grid mt-100">
        <UIIconTextCard
          className="m-50"
          icon="chartPie"
          text="Budgeting 50-30-20 Calculator"
          onClick={() => {
            console.log("Button clicked")
          }}
        />

        <UIIconTextCard
          className="m-50"
          icon="exclamationTriangle"
          text="Emergency Funds Calculator"
          onClick={() => {
            console.log("Button clicked")
          }}
        />

        <UIIconTextCard
          className="m-50"
          icon="rocketLaunch"
          text="Investment Return Calculator"
          onClick={() => {
            console.log("Button clicked")
          }}
        />

        <UIIconTextCard
          className="m-50"
          icon="currencyDollar"
          text="Financial Freedom Calculator"
          onClick={() => {
            console.log("Button clicked")
          }}
        />

        <UIIconTextCard
          className="m-50"
          icon="faceSmile"
          text="Retirement 4% Calculator"
          onClick={() => {
            console.log("Button clicked")
          }}
        />

        <UIIconTextCard
          className="m-50"
          icon="flag"
          text="Goal Setting Calculator"
          onClick={() => {
            console.log("Button clicked")
          }}
        />

        <UIIconTextCard
          className="m-50"
          icon="bank"
          text="Mortgage Calculator"
          onClick={() => {
            console.log("Button clicked")
          }}
        />

        <UIIconTextCard
          className="m-50"
          icon="home"
          text="House Affordability Calculator"
          onClick={() => {
            console.log("Button clicked")
          }}
        />

        <UIIconTextCard
          className="m-50"
          icon="shieldCheck"
          text="Life Insurance Coverage Calculator"
          onClick={() => {
            console.log("Button clicked")
          }}
        />

        <UIIconTextCard
          className="m-50"
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