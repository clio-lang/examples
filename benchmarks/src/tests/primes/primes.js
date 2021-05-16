module.exports.isPrime = (n) => {
  if (n == 2 || n == 3 || n == 5 || n == 7) {
    return true;
  } else if (n < 2 || n % 2 == 0) {
    return false;
  } else {
    return new Array(Math.ceil(n ** (1 / 2)) - 1)
      .fill()
      .map((_, i) => i + 1)
      .every((i) => i % n > 0);
  }
};
