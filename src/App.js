import Home from "scenes/Home/Home";
import { HashRouter  as Router, Routes, Route } from "react-router-dom";
import { ScreenType } from "ScreenType";
import EmergencyFundsCalculator from "scenes/calculators/EmergencyFundsCalculator/EmergencyFundsCalculator";
import Budget503020Calculator from "scenes/calculators/Budget503020Calculator/Budget503020Calculator";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Router baseName={process.env.PUBLIC_URL}>
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
