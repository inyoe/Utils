/*
*  格式化小数位，替代toFixed
*  解决四舍六入，五看尾数情况
*  
*  @method: formatFloat
*  @params: { Number | String } 目标数值
*           { Object } 配置项
*                     [digits = 2]  保留小数位
*                     [thousands = false]  千分位格式化
*
*  e.g:
*  formatFloat(2209.2279)  // 2209.23
*  formatFloat(2209.2279, { digits: 3, thousands: true })  // 2,209.228
*/

const formatThousands = function (value) {
  const arr = value.toString().split('.');

  arr[0] = arr[0].replace(/\B(?=(?:\d{3})+\b)/g, ',');
 
  return arr.join('.');
}

const formatFloat = function(value = '-', config = {}) {
  const { digits: digitsNum = 2, thousands: isFormatThousands = false } = config;
  let result;
 
  if (!isNaN(value) && isFinite(value)) {
    const arr = value.toString().split('.');
 
    if (arr.length === 2 && arr[1].length > digitsNum && arr[1].substr(-1) === '5') {
      arr[1] = arr[1].substr(0, arr[1].length - 1) + '6';
    }
    result = Number(arr.join('.')).toFixed(digitsNum);
 
    if (isFormatThousands) {
      result = formatThousands(result);
    }
  } else {
    result = '-';
  }
 
  return result;
}