import Home from "scenes/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScreenType } from "ScreenType";
import EmergencyFundsCalculator from "scenes/EmergencyFundsCalculator/EmergencyFundsCalculator";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Router>
          <Routes>
            <Route path={ScreenType.home} element={<Home />} />
            <Route path={ScreenType.emergencyFundsCalculator} element={<EmergencyFundsCalculator />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
