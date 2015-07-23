function collect_same_elements(collection_a, collection_b) {
  var result = [];
  collection_a.forEach(function(val) {
    var item = find_same_item(val,collection_b);
    if(item){
      result.push(item);
    }
  })

  return result;
}

var find_same_item = function(item_a,collection_b) {
  for(var x = 0; x < collection_b.length; x++) {
    var symbol = find_same_symbol(item_a,collection_b[x])
    if(symbol) {

      return item_a;
    }
  }
}

var find_same_symbol = function(symbol_a,symbol_b) {
  for (var y = 0; y < symbol_b.length; y++) {
    if (symbol_a === symbol_b[y]) {

      return symbol_a;
    }
  }
}