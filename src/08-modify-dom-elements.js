console.log(`%c

      Modifying DOM Elements with D3

Similar to jQuery, we can change the attributes of DOM elements. To do this,
use the .attr method.

ex:
%c
  var secondLink = d3.selectAll('a:nth-child(2)')

  secondLink.attr('href', 'http://www.google.com')

`, 'color: darkgreen;', 'color: rebeccapurple;');

console.log(`%c
In addition to other jQuery-like methods, there is a '.classed()' function
which will add or remove a class.
%c
d3.selectAll('a:nth-child(2)')
  .attr('href', 'http://www.google.com')
  .classed('red', true)

`, 'color: darkgreen;', 'color: rebeccapurple;');

console.log(`%c
Similarly, there's the .text() and .html() which alter the plain text and/or
html of the node, respectively.
%c
d3.selectAll('a:nth-child(2)')
  .attr('href', 'http://www.google.com')
  .classed('red', true)
  .html('Inventory <b>SALE!</b>')
`);

d3.selectAll('a:nth-child(2)')
  .attr('href', 'http://www.google.com')
  .classed('red', true)
  .html('Inventory <b>SALE!</b>')
