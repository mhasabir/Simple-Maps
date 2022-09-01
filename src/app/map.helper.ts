export class MapHelper {
  public static getShortTooltipNumber(number: any) {
    if (number > 0) {
      let abs = Math.abs(number)
      if (abs >= Math.pow(10, 12)) {
        // trillion
        number = (number / Math.pow(10, 12)).toFixed(1) + "T";
      } else if (abs < Math.pow(10, 12) && abs >= Math.pow(10, 9)) {
        // billion
        number = (number / Math.pow(10, 9)).toFixed(1) + "B";
      } else if (abs < Math.pow(10, 9) && abs >= Math.pow(10, 6)) {
        // million
        number = (number / Math.pow(10, 6)).toFixed(1) + "M";
      } else if (abs < Math.pow(10, 6) && abs >= Math.pow(10, 3)) {
        // thousand
        number = (number / Math.pow(10, 3)).toFixed(1) + "K";
      }
      else {
        if (number % 1 === 0) {
          return number;
        }
        else {
          return parseFloat(number).toFixed(2)
        }
      }
      var iden = number.substring(number.length - 1, number.length);
      number = number.substring(0, number.length - 1);
      return parseFloat(number) + iden;
    }
    if (number < 1) {
      return number;
    }
    if (number == null || number === undefined || number == "") {
      number = 0;
      return number;
    }
  }
}
