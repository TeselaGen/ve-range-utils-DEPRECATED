import { AnnRange } from "./types"

import { assign } from "lodash";


export const provideInclusiveOptions = <T extends Array<any>, U extends AnnRange | number | undefined>(fn: (...args: T) => U) => {
    return (...args: T): U => {
        var options = args[args.length - 1]
        // if (options && (options.inclusive1BasedEnd || options.inclusive1BasedStart)) {
        //     args.forEach(function (arg, index) {
        //         if (arg && arg.start > -1 && options.inclusive1BasedStart) {
        //             args[index] = assign(arg, { start: arg.start - 1 })
        //         }
        //         if (arg && arg.end > -1 && options.inclusive1BasedEnd) {
        //             args[index] = assign(arg, { end: arg.end - 1 })
        //         }
        //     })
        // }
        // if () 

        var returnVal = fn.apply(this, args)
        if (returnVal && typeof returnVal === 'object' && returnVal.start > -1 && options && options.inclusive1BasedStart) {
            returnVal = assign(returnVal, { start: returnVal.start + 1 })
        }
        if (returnVal && typeof returnVal === 'object' && returnVal.end > -1 && options && options.inclusive1BasedEnd) {
            returnVal = assign(returnVal, { end: returnVal.end + 1 })
        }
        return returnVal
    }
}