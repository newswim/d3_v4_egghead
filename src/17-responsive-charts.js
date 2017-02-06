var margin = { top: 10,  right: 20, bottom: 30, left: 40 };
var width = 400 - margin.right - margin.left
var height = 600 - margin.top - margin.bottom

var svg = d3.select('.chart')
  .append('svg')
    .attr('height', height + margin.top + margin.bottom)
    .attr('width', width + margin.right + margin.left)
    .call(responsivefy)
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

var xScale = d3.scaleTime()
  .domain([new Date(2016, 0, 1, 6), new Date(2016, 0, 1, 9)])
  .range([0, width])

var xAxis = d3.axisBottom(xScale)
  .ticks(5)
  .tickPadding(10)

svg
  .append('g')
    .attr('transform', `translate(0, ${height})`)
  .call(xAxis)

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
