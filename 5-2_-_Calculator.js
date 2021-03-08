let arr1 = [1,2,3,10,'n',1,'num'] //expected 17
let arr2 = [1,2,'3'] //expected 3
let arr3 = ['str','10',1,5,0] //expected 6

function calc (data){
  let total = 0
  for(var item of data){
    if(typeof(item) === 'number'){
    total += item
    }
  }
  return('Total: ' + total)
}

console.log(calc(arr1))
console.log(calc(arr2))
console.log(calc(arr3))
