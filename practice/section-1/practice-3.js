function collect_same_elements(collection_a, object_b) {
  var result = [];
  collection_a.forEach(function(val) {
    var item = find_same_item(val,object_b.value);
    if(item){
      result.push(item);
    }
  })

  return result;
}

var find_same_item = function(item_a,item_b) {
  for(var x = 0; x < item_b.length; x++) {
    if(item_a === item_b[x]) {

      return item_a;
    }
  }
}
