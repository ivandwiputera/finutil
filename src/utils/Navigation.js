import { useLocation, useNavigate } from "react-router-dom"
import { ScreenType } from "@common/ScreenType"

export const useNavigation = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const navigateTo = (screenType) => {
    const options = {
      state: {
        from: location.pathname
      }
    }

    return navigate(screenType, options)
  }

  const navigateBack = () => {
    if (location.state?.from != null) {
      return navigate(-1)
    } else {
      return navigateTo(ScreenType.home)
    }
  }

  return { navigateTo, navigateBack }
}