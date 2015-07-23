function count_same_elements(collection) {
  var result = [];
  var array_counts = {};
  collection.forEach(function(val) {
    array_counts[val] = array_counts[val] ? array_counts[val] + 1: 1;
  })
  for (var item in array_counts){
    result.push({key:item,count:array_counts[item]});
  }
  return result;
}