import { isNumber } from "./DataTypeUtils"

export class Validation {
  static validateNotEmpty = (value) => {
    return value != null && value !== ""
  } 

  static validatePositiveNumber = (value) => {
    return value != null && isNumber(value) && value > 0
  }
}