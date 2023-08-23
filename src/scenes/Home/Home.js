import "./Home.css"
import HomeContact from "./HomeContact/HomeContact";
import HomeIntroduction from "./HomeIntroduction/HomeIntroduction";
import HomeTools from "./HomeTools/HomeTools";

const Home = () => {
  return (  
    <div className="home-container">
      <HomeIntroduction onButtonClick={onButtonClick} />
      <HomeTools />
      <HomeContact />
    </div>
  );
}

function onButtonClick() {
  document.getElementById("home-contact").scrollIntoView()
}
 
export default Home;

