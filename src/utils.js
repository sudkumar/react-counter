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
  return changeInValue * currentTime / duration + startValue
}

export const easeIn: EaseFn = (
  currentTime,
  startValue,
  changeInValue,
  duration) => {
  currentTime /= duration
  return changeInValue * currentTime * currentTime * currentTime + startValue
}

export const easeOut: EaseFn = (
  currentTime,
  startValue,
  changeInValue,
  duration) => {
  currentTime /= duration
  currentTime--
  return changeInValue * (currentTime * currentTime * currentTime + 1) + startValue
}

export const easeInOut: EaseFn = (
  currentTime,
  startValue,
  changeInValue,
  duration) => {
  currentTime /= duration/2
  if (currentTime < 1) return changeInValue/2 * currentTime * currentTime * currentTime + startValue;
  currentTime -= 2
  return changeInValue/2 * (currentTime * currentTime * currentTime + 2) + startValue
}

export const getCurrentTime = (): number => (new Date()).valueOf()