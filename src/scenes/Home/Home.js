import "./Home.css";
import HomeIntroduction from "./HomeIntroduction/HomeIntroduction";
import HomeTools from "./HomeTools/HomeTools";
import HomeContact from "./HomeContact/HomeContact";
import { useNavigation } from "@utils/Navigation";

const Home = () => {
  const { navigateTo } = useNavigation()

  const onButtonClick = () => {
    document.getElementById("home-contact").scrollIntoView({ behavior: 'smooth' })
  }

  const onItemClick = (screenType) => {
    navigateTo(screenType)
  }

  return (
    <div className="home-container">
      <HomeIntroduction onButtonClick={onButtonClick} />
      <HomeTools onItemClick={(screenType) => onItemClick(screenType)} />
      <HomeContact />
    </div>
  );
}

export default Home;

