import Finance from "tvm-financejs"
import { isValidNumber } from "./DataTypeUtils"
export class TVMCalculator {

  /// Calculate present value (TVM)
  /// - Parameters:
  ///   - i: interest per period
  ///   - nper: num of  period
  ///   - pmt: payment per period
  ///   - fv: future value
  /// - Returns: present value
  static pv = ({ i, nper, pmt, fv, isBeginning }) => {
    var finance = new Finance()
    var type = isBeginning ? 1 : 0
    var result = finance.PV(i, nper, pmt, fv, type)
    return isValidNumber(result) ? result : null
  }

  /// Calculate future value (TVM)
  /// - Parameters:
  ///   - i: interest per period
  ///   - nper: num of period
  ///   - pmt: payment per period
  ///   - pv: present value
  /// - Returns: future value
  static fv = ({ i, nper, pmt, pv, isBeginning }) => {
    var finance = new Finance()
    var type = isBeginning ? 1 : 0
    var result = finance.FV(i, nper, pmt, pv, type)
    return isValidNumber(result) ? result : null
  }

  /// Calculate payment (TVM)
  /// - Parameters:
  ///   - i: interest per period
  ///   - nper: num of period
  ///   - pmt: payment per period
  ///   - pv: present value
  /// - Returns: future value
  static pmt = ({i, nper, pv, fv, isBeginning}) => {
    var finance = new Finance()
    var type = isBeginning ? 1 : 0
    var result = finance.PMT(i, nper, pv, fv, type)
    return isValidNumber(result) ? result : null
  }

  /// Calculate period (TVM)
  /// - Parameters:
  ///   - i: interest per period
  ///   - nper: num of period
  ///   - pmt: payment per period
  ///   - pv: present value
  /// - Returns: future value
  static nper = ({i, pv, fv, pmt, isBeginning}) => {
    var finance = new Finance()
    var type = isBeginning ? 1 : 0
    var result = finance.NPER(i, pmt, pv, fv, type)
    return isValidNumber(result) ? result : null
  }
}