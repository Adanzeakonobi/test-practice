const stringLength = (string) => {
    if (string.length <1 || string.length > 10) {
        throw new Error('String length is not between 1 and 10');
    }
  return string.length;
}

const reverseString = (string) => {
    return string.toLowerCase().split('').reverse().join('');
}

const capitalize = (string) => {
    // return string[0].toUpperCase()+ string.slice(1);
    return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
  }

module.exports = { stringLength, reverseString, capitalize };