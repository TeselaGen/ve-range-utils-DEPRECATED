import { AnnRange } from "./types";

//function that returns the annotation range type
export function getAnnotationRangeType(annotationRange: AnnRange, enclosingRange: AnnRange, forward?: boolean) {
    if (annotationRange.start === enclosingRange.start) {
        if (annotationRange.end === enclosingRange.end) {
            return 'beginningAndEnd';
        } else {
            if (forward) {
                return 'start';
            } else {
                return 'end';
            }
        }
    } else {
        if (annotationRange.end === enclosingRange.end) {
            if (forward) {
                return 'end';
            } else {
                return 'start';
            }
        } else {
            return 'middle';
        }
    }
};