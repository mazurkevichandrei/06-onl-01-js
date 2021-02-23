function ProcessingArr(){
  console.log('Elements in initial array: ' + this.data.length)
  this.symCount = function(){
    var countSymbols = []
    for(let item of this.data){
      countSymbols.push(item.length)
    }
    console.log(countSymbols)
  };
  this.symCount()
  console.log(this.data.join(', '));
}

var arr={
  data: ['Hello','I`m','User']
  }
var arr2={
  data: ['This','is','new','array']
}

ProcessingArr.call(arr)
ProcessingArr.call(arr2)
