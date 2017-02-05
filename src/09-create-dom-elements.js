console.log(`%c
                        Creating DOM Elements

D3 has a method for appending nodes to another node or nodeList -- .append()
%c
  d3.select('.title')
    .append('button')
      .html('<b>Sale!</b>')
%c
A few things to note about that --

1.) .append will change _which element_ is currently selected
2.) it's a convention in D3 to indent again after changing a node selection
      within in a given chain.

`,
'color: darkgreen;','color: rebeccapurple;', 'color: darkgreen;');

// d3.select('.title')
//   .append('button')
//     .html('<b>Sale!</b>')

console.log(`%c
We can use another method, called 'insert'. Rather than append, which adds an
element to the end of a nodeList, insert can take a 2nd argument, {before}
%c
  d3.select('title')
    .insert('button'%c, 'a:nth-child(2)'%c)
      .html('<b>SALE</b>')
%c
Also, we can continue to chain append/insert methods, styling or otherwise
modifying them, and passing the selector along as the nodes are created. It's
helpful to use a smart indention practice, to help distinguish between elements.
%c
  d3.select('title')
    .append('div')
      .style('color', 'red')
      .html('Inventory <b>SALE</b>')
    .insert('button')
      .style('display', 'block')
      .text('submit')

`,
'color: darkgreen', 'color: rebeccapurple;', 'color: darkred;', 'color: rebeccapurple;', 'color: darkgreen;', 'color: rebeccapurple;');

d3.select('.title')
  .append('div')
    .style('color', 'red')
    .html('Inventory <b>SALE</b>')
  .insert('button')
    .style('display', 'block')
    .text('submit')

console.log(`%c
--------------------------------
Removing Elements with .remove()
--------------------------------
%c
  d3.select('.action').remove()
`,
'color: darkgreen', 'color: rebeccapurple;');

d3.select('.action').remove()
