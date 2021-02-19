let str = 'Hello'
console.log(str)

function changeDirection(initStr){
  strToArr=initStr.split('')
  let resultArr=[]
  strToArr.forEach(function(item,i,arr){
    resultArr.push(arr[arr.length-i-1])
  })
  return(resultArr.join(''))
}

console.log(changeDirection(str))
