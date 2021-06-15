import { modulatePositionByRange } from "./modulatePositionByRange";
export function normalizePositionByRangeLength1Based(position: number, sequenceLength: number) {
  return modulatePositionByRange(position, { start: 1, end: sequenceLength })
}