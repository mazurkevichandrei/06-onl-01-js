const data = [
    {
        product: 'Молоко',
        price: 40,
        count: 2
    },{
        product: 'Картошка',
        price: 14,
        count: 10
    },{
        product: 'Минералка',
        price: 29,
        count: 2
    },{
        product: 'Хлеб',
        price: 19,
        count: 1
    },{
        product: 'Конфеты',
        price: 11,
        count: 15
    },
];
let availableSum=prompt('Введите доступную сумму:')
let amountPerDay=0;
let days=0;
let remainAmount=0;
//Для проверки поля на присутствие символов отличных от числа:
//let checkMask=/\D/g;
let check=availableSum.match(/\D/g);
//

if(availableSum=='' || check!=null){
    alert('Вы не ввели сумму или указали неверный формат!')
}
else{
    for (var productItem of data){
        let amountItem=productItem.price*productItem.count
        amountPerDay=amountPerDay+amountItem
    }

    days=Math.floor(availableSum/amountPerDay);
    remainAmount=availableSum-(amountPerDay*days);
//console.log(days.slice(1))

    if (parseInt(days.toString().slice(-2)) > 9 && parseInt(days.toString().slice(-2)) < 21){
        var daysWriting = ' дней'
    }else{
        switch(parseInt(days.toString().slice(-1))){
            case parseInt((days.toString()).match(/[1]$/)):
                var daysWriting = ' день';
                break;
            case parseInt((days.toString()).match(/[2,3,4]$/)):
                var daysWriting = ' дня';
                break;
            default:
                var daysWriting = ' дней'
        }
    }
    alert('Семья сможет прожить на указанную сумму ' + days + daysWriting);
    if (parseInt(remainAmount.toString().slice(-2)) > 9 && parseInt(remainAmount.toString().slice(-2)) < 21){
        var amountWriting = ' рублей'
    }else{    
        switch(parseInt(remainAmount.toString().slice(-1))){
            case parseInt((remainAmount.toString()).match(/[1]$/)):
                var amountWriting = ' рубль';
                break;
            case parseInt((remainAmount.toString()).match(/[2,3,4]$/)):
                var amountWriting = ' рубля';
                break;
            default:
                var amountWriting = ' рублей'
        }
    }
    alert('Остаток: ' + remainAmount + amountWriting);
}
