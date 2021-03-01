//-------------INITIAL CLASS FOR PROCESSING COORDINATES
class Figure{
  constructor(coordinates){
    this.coordinates=coordinates
  }
  showCoordinates(){
    let coorForShow=[]
    for(let i=0;i<this.coordinates.length;i++){
      if(i%2===0){
        coorForShow.push(`X:${this.coordinates[i]} `)
      }
      else{
         coorForShow.push(`Y:${this.coordinates[i]} `)
      }
    }
    return coorForShow
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
}
//-------------SQUARE CLASS
class Square extends Circle{
    showCoordinates(){
      const extendCoor = super.showCoordinates('W/H')
      return extendCoor
    }
}

const fig = new Figure([2,1,5,9,10,15])
const cir = new Circle([5,5],20)
const rec = new Rectangle([7,7],10,20)
const squ = new Square([8,8],15)
console.log('Figure: '+fig.showCoordinates())
console.log('Circle: '+cir.showCoordinates())
console.log('Rectangle: '+rec.showCoordinates())
console.log('Square: '+squ.showCoordinates())