export function isString(value) {
  return typeof value === "string"
}

export function isNumber(value) {
  return typeof value === "number"
}

export function isValidNumber(number) {
  return number != null && isNumber(number) && !isNaN(number)
}