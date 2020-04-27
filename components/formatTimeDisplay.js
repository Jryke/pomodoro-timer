export default timeValsObj => {
  if (timeValsObj.minutes != null) {
    if (timeValsObj.seconds === null) return `${timeValsObj.minutes}:00`
    if (timeValsObj.seconds < 10)
      return `${timeValsObj.minutes}:0${timeValsObj.seconds}`
    return `${timeValsObj.minutes}:${timeValsObj.seconds}`
  }
  if (timeValsObj.seconds < 10) return `0:0${timeValsObj.seconds}`
  return `0:${timeValsObj.seconds}`
}
