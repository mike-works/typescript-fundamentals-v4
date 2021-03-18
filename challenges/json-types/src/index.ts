// 💡 HINT: number[] and Array<number> mean the same thing

type JSONPrimitive = string | number | boolean;
class JSONArray extends Array<JSONValue> {}
interface JSONObject {
  [k: string]: JSONValue;
}
type JSONValue = JSONPrimitive | JSONArray | JSONObject;

export { JSONValue, JSONArray, JSONObject };
