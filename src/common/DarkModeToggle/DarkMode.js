import { LocalStorageType } from "@common/LocalStorageType"

export const getCachedTheme = () => {
  return localStorage.getItem(LocalStorageType.theme)
}

export const setCachedTheme = (value) => {
  return localStorage.setItem(LocalStorageType.theme, value)
}