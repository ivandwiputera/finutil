import Home from "scenes/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScreenType } from "ScreenType";
import EmergencyFundsCalculator from "scenes/EmergencyFundsCalculator/EmergencyFundsCalculator";
import Budget503020Calculator from "scenes/Budget503020Calculator/Budget503020Calculator";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Router>
          <Routes>
            <Route path={ScreenType.budget503020Calculator} element={<Budget503020Calculator />} />
            <Route path={ScreenType.emergencyFundsCalculator} element={<EmergencyFundsCalculator />} />
            <Route path={ScreenType.home} element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
