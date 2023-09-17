import DarkModeToggle from "@common/DarkModeToggle/DarkModeToggle";
import LanguageSwitcher from "@common/LanguageSwitcher/LanguageSwitcher";

import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <DarkModeToggle/>
      <LanguageSwitcher />
    </div>
  );
}

export default NavigationBar;