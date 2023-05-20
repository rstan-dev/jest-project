/**
 * @jest-environment jsdom
 */

const addition = require('../calc');

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 75 for 40 + 35", () => {
            expect(addition(40, 35)).toBe(75);
        })
        test("should return the original number when one parameter is missing", () => {
            expect(addition(5)).toBe(5);
        });
        test("should return NaN for string parameters", () => {
            expect(addition("5", 10)).toBeNaN();
            expect(addition("hello", "world")).toBeNaN();
          });

    });

    describe("Subtraction function", () => {

    });

    describe("Multiply function", () => {

    });

    describe("Divide function", () => {

    });


});