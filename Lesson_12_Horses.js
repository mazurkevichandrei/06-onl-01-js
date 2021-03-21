function randTime() {
    let time = Math.ceil(Math.random() * 5)
    return time
}
function horse(name, func) {
    let myPromise = new Promise(function(res, rej) {
        setTimeout(function() {
            res(`Horse ${name} finished in ${func()} seconds`)
        }, 2000)
    })
    return myPromise
}
let horses = ['Tim', 'Nik', 'Kim']
for (i = 0; i < horses.length; i++) {
    let newHorse = horse(horses[i], randTime);
    newHorse.then(function(data) {
        console.log(data)
    })
}