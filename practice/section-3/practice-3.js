function create_updated_collection(collection_a, object_b) {
  var result = [];
  var temp = [];
  var collection_c = {};
  collection_a.forEach(function(val) {
    collection_c[val] = collection_c[val] ? collection_c[val] + 1 : 1;
  })
  for (var item in collection_c) {
    temp.push({key: item,count: collection_c[item]});
  }
  temp.forEach(function(item) {
    var symbol = find_same_symbol(item,object_b.value);
    if(symbol) {
      result.push({key: symbol.key,count: symbol.count - parseInt(symbol.count / 3)});
    }
    else {
      result.push({key: item.key,count: item.count});
    }
  })
  return result;
}

var find_same_symbol = function(item_a,item_b) {
  for (var i = 0; i < item_b.length; i++) {
    if (item_a.key === item_b[i]) {
      return item_a;
    }
  }
}