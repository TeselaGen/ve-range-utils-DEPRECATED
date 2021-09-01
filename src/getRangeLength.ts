import { provideInclusiveOptions } from "./provideInclusiveOptions";
import { AnnRange, InclusiveOpts } from "./types";
export const getRangeLength = provideInclusiveOptions(_getRangeLength)
function _getRangeLength(range: AnnRange, rangeMax: number, _opts?: InclusiveOpts) {
   if (range.end < range.start) {
      return rangeMax - range.start + range.end + 1;
   } else {
      return range.end - range.start + 1;
   }
}