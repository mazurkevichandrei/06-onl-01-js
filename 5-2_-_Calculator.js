var arr1 = [1,2,3,10,'n',1,'num'] //expected 17
var arr2 = [1,2,'3'] //expected 3
var arr3 = ['str','10',1,5,0] //expected 6

function calc (data){
  let total = 0
  for(var item of data){
    if(typeof(item) === 'number'){
    total += item
    }
  }
  return(console.log('Total: ' + total))
}

calc(arr1)
calc(arr2)
calc(arr3)