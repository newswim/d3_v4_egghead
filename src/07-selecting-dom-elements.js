console.log(`%c
      Selecting DOM Elements

d3.select(el)     -- Selects the first element matching the identifier
d3.selectAll(el)  -- Selects all elements matching indentifier

the < .select > method is chainable.

ex:
%c
var div = d3.select('div')
var links = div.selectAll('a')
console.log(div);
console.log(links)
`, 'color: darkgreen;', 'color: rebeccapurple')

var div = d3.select('div')
console.log("console.log(div.nodes());");
console.log(div.nodes());
var links = div.selectAll('a')
console.log("console.log(links.nodes());");
console.log(links.nodes());

console.log(`%c
    It's worth noting that the second call, < div.selectAll('a') >, will search
    only the child nodes of < div >.

    Also, it's optional to use the CSS selector syntax.

    For example:

          var links = d3.selectAll('div a')

`, 'color: darkgreen;');

console.log(`%c
---------------------------------------
Select Using Classes and Pseudo-Classes
---------------------------------------

Also valid:

%cvar navLinks = d3.selectAll('.nav--link')
`, 'color: darkgreen;', 'color: rebeccapurple;')

var navLinks = d3.selectAll('.nav--link')
console.log("console.log(navLinks)");
console.log(navLinks.nodes())

console.log(`%c
Or, using a psuedo-selector:

%cvar secondLink = d3.select('.nav--link:nth-child(2)')
`, 'color: darkgreen;', 'color: rebeccapurple;');

var secondLink = d3.select('.nav--link:nth-child(2)')
console.log("console.log(secondLink).nodes();");
console.log(secondLink.nodes());

console.log(`
-----------------------
Using Native Selectors
-----------------------

Finally, a D3 select function will accept a valid group of nodes from
any of the built-in element selecting methods. For example:
%c
  var nativeLinks = d3.selectAll(document.links);

`, 'color: darkgreen;', 'color: rebeccapurple;');

var nativeLinks = d3.selectAll(document.links);

console.log("console.log(nativeLinks).nodes();");
console.log(nativeLinks.nodes());

console.log(`%c
D3 also has a .size() method for node lists.
`, 'color: darkgreen;');

console.log("console.log(nativeLinks).size();");
console.log(nativeLinks.size());
