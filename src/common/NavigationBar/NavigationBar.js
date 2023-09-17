import LanguageSwitcher from "@common/LanguageSwitcher/LanguageSwitcher";

import "./NavigationBar.css"

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <LanguageSwitcher />
    </div>
  );
}

export default NavigationBar;