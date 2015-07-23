function count_same_elements(collection) {
  var result = [];
  var temp = [];
  var arr_count = {};
  collection.forEach(function(val) {
    if (val.indexOf('-') > -1) {
      temp.push({name: val.charAt(0), summary: parseInt(val.slice(2))});
    }
    else if(val.indexOf('[') > -1){
      temp.push({name: val.charAt(0), summary: parseInt(val.slice(2))});
    }
    else if(val.indexOf(':') > -1){
      temp.push({name: val.charAt(0), summary: parseInt(val.slice(2))});
    }
    else {
      temp.push({name: val.charAt(0), summary: 1});
    }
  })
  console.log(temp);
  temp.forEach(function(item) {
    arr_count[item.name] = arr_count[item.name] ? arr_count[item.name] + item.summary : item.summary;
  })

  for (var symbol in arr_count) {
    result.push({name: symbol,summary: arr_count[symbol]});
  }
  return result;
}
