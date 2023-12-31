import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'
import { AtSymbolIcon } from '@heroicons/react/24/outline'
import { BanknotesIcon } from '@heroicons/react/24/outline'
import { BuildingLibraryIcon } from '@heroicons/react/24/outline'
import { ChartPieIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import { ClockIcon } from '@heroicons/react/24/outline'
import { CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { FaceSmileIcon } from '@heroicons/react/24/outline'
import { FlagIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/24/outline'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'
import { SunIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/outline'

import flagIconUS from '@icons/flag-us-32.png'
import flagIconID from '@icons/flag-id-32.png'

import "./UIIcon.css"

const UIIcon = (props) => {
  const className = props.className
  const icon = props.icon
  const onClick = props.onClick

  var component = null
  switch (icon) {
    case UIIconType.arrowLeft:
      component = <ArrowSmallLeftIcon />
      break
    case UIIconType.atSymbol:
      component = <AtSymbolIcon />
      break
    case UIIconType.bank:
      component = <BuildingLibraryIcon />
      break
    case UIIconType.banknotes:
      component = <BanknotesIcon />
      break
    case UIIconType.chartPie:
      component = <ChartPieIcon />
      break
    case UIIconType.chevronDown:
      component = <ChevronDownIcon />
      break
    case UIIconType.chevronLeft:
      component = <ChevronLeftIcon />
      break
    case UIIconType.chevronUp:
      component = <ChevronUpIcon />
      break
    case UIIconType.clock:
      component = <ClockIcon />
      break
    case UIIconType.currencyDollar:
      component = <CurrencyDollarIcon />
      break
    case UIIconType.envelope:
      component = <EnvelopeIcon />
      break
    case UIIconType.exclamationTriangle:
      component = <ExclamationTriangleIcon />
      break
    case UIIconType.faceSmile:
      component = <FaceSmileIcon />
      break
    case UIIconType.flag:
      component = <FlagIcon />
      break
    case UIIconType.flagUS:
      component = <img src={flagIconUS} alt=""/>
      break
    case UIIconType.flagID:
      component = <img src={flagIconID} alt=""/>
      break
    case UIIconType.home:
      component = <HomeIcon />
      break
    case UIIconType.moon:
      component = <MoonIcon />
      break
    case UIIconType.paperAirplane:
      component = <PaperAirplaneIcon />
      break
    case UIIconType.rocketLaunch:
      component = <RocketLaunchIcon />
      break
    case UIIconType.shieldCheck:
      component = <ShieldCheckIcon />
      break
    case UIIconType.sun:
      component = <SunIcon />
      break
    case UIIconType.user:
      component = <UserIcon />
      break
    default:
      component = <div />
      break
  }

  return (
    <div className={`ui-icon ${className}`} onClick={onClick}>
      {component}
    </div>
  )
}

export const UIIconType = {
  arrowLeft: 'arrowLeft',
  atSymbol: 'atSymbol',
  bank: 'bank',
  banknotes: 'banknotes',
  chartPie: 'chartPie',
  chevronDown: 'chevronDown',
  chevronLeft: 'chevronLeft',
  chevronUp: 'chevronUp',
  clock: 'clock',
  currencyDollar: 'currencyDollar',
  envelope: 'envelope',
  exclamationTriangle: 'exclamationTriangle',
  faceSmile: 'faceSmile',
  flag: 'flag',
  flagUS: 'flagUS',
  flagID: 'flagID',
  home: 'home',
  moon: 'moon',
  paperAirplane: 'paperAirplane',
  rocketLaunch: 'rocketLaunch',
  shieldCheck: 'shieldCheck',
  sun: 'sun',
  user: 'user'
}

export default UIIcon;