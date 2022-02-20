"use strict";
exports.__esModule = true;
exports.sort = void 0;
function sort(arr) {
    var sorted = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        var len = sorted.length;
        if (len < 1)
            sorted.push(item);
        while (len > 0) {
            if (item < sorted[len - 1]) {
                len -= 1;
                if (len === 0) {
                    //in case there's no item to the left
                    sorted.unshift(item);
                    break;
                }
            }
            else {
                sorted.splice(len, 0, item);
            }
        }
    }
    return sorted;
}
exports.sort = sort;
console.log(sort([3, 2]));
