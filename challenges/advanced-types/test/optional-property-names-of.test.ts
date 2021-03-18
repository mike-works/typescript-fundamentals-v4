import { OptionalPropertyNamesOf } from "advanced-type-olympics";
import { nvr } from "./utils";

/**
 * OptionalPropertyNamesOf should require two template params.
 * The following examples should result in TS errors
 */
let a: OptionalPropertyNamesOf; // $ExpectError

// Should be ok (but a bit pointless)
let c: OptionalPropertyNamesOf<{}>;

type e = OptionalPropertyNamesOf<{ a: number; b?: string }>;
const ee: e = null as any;
if (ee !== "b") {
    nvr(ee);
}

type f = OptionalPropertyNamesOf<Partial<{ a: number | number[]; b: string }>>;
const ff: f = null as any;
if (ff !== 'a' && ff !== 'b') {
    nvr(ff);
}

// $ExpectType never
type g = OptionalPropertyNamesOf<{ a: number | number[]; b: string }>;
const gg: g = null as g;
nvr(gg);

// == BONUS == //
// $ExpectType never
type d = OptionalPropertyNamesOf<{ a: number | undefined; b: string }>;
const dd: d = null as d;
nvr(dd);
