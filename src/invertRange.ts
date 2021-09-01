import { normalizePositionByRangeLength } from "./normalizePositionByRangeLength";
import { provideInclusiveOptions } from "./provideInclusiveOptions";
import { AnnRange, InclusiveOpts } from "./types";
export const invertRange = provideInclusiveOptions(_invertRange)
function _invertRange(rangeOrCaret: AnnRange | number, rangeMax: number, _opts?: InclusiveOpts) {
	if (typeof rangeOrCaret === 'object') {
		if (rangeOrCaret.start > -1) {

			const start = rangeOrCaret.end + 1;
			const end = rangeOrCaret.start - 1;
			return {
				start: normalizePositionByRangeLength(start, rangeMax, false),
				end: normalizePositionByRangeLength(end, rangeMax, false),
			}
		} else {
			return {
				start: -1,
				end: rangeOrCaret.end
			}
		}
	} else {
		if (rangeOrCaret > -1 && typeof rangeOrCaret === 'number') {
			return {
				start: normalizePositionByRangeLength(rangeOrCaret, rangeMax, false),
				end: normalizePositionByRangeLength(rangeOrCaret - 1, rangeMax, false),
			}
		}
		return undefined
	}
}
