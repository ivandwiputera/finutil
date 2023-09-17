import UIIcon from "@components/UIIcon/UIIcon";
import { LocalStorageType } from "@common/LocalStorageType";
import { ThemeType } from "@common/ThemeType";
import { UIIconType } from "@components/UIIcon/UIIcon";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";

const DarkModeToggle = () => {

  const [theme, setTheme] = useLocalStorage(LocalStorageType.theme)

  useEffect(() => {
    if (theme === ThemeType.dark) {
      document.body.style.backgroundColor = "#262626"
    } else {
      document.body.style.backgroundColor = "#ffffff"
    }
  }, [theme]);

  const getIconType = () => {
    return theme === ThemeType.dark ? UIIconType.moon : UIIconType.sun
  }

  const onClick = () => {
    console.log("clicked")
    const newTheme = (theme === ThemeType.dark ? ThemeType.light : ThemeType.dark)
    setTheme(newTheme)
  }

  return (
    <UIIcon
      className="ui-icon-medium color-text"
      icon={getIconType()}
      onClick={onClick}
    />
  );
}

export default DarkModeToggle;