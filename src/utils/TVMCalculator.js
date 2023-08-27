export class TVMCalculator {

  /// Calculate present value (TVM)
  /// Formula:
  ///    PV = ((pmt*k/i - fv) * 1/(1+i)^nper) - (pmt*k/i)
  /// - Parameters:
  ///   - i: interest per period
  ///   - nper: num of  period
  ///   - pmt: payment per period
  ///   - fv: future value
  /// - Returns: present value
  static pv = ({ i, nper, pmt, fv, isBeginning }) => {
    // CASE: No duration
    if (nper === 0.0) {
      return -fv
    }

    // CASE: No interest
    if (i === 0.0) {
      return -1 * (pmt * nper + fv)
    }

    // CASE: Default
    let k = (isBeginning === true) ? 1.0 + i : 1.0
    return ((pmt * k / i - fv) * 1 / Math.pow(1 + i, nper)) - (pmt * k / i)
  }

  /// Calculate future value (TVM)
  /// Formula:
  ///     FV = ( pmt*k / i ) - ( 1 + i ) ^ nper * ( pv + pmt*k* / i )
  /// - Parameters:
  ///   - i: interest per period
  ///   - nper: num of period
  ///   - pmt: payment per period
  ///   - pv: present value
  /// - Returns: future value
  static fv = ({ i, nper, pmt, pv, isBeginning }) => {
    // CASE: No duration
    if (nper === 0.0) {
      return pv
    }

    // CASE: No Interest
    if (i === 0.0) {
      return -1 * (pv + nper * pmt)
    }

    // CASE: Default
    let k = isBeginning === true ? 1.0 + i : 1.0
    return (pmt * k / i) - Math.pow(1 + i, nper) * (pv + pmt * k / i)
  }

  /// Calculate payment (TVM)
  /// Formula:
  ///     PMT = ( pv + (pv + fv) / ( (1 + i) ^ nper - 1)) * -i/k
  /// - Parameters:
  ///   - i: interest per period
  ///   - nper: num of period
  ///   - pmt: payment per period
  ///   - pv: present value
  /// - Returns: future value
  static pmt = ({i, nper, pv, fv, isBeginning}) => {
    // CASE: No nper
    if (nper === 0.0) {
      return -fv - pv
    }

    // CASE: No interest
    if (i === 0) {
      return (-fv - pv) / nper
    }

    // CASE: Default
    let k = isBeginning === true ? 1.0 + i : 1.0
    return (pv + (pv + fv) / (Math.pow(1 + i, nper) - 1)) * -i / k
  }
}