// 1. Mapping from Abstract Data Values to a Visual Representation

// takes: a continuous input domain
// maps to: a continuous output range, while maintaining proportions
var linearScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, 600])
  .clamp(true);      // < clamp > :: ensures values stay within range

console.log(linearScale(0))
console.log(linearScale(50)) // halfway point of our input domain
console.log(linearScale(100))
console.log(linearScale(105))      // clamp causes return of the max val 600

console.log(linearScale.invert(300))   // returns 50, invert maps range -> domain
