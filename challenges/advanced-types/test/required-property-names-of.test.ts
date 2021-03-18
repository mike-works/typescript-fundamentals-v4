import { RequiredPropertyNamesOf } from "advanced-type-olympics";
import { nvr } from "./utils";

/**
 * RequiredPropertyNamesOf should require two template params.
 * The following examples should result in TS errors
 */
let a: RequiredPropertyNamesOf; // $ExpectError

// Should be ok (but a bit pointless)
let c: RequiredPropertyNamesOf<{}>;

type e = RequiredPropertyNamesOf<{ a: number; b?: string }>;
const ee: e = "a" as e;
const aa: "a" = ee

type f = RequiredPropertyNamesOf<Partial<{ a: number | number[]; b: string }>>;
const ff: 3 | f = 3;
if (ff !== 3) {
    nvr(ff);
}

type g = RequiredPropertyNamesOf<{ a: number; b: string }>;
const gg: g = null as any;
const h: "a" | "b" = gg
