function create_updated_collection(collection_a, object_b) {
  var result = [];
  var temp1 = [];
  var temp2 = [];
  var collection_c = {};
  collection_a.forEach(function(val) {
    if(val.indexOf('-') > -1) {
      temp1.push({key: val.charAt(0), count: parseInt(val.slice(2))});
    }
    else {
      temp1.push({key: val.charAt(0), count: 1});
    }
  })
  temp1.forEach(function(item) {
    collection_c[item.key] = collection_c[item.key] ? collection_c[item.key] + item.count : item.count;
  })
  for (var x in collection_c) {
    temp2.push({key: x,count: collection_c[x]});
  }
  temp2.forEach(function(mark) {
    var symbol = find_same_symbol(mark,object_b.value);
    if(symbol) {
      result.push({key: symbol.key,count: symbol.count - parseInt(symbol.count / 3)});
    }
    else {
      result.push({key: mark.key,count: mark.count});
    }
  })
  return result;
}

var find_same_symbol = function(item_a,item_b) {
  for(var i = 0; i<item_b.length; i++) {
    if(item_a.key === item_b[i]) {
      return item_a;
    }
  }
}