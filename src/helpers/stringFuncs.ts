export const setZero = (numChar: string) => {
  return Number(numChar) > 9 ? numChar : "0" + numChar
}
