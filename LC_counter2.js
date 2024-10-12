/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = function (init) {
    let counter = init;

    return {
        increment() {
            counter++;
            return counter;
        },
        decrement() {
            counter--;
            return counter;
        },
        reset() {
            counter = init;
            return counter;
        },
    };
};
