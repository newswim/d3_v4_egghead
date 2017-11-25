console.log(`%c
Notes on Column Charts

We use a new type of scale, the Band scale. It has a few unique properties
which we'll also use.

.padding          -- Range of 0 to 1, pads the elements
.paddingInner     -- Range of 0 to 1, pads all of the inner elements
.paddingOuter     -- Range of 0 to 1, pads the outer elements
.align            -- Range of 0 to 1, 0 left-justifies set, 1 right-justifies

.bandwidth()      -- Helper function that returns width of band


`);

var data = [
  {score: 63, subject: 'Mathematics'},
  {score: 82, subject: 'Geography'},
  {score: 74, subject: 'Spelling'},
  {score: 97, subject: 'Reading'},
  {score: 52, subject: 'Science'},
  {score: 74, subject: 'Chemistry'},
  {score: 97, subject: 'Physics'},
  {score: 52, subject: 'ASL'}
];

var margin = { top: 10,  right: 20, bottom: 60, left: 40 };
var width = 400 - margin.right - margin.left
var height = 600 - margin.top - margin.bottom

var svg = d3.select('.chart')
  .append('svg')
    .attr('height', height + margin.top + margin.bottom)
    .attr('width', width + margin.right + margin.left)
    .call(responsivefy)
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)

var yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0])

var yAxis = d3.axisLeft(yScale)
svg.call(yAxis)

var xScale = d3.scaleBand()
  .padding(0.2)
  .domain(data.map(d => d.subject))
  .range([0, width])

var xAxis = d3.axisBottom(xScale)
  .ticks(5)
  .tickSize(10)
  .tickPadding(10)

svg
  .append('g')
    .attr('transform', `translate(0, ${height})`)
  .call(xAxis)
  .selectAll('text')
    .style('text-anchor', 'end')
    .attr('transform', 'rotate(-45)')

// perform data join
svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', d => xScale(d.subject))
  .attr('y', d => yScale(d.score))
  .attr('width', d => xScale.bandwidth())
  .attr('height', d => height - yScale(d.score))

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
