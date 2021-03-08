function ProcessingArr(data){
  this.data=data
  this.len = () => console.log('Elements in initial array: ' + this.data.length);
  this.symCount = function(){
    var countSymbols = []
    for(let item of this.data){
      countSymbols.push(item.length)
    }
    console.log(countSymbols)
  };
  this.arrToString = () => console.log(this.data.join(', '));
}

var arr = new ProcessingArr (['Hello','I`m','User','!'])

arr.len();
arr.symCount();
arr.arrToString()
