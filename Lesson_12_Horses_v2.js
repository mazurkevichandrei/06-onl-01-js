function randTime() {
    let time = Math.ceil(Math.random() * 5)
    return time
}
async function horse(name, func) {
  return (`Horse ${name} finished in ${func()} seconds`)
}
let horses = ['Tim', 'Nik', 'Kim']
for (i = 0; i < horses.length; i++) {
    let newHorse = horse(horses[i], randTime);
    newHorse.then(function(data) {
        console.log(data)
    })
}