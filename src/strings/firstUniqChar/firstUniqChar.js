var firstUniqChar = function (s) {
    const mappings = {};

    for (let x of s) {
        if (mappings[x]) {
            mappings[x]++;
        }
        else {
            mappings[x] = 1;
        }
    }


    for (let index = 0; index < s.length; index++) {
        if (mappings[s[index]] === 1) return index;
    }

    return -1


};


console.log(firstUniqChar('leetcode'));
