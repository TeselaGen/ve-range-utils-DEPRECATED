import { normalizePositionByRangeLength } from "./normalizePositionByRangeLength";

export function generateRandomRange(minStart: number, maxEnd: number, maxLength?: number) {
	var start = getRandomInt(minStart, maxEnd);
	var end
	if (maxLength) {
		end = normalizePositionByRangeLength(getRandomInt(start, start + maxLength), maxEnd)
	} else {
		end = getRandomInt(minStart, maxEnd);
	}
	return {
		start: start,
		end: end,
	}
}


function getRandomInt(min: number, max: number) {
	return Math.floor(Math.random() * (max - min)) + min;
}
