import "./Home.css"
import HomeContact from "./HomeContact/HomeContact";
import HomeIntroduction from "./HomeIntroduction/HomeIntroduction";
import HomeTools from "./HomeTools/HomeTools";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()

  const onButtonClick = () => {
    document.getElementById("home-contact").scrollIntoView()
  }

  const onItemClick = (screenType) => {
    navigate(screenType)
  }

  return (  
    <div className="home-container">
      <HomeIntroduction onButtonClick={onButtonClick} />
      <HomeTools onItemClick={ (screenType) => onItemClick(screenType) }/>
      <HomeContact />
    </div>
  );
}
 
export default Home;

