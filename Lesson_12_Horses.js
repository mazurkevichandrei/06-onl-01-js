function randomTime() {
    let time = Math.ceil(Math.random() * 5)
    return time
}
function createHorse(name, timeFunc) {
    let myPromise = new Promise(function(res, rej) {
        setTimeout(function() {
            res(`Horse ${name} finished in ${timeFunc()} seconds`)
        }, 2000)
    })
    return myPromise
}
let horses = ['Tim', 'Nik', 'Kim']
for (i = 0; i < horses.length; i++) {
    let newHorse = createHorse(horses[i], randomTime);
    newHorse.then(function(data) {
        console.log(data)
    })
}
