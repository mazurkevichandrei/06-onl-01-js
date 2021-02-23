function ProcessingArr(data){
  this.len = () => console.log('Elements in initial array: ' + data.length);
  this.symCount = function(){
    var countSymbols = []
    for(let item of data){
      countSymbols.push(item.length)
    }
    console.log(countSymbols)
  };
  this.arrToString = () => console.log(data.join(', '));
}

var arr = new ProcessingArr (['Hello','I`m','User','!'])

arr.len();
arr.symCount();
arr.arrToString()