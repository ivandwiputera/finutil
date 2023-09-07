import Localise, { LocaliseKey } from "localisation/Localise"
import { isNumber, isString, isValidNumber } from "./DataTypeUtils"

export class Formatter {
  static getCurrencyText = (value) => {
    // Returns immediately if number is not recognized
    const number = Number(value)
    if (!isNumber(number) || isNaN(number)) {
      return ""
    }

    // Format given number
    const formatter = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      currencyDisplay: "narrowSymbol",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
      useGrouping: "always",
      signDisplay: "negative"
    })
    return formatter.format(number)
  }

  static getCurrencyValue = (displayText) => {
    // Returns immediately if params is number
    if (isNumber(displayText)) {
      return displayText
    }

    // Returns null if params not string
    if (!isString(displayText)) {
      return null
    }

    // Returns null if text is empty after removing all unneeded chars
    const cleanText = displayText.replace(/[^0-9.-]+/g, "")
    if (cleanText === "") {
      return null
    }

    // Convert to numbers
    const result = Number(cleanText)
    return !isNaN(result) ? result : null
  }

  static getNumYearsText = (value) => {
    // Returns immediately if value is invalid
    if (!isValidNumber(value)) {
      return null
    }

    var numYears = value|0;
    var numMonths = Math.ceil(((value*10%10)/10)*12); 

    var unitYears = numYears === 1 ? Localise(LocaliseKey.formatterYear) : Localise(LocaliseKey.formatterYears)
    var unitMonths = numMonths === 1 ? Localise(LocaliseKey.formatterMonth) : Localise(LocaliseKey.formatterMonths)

    var displayText = `${numYears} ${unitYears}`
    if (numMonths > 0) {
      displayText += ` ${numMonths} ${unitMonths}`
    }
    return displayText
  }
}