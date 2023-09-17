import { UIIconType } from "@components/UIIcon/UIIcon";
import { LanguageType } from "@common/LanguageType";
import { useLocalise, useLanguage, Copy } from "@localisations/Localise";
import UISelector from "@components/UISelector/UISelector";

const LanguageSwitcher = () => {
  const { localise } = useLocalise()
  const { language, setLanguage } = useLanguage()

  const options = [
    {
      icon: UIIconType.flagUS,
      label: localise(Copy.languageSwitcherEnglish),
      value: LanguageType.english
    },
    {
      icon: UIIconType.flagID,
      label: localise(Copy.languageSwitcherBahasa),
      value: LanguageType.bahasa
    }
  ]

  const getOption = (value) => {
    const filteredOptions = options.filter((option) => { return option.value === value })
    return filteredOptions.length > 0 ? filteredOptions[0] : null
  }

  const onChange = (option) => {
    if (option.value == null) { return }
    setLanguage(option.value)
  }

  return (
    <div className="language-switcher">
      <UISelector
        options={options}
        defaultValue={getOption(language)}
        onChange={onChange} />
    </div>
  );
}

export default LanguageSwitcher;