
exports.min = function min (array) {
  if (!array) {
    return 0
  }
  if(array.length == 0) return 0;
  let min = array[0];
  for(let i = 0; i < array.length - 1; i++) {
    if(array[i + 1] < min) min = array[i + 1];
  } 
  return min;
}

exports.max = function max (array) {
  if (!array) {
    return 0
  }
  if(array.length == 0) return 0;
  let max = array[0];
  for(let i = 0; i < array.length - 1; i++) {
    if(array[i + 1] > max) max = array[i + 1];
  }
  return max;
}

exports.avg = function avg (array) {
  if (!array) {
    return 0
  }
  if(array.length == 0) return 0;
  let sum = 0;
  for(let i = 0; i < array.length; i++)
  sum += array[i];
  sum /= array.length;
  return sum;
}
