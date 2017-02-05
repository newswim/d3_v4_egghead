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
  .selectAll('g')          // 1. don't exist yet
  .data(scores)               // 2. merge, still no dom
  .enter()
    .append('g')               // 3. now there are dom elements
    .attr('transform', (d, i) => 'translate(0, ' + i * 33 + ')')

bar.append('rect')
    .style('width', d => d.score)
    .attr('class', 'bar')

bar.append('text')
  .text(d => d.name)
  .attr('y', 20)
  .attr('x', d => d.score - 75)