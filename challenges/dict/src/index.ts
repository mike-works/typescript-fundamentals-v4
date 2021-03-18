export type Dict<T = any> = {
    [k: string]: T | undefined
};

// Array.prototype.map, but for Dict
export function mapDict<S, T>(src: Dict<S>, mapper: (s: S) => T): Dict<T> {
    return reduceDict(src, (outMap, thisItem, thisKey) => {
        outMap[thisKey] = mapper(thisItem);
        return outMap;
    }, {} as Dict<T>);
}

// Array.prototype.reduce, but for Dict
export function reduceDict<S, T>(src: Dict<S>, cb: (acc: T, item: S, key: string, original: Dict<S>) => T, initialVal: T) {
    let val = initialVal;
    for (const key in src) {
        const thisVal = src[key]
        if (typeof thisVal !== 'undefined')
           val = cb(val, thisVal, key, src);
    }
    return val;
}
