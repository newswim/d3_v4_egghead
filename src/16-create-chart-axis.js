var margin = { top: 30,  right: 20, bottom: 50, left: 40 };
var width = 425 - margin.right - margin.left
var height = 625 - margin.top - margin.bottom

var svg = d3.select('.chart')
  .append('svg')
    .attr('height', height + margin.top + margin.bottom)
    .attr('width', width + margin.right + margin.left)
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)

svg.append('rect')
  .attr('width', width)
  .attr('height', height)
  .attr('fill', 'lightblue')
  .attr('stroke', 'green')

var yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0])

var yAxis = d3.axisLeft(yScale)
svg.call(yAxis)
/*
D3 is going to create what it thinks is a reasonable number of ticks on the axis
If we want something different, we can specify that. ex:
       var yAxis = d3.axisLeft(yScale).ticks(5, '.2s')
will give us 2 decimal places.
*/
var xScale = d3.scaleTime()
  .domain([new Date(2016, 0, 1, 6), new Date(2016, 0, 1, 9)])
  .range([0, width])

var xAxis = d3.axisBottom(xScale)
  .ticks(5)             // can also use .tick(d3.timeMinute(45))
  .tickSizeInner(10)
  .tickSizeOuter(20)
  .tickPadding(15)

svg
  .append('g')
    .attr('transform', `translate(0, ${height})`)
  .call(xAxis)
