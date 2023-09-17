import UIToggle from "@components/UIToggle/UIToggle";
import { LocalStorageType } from "@common/LocalStorageType";
import { ThemeType } from "@common/ThemeType";
import { UIIconType } from "@components/UIIcon/UIIcon";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";

import "./DarkModeToggle.css";

const DarkModeToggle = () => {

  const [theme, setTheme] = useLocalStorage(LocalStorageType.theme)

  const options = [
    {
      icon: UIIconType.sun,
      value: ThemeType.light
    },
    {
      icon: UIIconType.moon,
      value: ThemeType.dark
    }
  ]

  const getOption = (value) => {
    const filteredOptions = options.filter((option) => { return option.value === value })
    return filteredOptions.length > 0 ? filteredOptions[0] : null
  }

  const onChange = (option) => {
    if (option.value == null) { return }
    setTheme(option.value)
  }

  useEffect(() => {
    if (theme === ThemeType.dark) {
      document.body.style.backgroundColor = "#1a1a1a"
    } else {
      document.body.style.backgroundColor = "#ffffff"
    }
  }, [theme]);

  return (
    <div className="dark-mode-toggle">
      <UIToggle
        options={options}
        defaultValue={getOption(theme)}
        onChange={onChange}
      />
    </div>
  );
}

export default DarkModeToggle;