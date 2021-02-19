let str = 'Hello'
strToArr=str.split('')
console.log(strToArr)
resultArr=[]

strToArr.forEach(function(item,i,arr){
  resultArr.push(arr[arr.length-i-1])
})
console.log(resultArr)