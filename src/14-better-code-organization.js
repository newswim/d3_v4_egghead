console.log(`%c
For this lesson we're going to get our pieces of d3 logic better organized.
To do that, we're going to use a method named < selection.call() >

Let's refactor our previous code to make it more readable.

`, 'color: darkgreen;');


var scores = [
  { name: 'Alice', score: 96 },
  { name: 'Billy', score: 83 },
  { name: 'Cindy', score: 91 },
  { name: 'David', score: 96 },
  { name: 'Emily', score: 88 }
];

var bar = d3.select('.chart')
  .append('svg')
    .style('width', 250)
    .style('height', 300)
  .selectAll('g')
  .data(scores)
  .enter()
    .append('g')
    .attr('transform', (d, i) => 'translate(0, ' + i * 33 + ')')

function scaleBar (selection, scale) {
  selection.style('transform', 'scaleX(' + scale + ')')
}

function fade (selection, opacity) {
  selection.style('fill-opacity', opacity)
}

function setFill (selection, fill) {
  selection.style('fill', fill)
}

bar.append('rect')
    .style('width', d => d.score)
    .attr('class', 'bar')
    .on('mouseover', function (d, i, elements) {   // don't want auto-binding
      d3.select(this)
        .call(scaleBar, 2)
        .call(setFill, 'orange')

      d3.selectAll(elements)
        .filter(':not(:hover)')
        .call(fade, 0.5)
    })
    .on('mouseout', function(d, i, elements) {
      d3.select(this)
        .call(scaleBar, 1)
        .call(setFill, 'lightgreen')

      d3.selectAll(elements)
        .call(fade, 1)
    })

bar.append('text')
  .text(d => d.name)
  .attr('y', 20)
