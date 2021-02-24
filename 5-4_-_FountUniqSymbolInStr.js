var str = 'nNaAcFd' //c
var arr = str.toUpperCase().split('')
const LEN=arr.length
let arrProcessed=arr.slice()
//console.log(arrProcessed)
for (let i = 0; i<LEN; i++){
  // console.log('Deleted: '+ arr[i])
  delete arrProcessed[i]
  if(arrProcessed.includes(arr[i])){
    //console.log(arr[i] + ' - not uniq')
    }
   else {console.log(arr[i] + ' - First uniq symbol in string'); break}
  //console.log(arrProcessed)
  arrProcessed[i]=arr[i]
}
console.log(str)