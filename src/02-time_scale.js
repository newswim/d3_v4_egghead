var timeScale = d3.scaleTime()
  .domain([new Date(2016, 0, 1), new Date()])
  .range([0, 100])


console.log(timeScale(new Date(2016, 5, 15)));
// > 41.531075778962936

/*
  D3 allows us to convert from numeric values to time scales,
  using the same concepts of domain and range mapping.

  To find a halfway point between two dates, which might prove
  difficult using a brute force method, we can use the `invert`
  property and supply a halfway point within the number range,
  in this case (50) since our range extends from 0 to 100.

*/

console.log(timeScale.invert(50))
// > Mon Jul 18 2016 20:12:16 GMT-0500 (CDT)
