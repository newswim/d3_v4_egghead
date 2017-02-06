console.log(`%c
In the D3 margin convention, you create an object called < margin > and give
it three properties: top, right, bottom and left.
%c
var margin = { top: 0, right: 0, bottom: 0, left: 0 }
%c
Then, we create variables for <width> and <height> which take the original
values (in this case 425 and 625), and subtract the margins.
%c
var width = 425 - margin.right - margin.left
var height = 625 - margin.top - margin.bottom
%c
Then, we add back in the width and height variables, ADDING back also the margins.
%c
var svg = d3.select('.chart')
  .append('svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
%c
Lastly, we need to create a new element which will contain the rest of the
visualization, making use of the specified margins.

See line 38.

`, 'color: darkgreen;', 'color: rebeccapurple;'
, 'color: darkgreen;', 'color: rebeccapurple;'
, 'color: darkgreen;', 'color: rebeccapurple;'
, 'color: darkgreen;');

var margin = { top: 25, right: 25, bottom: 25, left: 25 }
var width = 425 - margin.right - margin.left
var height = 625 - margin.top - margin.bottom

var svg = d3.select('.chart')
  .append('svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)

svg.append('rect')
  .attr('width', width / 2)
  .attr('height', height)
  .style('fill', 'lightblue')
  .style('stroke', 'green')

// demonstrate that margins are respected by appending another rect

  svg.append('rect')
    .attr('x', width / 2)
    .attr('width', width / 2)
    .attr('height', height)
    .style('fill', 'lightblue')
    .style('stroke', 'green')
