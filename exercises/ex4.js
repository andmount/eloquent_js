function range(start, end) {
  range_array = [];

  for (i = start; i <= end; i++) {
    range_array.push(i); 
  }
  return range_array;
}

console.log(range(5, 17));