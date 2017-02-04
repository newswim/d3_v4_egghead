console.log(`%c
       Creating Labels from Numeric Data with Quantize Scales

We looked at Continuous Scale in the first example, which maps values
to a given range -- but what if we want to map an input to a discreet
set of output values?

%c    /* 04-quantize_scale.js */

var quantizeScale = d3.scaleQuantize()
    .domain([0, 100])
    .range([0, 600])

`, 'color: darkgreen;', 'color: rebeccapurple;')

var quantizeScale = d3.scaleQuantize()
    .domain([0, 100])
    .range([0, 600])

console.log(`console.log(quantizeScale(22))`);
console.log(quantizeScale(22))
// > 0

console.log(`%c       Why did this happen?

Quantized Scale is based on the cardinality of the output range (number of items).
It essentially breaks the domain into that many uniformly sized pieces, so for
example, %c

  Domain = 0, 100
  input  = 22
  output = 0

%c  The output maps to 0, because 22 is closer to 0 than 100

`, 'color: darkgreen;', 'color: blue;', 'color: darkgreen;')

console.log(`console.log(quantizeScale(76))`);
console.log(quantizeScale(76))
// > 600

console.log(`%c
Likewise, an input value of 76 will yield an output of 600. This is because
the input is closer to the maximum range, 100, than the minimum (0).
`, 'color: darkgreen;')

console.log(`%c
Inputs can also be quantized to a range of colors, which is common in D3.
`, 'color: darkgreen;');

console.log(`%c
var quantizeScale = d3.scaleQuantize()
    .domain([0, 100])
    .range(["red", "green"])
`, 'color: rebeccapurple;');

var quantizeColorScale = d3.scaleQuantize()
    .domain([0, 100])
    .range(["red", "white", "green"])

console.log(`
console.log(quantizeColorScale(20));
console.log(quantizeColorScale(50));
console.log(quantizeColorScale(80));
console.log(quantizeColorScale(99));
`);

console.log(quantizeColorScale(20));
console.log(quantizeColorScale(50));
console.log(quantizeColorScale(80));
console.log(quantizeColorScale(99));

console.log(`%c
Now, instead of the .invert() method, scaleQuantize has .invertExtent

This property returns a range which are essentially 'breakpoints' that
indicate the exact numerical point at which a value gets mapped to one
member of the range, over another.

For example:
`, 'color: darkgreen;');

console.log('console.log(quantizeColorScale.invertExtent("white"))');
console.log(quantizeColorScale.invertExtent("white"))
