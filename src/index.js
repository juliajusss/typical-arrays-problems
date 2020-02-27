exports.min = function min(array) {
  if (!array || array.length === 0) {
    return 0;
  } else {
    return Math.min(...array);
  }
}

exports.max = function max(array) {
  if (!array || array.length === 0) {
    return 0;
  } else {
    return Math.max(...array);
  }
}

exports.avg = function avg(array) {
  if (!array || array.length === 0) {
    return 0;
  } else {
    return array.reduce((acc, val) => (acc + val)) / array.length;
  }
}
