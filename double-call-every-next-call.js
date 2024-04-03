/* 
This kata is about static method that should return different values.

On the first call it must be 1, on the second and others - it must be a double from previous value.

Look tests for more examples, good luck :)
*/

class Class {
    static #instance = null;
    static number = 1;

    static getNumber() {
        if (!this.#instance) {
            this.#instance = new Class();
            return 1;
        }
        this.number *= 2;
        return this.number;
    }
}
