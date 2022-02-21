function sort(arr) {
  const sorted = [];

  for (let item of arr) {
    let len = sorted.length;
    if (len < 1) sorted.push(item);
    while (len > 0) {
      let current = sorted[len - 1];
      if (item < current) {
        len -= 1;
        if (len === 0) {
          //in case there's no item to the left
          sorted.unshift(item);
          break;
        }
      } else {
        sorted.splice(len, 0, item);
        break;
      }
    }
  }

  return sorted;
}

// console.log(sort([3, 2, 4, 8, 6]));
console.log(sort([31, 41, 59, 26, 41, 58]));
