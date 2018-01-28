export const simpleDebounce = (func, delayMs) => {
    let currentTimeout;
    return () => {
        clearTimeout(currentTimeout);
        currentTimeout = setTimeout(() => {
            func.apply(this, arguments);
        }, delayMs);
    };
};
