// 💡 HINT: number[] and Array<number> mean the same thing
type JSONPrimitive = string | number | boolean | null;

export interface JSONObject {
    [key: string]: JSONValue;
}

export interface JSONArray extends Array<JSONValue>{}

export type JSONValue = JSONPrimitive | JSONObject | JSONArray;

export function analyzeThing(args: any[]): boolean {
    return true;
}

// Jest
analyzeThing(['a', 'b', 'c'])
