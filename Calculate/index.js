/*
*  加、减、乘、除计算
*
*  e.g:
*  calcAdd(2.2, 9.22, 7.9)  // 19.32
*  calcSub(2.2, 9.22, 7.9)  // -14.92
*  calcMul(2.2, 9.22, 7.9)  // 160.2436
*  calcDiv(2.2, 9.22, 7.9)  // 0.030204014388094128
*
*/ 
 
// 获取最大小数位
const getMultiple = function(numbers) {
  let result = 1;
 
  if (Array.isArray(numbers) && numbers.length > 1) {
    const decimalNum = Math.max(...numbers.map(item => {
      const decimalIndex = String(item).indexOf('.');
 
      return decimalIndex > -1 ? String(item).length - 1 - decimalIndex : 0;
    }));
 
    result = Math.pow(10, decimalNum);
  }
 
  return result;
}
 
// 加法
const calcAdd = function() {
  const Numbers = Array.from(arguments);
  const multiple = getMultiple(Numbers);
 
  return Numbers.length ?
          Numbers.reduce((total, cur, index) => (index === 1 ? Math.floor(total * multiple) : total) + Math.floor(cur * multiple)) / multiple :
          '-';
}

// 减法
const calcSub = function() {
  const Numbers = Array.from(arguments);
  const multiple = getMultiple(Numbers);
 
  return Numbers.length ?
          Numbers.reduce((total, cur, index) => (index === 1 ? Math.floor(total * multiple) : total) - Math.floor(cur * multiple)) / multiple :
          '-';
}

// 乘法
const calcMul = function() {
  const Numbers = Array.from(arguments);
  const multiple = getMultiple(Numbers);
 
  return Numbers.length ?
          Numbers.reduce((total, cur, index) => (index === 1 ? Math.floor(total * multiple) : total) * Math.floor(cur * multiple)) / Math.pow(multiple, Numbers.length) :
          '-';
}

// 除法
const calcDiv = function() {
  const fullNumbers = Array.from(arguments);
  const curNumbers = fullNumbers.splice(0, 2);
  const multiple = getMultiple(curNumbers);
 
  const result = curNumbers.length ?
          curNumbers.reduce((total, cur, index) => (index === 1 ? Math.floor(total * multiple) : total) / Math.floor(cur * multiple)) :
          '-';
 
  return fullNumbers.length ? calcDiv(result, ...fullNumbers) : result;
}