import { assign } from "lodash";
import { identity } from "lodash";
import { AnnRange } from "./types";

export function adjustRangeToRotation(
  rangeToBeAdjusted: AnnRange,
  rotateTo = 0,
  rangeLength: number
) {
  // ac.throw([ac.range, ac.posInt, ac.posInt], arguments);
  const mod = rangeLength ? modulo : identity

  const newRange = assign({}, rangeToBeAdjusted, {
    start: mod(rangeToBeAdjusted.start - (rotateTo || 0), rangeLength),
    end: mod(rangeToBeAdjusted.end - (rotateTo || 0), rangeLength)
  });

  return newRange;
};

function modulo(n: number, m: number) {
  return ((n % m) + m) % m;
}
