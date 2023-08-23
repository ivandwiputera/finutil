import { AtSymbolIcon } from '@heroicons/react/24/outline'
import { BanknotesIcon } from '@heroicons/react/24/outline'
import { BuildingLibraryIcon } from '@heroicons/react/24/outline'
import { ChartPieIcon } from '@heroicons/react/24/outline'
import { CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { FaceSmileIcon } from '@heroicons/react/24/outline'
import { FlagIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/outline'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/outline'
import "./UIIcon.css"

const UIIcon = (props) => {
  const className = props.className
  const icon = props.icon

  var component = null
  switch (icon) {
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
    case UIIconType.home:
      component = <HomeIcon />
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
    case UIIconType.user:
      component = <UserIcon />
      break
    default:
      component = <div />
      break
  }

  return (
    <div className={className}>
      {component}
    </div>
  )
}

const UIIconType = {
  atSymbol: 'atSymbol',
  bank: 'bank',
  banknotes: 'banknotes',
  chartPie: 'chartPie',
  currencyDollar: 'currencyDollar',
  envelope: 'envelope',
  exclamationTriangle: 'exclamationTriangle',
  faceSmile: 'faceSmile',
  flag: 'flag',
  home: 'home',
  paperAirplane: 'paperAirplane',
  rocketLaunch: 'rocketLaunch',
  shieldCheck: 'shieldCheck',
  user: 'user'
}

export default UIIcon;