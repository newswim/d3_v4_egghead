console.log(`%c
        Creating Labels from Non-numeric Data with Ordinal Scales

While a Quantize Scale will map a continuous domain to a discreet range,
sometimes you will want to have specific values in the Domain that should
be mapped to specific values in the output range.

%c    /* 05-ordinal_scale.js */

var ordinalScale = d3.scaleOrdinal()
    .domain(["poor", "good", "great"])
    .range(["red", "white", "green"])

`, 'color: darkgreen;', 'color: rebeccapurple;')

var ordinalScale = d3.scaleOrdinal()
    .domain(["poor", "good", "great"])
    .range(["red", "white", "green"])

console.log('ordinalScale("great")');
console.log('ordinalScale("good")');
console.log('ordinalScale("poor")');
console.log(ordinalScale("great"));
console.log(ordinalScale("good"));
console.log(ordinalScale("poor"));

console.log(`%c

This is handy for when you need to map input values to Non-numeric
output valies.

`, 'color: darkgreen;');
