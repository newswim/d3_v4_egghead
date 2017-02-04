console.log(`%c
          Load and Inspect Data

D3 has a few methods for loading different types of data locally. We're going
to look at three of them: .json, .csv, and .tsv

`, 'color: darkgreen;');

d3.json('../data/data.json', function (data) {
  var extent = d3.extent(data, function (d) {
    return d.age
  })
  console.log(extent)

  var scale = d3.scaleLinear()
    .domain(extent)
    .range([0, 600])
    // .clamp(true)
  console.log(scale(52));

  // Get unique valies:
  var ages = d3.set(data, function (d) {
    return d.age
  })
  console.log(ages.values())
})

console.log(`
  d3.min
  d3.max
  d3.extent
  `);
