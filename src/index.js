
exports.min = function min (array) {
  if(array===undefined){return 0}
  if(array.length===0){return 0}
  // if(array===NaN){return 0}
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  array.sort(compareNumeric)
  return array[0];
}

exports.max = function max (array) {
  if(array===undefined){return 0}
  if(array.length===0){return 0}
  // if(array===NaN){return 0}
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  array.sort(compareNumeric)
  return array[array.length-1]
  ;
}

exports.avg = function avg (array) {
  let result = 0;
  if(array===undefined){return 0}
  if(array.length===0){return 0}
  // if(array===NaN){return 0}
  for(let i = 0; i<array.length; i++)
  {result +=array[i]}
  return result/(+array.length);
}
