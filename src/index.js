module.exports = function reverse (n) {
  let numberToString = String(n);
  let output = '';
  if (numberToString[0] === '-') {
    output = numberToString.slice(1);
    output = output.split('').reverse().join('');
  } else {
    output += numberToString.split('').reverse().join('');
  }
  let result = +output;
  return (result);
}
