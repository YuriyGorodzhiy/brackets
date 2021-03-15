module.exports = function check(str, bracketsConfig) {
  var arr = str.split(''),
  stack = [],
  open = [],
  close = [],
  closeIndex,
  openIndex;

  for (var i=0; i<bracketsConfig.length; i++) {
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);
  }
  for ( var i=0; i<arr.length; i++) {
    openIndex = open.indexOf(arr[i]);
    if (openIndex !== -1) {
      stack.push(openIndex);
      continue;
    }

    closeIndex = close.indexOf(arr[i]);
    if (closeIndex !== -1) {
      openIndex = stack.pop();
      if (closeIndex !== openIndex) {
          return false;
      }
    }
  }
  if (stack.length != 0) {
    return false;
  }
  return true;
}
