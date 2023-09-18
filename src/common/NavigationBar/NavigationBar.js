import { useLocation } from "react-router-dom";

import DarkModeToggle from "@common/DarkModeToggle/DarkModeToggle";
import LanguageSwitcher from "@common/LanguageSwitcher/LanguageSwitcher";
import BackButton from "@common/BackButton/BackButton";
import { ScreenType } from "@common/ScreenType";

import "./NavigationBar.css";

const NavigationBar = () => {
  const location = useLocation()
  const isAtHome = location.pathname !== ScreenType.home

  return (
    <div className="navigation-bar">
      <div className="navigation-bar-buttons">
        {isAtHome && <BackButton />}
      </div>
      <div className="navigation-bar-buttons">
        <DarkModeToggle />
        <LanguageSwitcher />
      </div>
    </div>
  );
}

export default NavigationBar;