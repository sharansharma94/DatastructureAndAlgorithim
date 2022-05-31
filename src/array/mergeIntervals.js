var merge = function (intervals) {

	var merge = function (intervals) {

		if (intervals.length === 1) {
			return intervals;
		}

		let sortedIntervals = intervals.sort((a, b) => {
			return a[0] - b[0]
		})


		let final = [];
		for (let interval of sortedIntervals) {

			if (final.length < 1 || final[final.length - 1][1] < interval[0]) {
				final.push(interval);
			} else {
				final[final.length - 1][1] = Math.max(final[final.length - 1][1], interval[1])
			}

		}


		return final
	};
}

//const intervals = [[1,3],[2,6],[8,10],[15,18]]
//const intervals = [[1, 4], [4, 5]];
// const intervals = [[1, 4], [1, 4]];
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];

console.log(merge(intervals));

