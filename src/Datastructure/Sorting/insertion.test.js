"use strict";
exports.__esModule = true;
var insertion_1 = require("./insertion");
describe("sorting test", function () {
    it("sort 1 item", function () {
        expect((0, insertion_1.sort)([1])).toStrictEqual([1]);
    });
    it("sort 2 items", function () {
        expect((0, insertion_1.sort)([3, 2])).toStrictEqual([2, 3]);
    });
    it("sort 4 items", function () {
        expect((0, insertion_1.sort)([3, 2, 8, 6])).toStrictEqual([2, 3, 6, 8]);
    });
});
