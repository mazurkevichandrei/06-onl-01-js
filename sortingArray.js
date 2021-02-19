//Fill Random Function
function fillArrayRandom(arrLenght){
  let newArr = []
  let i=0;
  while(i<arrLenght){
    let rnd=Math.ceil(Math.random()*10)
    const found = newArr.find(item => rnd === item)
    if(found===undefined){
      newArr.push(rnd)
      i++}
  }
  return(newArr)
}

//Sorting Function
function sortingArray(arrName){
let n=0;
let minValue=arrName[0]
while(n<arrName.length){
  let m=n
  while(m<arrName.length){
    if(arrName[m]<minValue){
      minValue=arrName[m]
      temp=arrName[n]
      arrName[n]=minValue
      arrName[m]=temp
    }m++ 
  }      
  n++
  minValue=arrName[n]
}
return(arrName)
}

let arr = fillArrayRandom(7); //<=10
console.log(arr)
console.log(sortingArray(arr))