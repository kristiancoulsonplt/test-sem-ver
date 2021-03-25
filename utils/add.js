const add = (a, b, should) => {
  if (!should) return a;
  return a + b
};

module.exports = { add }