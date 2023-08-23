import "./Home.css"
import HomeContact from "./HomeContact/HomeContact";
import HomeIntroduction from "./HomeIntroduction/HomeIntroduction";
import HomeTools from "./HomeTools/HomeTools";

const Home = () => {
  return (  
    <div className="home-container">
      <HomeIntroduction />
      <HomeTools />
      <div ><HomeContact /></div>
    </div>
  );
}
 
export default Home;