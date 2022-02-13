import { assert, expect } from 'chai';
import Lazy from './index.js';

describe('Test Lazy', function () {
    let lazy;
    beforeEach(function () {
        lazy = new Lazy();
    });

    describe('Object should have properties', function () {
        it('Should have the correct functions', function () {
            assert.isFunction(Lazy.prototype.add);
            assert.isFunction(Lazy.prototype.evaluate);
        });
        it('Should have the correct properties', function () {
            expect(lazy.functions.length).to.eq(0);
        });
    });

    describe('Test add()', function () {
        it('Should have length 1', function () {
            lazy.add(function timesTwo(a) {
                return a * 2;
            });
            expect(lazy.functions.length).to.eq(1);
        });
    });

    describe('Test evaluate()', function () {
        it('Test result', function () {
            const [first, second, third] = lazy
                .add(function timesTwo(a) {
                    return a * 2;
                })
                .evaluate([1, 2, 3]);
            expect(first).to.eq(2);
            expect(second).to.eq(4);
            expect(third).to.eq(6);
        });
    });
});
