const simpleDebounce = (func, delayMs) => {
  let currentTimeout;
  return (...args) => {
    clearTimeout(currentTimeout);
    currentTimeout = setTimeout(() => {
      func.apply(this, args);
    }, delayMs);
  };
};

export default simpleDebounce;
