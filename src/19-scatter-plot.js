/*
The idea with this one is to create graphics containers for our circle elements
as well as the text elements within them.
*/

var margin = { top: 10,  right: 20, bottom: 30, left: 40 };
var width = 400 - margin.right - margin.left
var height = 565 - margin.top - margin.bottom

var svg = d3.select('.chart')
  .append('svg')
    .attr('height', height + margin.top + margin.bottom)
    .attr('width', width + margin.right + margin.left)
    .call(responsivefy)
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)

d3.json('../data/country_data.json', function (err, data) {
  var yScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.expectancy))
    .range([height, 0])
    .nice()

  var yAxis = d3.axisLeft(yScale)
  svg.call(yAxis)

  var xScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.cost))
    .range([0, width])
    .nice()                         // causes axis to end on more round numbers

  var xAxis = d3.axisBottom(xScale)
    .ticks(5)
    .tickPadding(10)

  // container element
  svg
    .append('g')
      .attr('transform', `translate(0, ${height})`)
    .call(xAxis)

  var rScale = d3.scaleSqrt()
    .domain([0, d3.max(data, d => d.population)])
    .range([0, 40])

  var circles = svg
    .selectAll('.ball')
    .data(data)
    .enter()
    .append('g')
    .attr('class', 'ball')
    .attr('transform', d => {
      return `translate(${xScale(d.cost)}, ${yScale(d.expectancy)})`
    })

  circles
    .append('circle')
    .attr('cx', 0)
    .attr('cy', -4)
    .attr('r', d => rScale(d.population))
    .style('fill', 'steelblue')
    .style('fill-opacity', 0.5)

  // labels
  circles
    .append('text')
    .style('text-anchor', 'middle')
    .style('fill', 'black')
    .text(d => d.code)

})


function responsivefy(svg) {
  // get container + svg aspect ratio
  var container = d3.select(svg.node().parentNode),
      width = parseInt(svg.style("width")),
      height = parseInt(svg.style("height")),
      aspect = width / height;

  // add viewBox and preserveAspectRatio properties,
  // and call resize so that svg resizes on inital page load
  svg.attr("viewBox", "0 0 " + width + " " + height)
      .attr("preserveAspectRatio", "xMinYMid")
      .call(resize);

  // to register multiple listeners for same event type,
  // you need to add namespace, i.e., 'click.foo'
  // necessary if you call invoke this function for multiple svgs
  // api docs: https://github.com/mbostock/d3/wiki/Selections#on
  d3.select(window).on("resize." + container.attr("id"), resize);

  // get width of container and resize svg to fit it
  function resize() {
      var targetWidth = parseInt(container.style("width"));
      svg.attr("width", targetWidth);
      svg.attr("height", Math.round(targetWidth / aspect));
  }
}
