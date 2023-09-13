import { useNavigate } from "react-router-dom";
import "./Home.css";
import HomeIntroduction from "./HomeIntroduction/HomeIntroduction";
import HomeTools from "./HomeTools/HomeTools";
import HomeContact from "./HomeContact/HomeContact";

const Home = () => {
  const navigate = useNavigate()

  const onButtonClick = () => {
    document.getElementById("home-contact").scrollIntoView({behavior: 'smooth'})
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

