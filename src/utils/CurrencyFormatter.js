import { isNumber, isString } from "./DataTypeUtils"

export class CurrencyFormatter {
  static getDisplayText = (value) => {
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

  static getValue = (displayText) => {
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
}