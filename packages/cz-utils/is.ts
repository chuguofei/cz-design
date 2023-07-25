const toString = Object.prototype.toString

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}
export const isString = (val: unknown): val is string => is(val, 'String')
export const isUndefined = (val: unknown): val is undefined => val === undefined
export const isBoolean = (val: unknown): val is boolean => is(val, 'Boolean')
export const isNumber = (val: unknown): val is number => typeof val === 'number'
export const isFunction = (val: unknown): val is Function => typeof val === 'function'
export const isStringNumber = (val: string): boolean => {
  if (!isString(val)) {
    return false
  }
  return !Number.isNaN(Number(val))
}

export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object')
}
