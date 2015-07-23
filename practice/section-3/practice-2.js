function create_updated_collection(collection_a, object_b) {
  var result = [];
  for(var x = 0; x < collection_a.length; x++){
    var item = find_same_item(collection_a[x],object_b.value);
    if(item) {
      result.push({key: item.key, count: item.count - parseInt(item.count / 3)});
    }
    else {
      result.push({key: collection_a[x].key, count: collection_a[x].count});
    }
  }
  return result;
}

var find_same_item = function(item_a,item_b) {
  for (var i = 0; i < item_b.length; i++) {
    if(item_a.key === item_b[i]) {
      return item_a;
    }
  }
}
