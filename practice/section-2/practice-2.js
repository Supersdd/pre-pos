function count_same_elements(collection) {
  var result = [];
  var temp = [];
  var arr_count = {};
  collection.forEach(function(val) {
    if (val.indexOf('-') > -1){
      temp.push({key: val.charAt(0), count: parseInt(val.slice(2))});
    }
    else {
      temp.push({key: val.charAt(0), count: 1});
    }
  })
  temp.forEach(function(item) {
    arr_count[item.key] = arr_count[item.key] ? arr_count[item.key] + item.count : item.count;
  })
  for (var symbol in arr_count){
    result.push({key: symbol,count: arr_count[symbol]});
  }
  return result;
  }

