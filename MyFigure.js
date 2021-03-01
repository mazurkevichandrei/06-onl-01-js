//-------------INITIAL CLASS FOR PROCESSING COORDINATES
class Figure{
  constructor(coordinates){
    this.coordinates=coordinates
  }
  showCoordinates(){
    let coorForShow=[]
    let xIndex=1
    let yIndex=1
    for(let i=0;i<this.coordinates.length;i++){
      if(i%2===0){
        coorForShow.push(`X${xIndex}=${this.coordinates[i]} `)
        xIndex++
      }
      else{
         coorForShow.push(`Y${yIndex}=${this.coordinates[i]} `)
         yIndex++
      }
    }
    return coorForShow
  }
  calcSquare(){
    const arrLen=this.coordinates.length
    let f=this.coordinates[arrLen-2]*this.coordinates[1]
    let s=this.coordinates[0]*this.coordinates[arrLen-1]
    let fpart=0
    let spart=0
    for(let i=0;i<arrLen-2;i+=2){
      fpart+=this.coordinates[i]*this.coordinates[i+3]
      spart+=this.coordinates[i+2]*this.coordinates[i+1]
    }
    // console.log(fpart)
    // console.log(spart)
    // console.log(f)
    // console.log(s)
    let figureSquare=0.5*((f+fpart)-(s+spart))
    console.log('Square of Figure: '+Math.abs(figureSquare))
  }
}
//-------------CIRCLE CLASS
class Circle extends Figure{
  constructor(coordinates,radius){
    super(coordinates)
    this.radius=radius
  }
  showCoordinates(figureParametre='Radius'){
    const extendCoor = super.showCoordinates()
    extendCoor.push(`${figureParametre}: ${this.radius}`)
    return extendCoor
  }
  calcSquare (){
    const PI = 3.14;
    console.log('Square of Circle: '+PI*this.radius**2)
  }
}
//-------------RECTANGLE CLASS
class Rectangle extends Figure{
  constructor(coordinates,width,height){
    super(coordinates)
    this.width=width
    this.height=height
  }
   showCoordinates(){
    const extendCoor = super.showCoordinates()
    extendCoor.push(`Width: ${this.width}, Height: ${this.height}`)
    return extendCoor
  }
  calcSquare(){
    console.log('Square of Rectangle: '+this.height*this.width)
  }
}
//-------------SQUARE CLASS
class Quadrate extends Circle{
    showCoordinates(){
      const extendCoor = super.showCoordinates('W/H')
      return extendCoor
    }
    calcSquare(){
      console.log('Square of Quadrate: '+this.radius**2)
    }
}

const fig = new Figure([1,7,6,6,7,7,8,15,9,0,15,325])
const cir = new Circle([5,5],10)
const rec = new Rectangle([7,7],40,20)
const squ = new Quadrate([8,8],15)
console.log('Figure: '+fig.showCoordinates())
fig.calcSquare()
console.log('Circle: '+cir.showCoordinates())
cir.calcSquare()
console.log('Rectangle: '+rec.showCoordinates())
rec.calcSquare()
console.log('Quadrate: '+squ.showCoordinates())
squ.calcSquare()