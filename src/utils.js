// http://gizma.com/easing/
// @flow
export type EaseFn = (
  currentTime: number,
  startValue: number,
  changeInValue: number,
  duration: number) => number;

export const linear: EaseFn = (
  currentTime,
  startValue,
  changeInValue,
  duration) => {
  return Math.min(changeInValue * currentTime / duration, changeInValue) + startValue
}

export const easeIn: EaseFn = (
  currentTime,
  startValue,
  changeInValue,
  duration) => {
  currentTime /= duration
  return Math.min(changeInValue * currentTime * currentTime * currentTime, changeInValue) + startValue
}

export const easeOut: EaseFn = (
  currentTime,
  startValue,
  changeInValue,
  duration) => {
  currentTime /= duration
  currentTime--
  return Math.min(changeInValue * (currentTime * currentTime * currentTime + 1), changeInValue) + startValue
}

export const easeInOut: EaseFn = (
  currentTime,
  startValue,
  changeInValue,
  duration) => {
  currentTime /= duration/2
  if (currentTime < 1) return Math.min(changeInValue/2 * currentTime * currentTime * currentTime, changeInValue) + startValue
  currentTime -= 2
  return Math.min(changeInValue/2 * (currentTime * currentTime * currentTime + 2), changeInValue) + startValue
}

export const getCurrentTime = (): number => (new Date()).valueOf()
