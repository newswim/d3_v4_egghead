console.log(`%c
              Start Visualizing Data Driven Documents

DATA JOINS

The Venn Diagram diagram of...

      ----   Selections ----

Enter       Data, but no DOM selection
Update      Both data and elements
Exit        Only elements, no data


`, 'color: darkgreen;');

var scores = [
  { name: 'Alice', score: 96 },
  { name: 'Billy', score: 83 },
  { name: 'Cindy', score: 91 },
  { name: 'David', score: 96 },
  { name: 'Emily', score: 88 }
];

var update = d3.select('.chart')
  .selectAll('div')
  // ..merge data with selection
  .data(scores, function (d) {            // second argument :: key ::
    return d ? d.name : this.innerText;   // d3 will use this to check for existing data
  })
  .style('color', 'blue')

var enter = update.enter()       // enter the DATA, there are no dom elements at this point
  .append('div')           // create a div for each data that doesn't already have an element
  .text(function (d) {
    return d.name
  })
  .style('color', 'green')

update.exit().remove();        // we're just removing the elements with no data

update.merge(enter)
  .style('width', d => d.score + 'px')
  .style('height', '50px')
  .style('background', 'lightgreen')
  .style('border', '1px solid black')


// Useful links
// https://bost.ocks.org/mike/join/
// https://bl.ocks.org/mbostock/3808218 -- General Update Pattern, I
