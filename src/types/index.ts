export type AnnRange = {
  start: number;
  end: number;
  locations?: SimpleRange[]
  [key: string]: any
}
export type SimpleRange = {
  start: number;
  end: number;
  locations?: never;
  [key: string]: any
}

export type RangeAngle = {
  startAngle: number;
  totalAngle: number;
  endAngle: number;
  centerAngle: number;
}
export type RangeAngles = {

  locationAngles?: RangeAngle[]
} & RangeAngle



export type AnnRangeTypeOptions = {
  inclusive1BasedStart?: boolean;
  inclusive1BasedEnd?: boolean;
}


