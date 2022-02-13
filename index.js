export default class Lazy {
    constructor() {
        this.functions = [];
    }

    add(fn, ...args) {
        this.functions = [...this.functions, { func: fn, args: args }];

        return this;
    }

    evaluate(argsArr) {
        return argsArr.map((elem) => {
            return this.functions.reduce((acc, curObj) => {
                const { func, args } = curObj;

                return func(acc, ...args);
            }, elem);
        });
    }
}

const computation = new Lazy();

computation
    .add(function timesTwo(a) {
        return a * 2;
    })
    .add(function plus(a, b) {
        return a + b;
    }, 1);

console.log(computation.evaluate([1, 2, 3]));
