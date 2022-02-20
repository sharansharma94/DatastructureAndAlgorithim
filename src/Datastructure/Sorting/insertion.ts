export function sort(arr: number[]): number[] {
  const sorted = [];

  for (let item of arr) {
    let len = sorted.length;
    if (len < 1) sorted.push(item);
    while (len > 0) {
      if (item < sorted[len - 1]) {
        len -= 1;
        if (len === 0) {
          //in case there's no item to the left
          sorted.unshift(item);
          break;
        }
      } else {
        sorted.splice(len, 0, item);
      }
    }
  }

  return sorted;
}

console.log(sort([3, 2]));
