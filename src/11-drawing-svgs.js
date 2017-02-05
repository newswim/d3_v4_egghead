var scores = [
  { name: 'Alice', score: 96 },
  { name: 'Billy', score: 83 },
  { name: 'Cindy', score: 91 },
  { name: 'David', score: 96 },
  { name: 'Emily', score: 88 }
];

d3.select('.chart')
  .append('svg')
    .style('width', 250)
    .style('height', 300)
  .selectAll('rect')          // 1. don't exist yet
  .data(scores)               // 2. merge, still no dom
  .enter()
    .append('rect')           // 3. now there are dom elements
    .attr('y', (d, i) => i * 33)
    .style('width', d => d.score)
    .text(d => d.name)
    .attr('class', 'bar')
