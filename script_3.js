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
let checkMask=/\D/g;
let check=availableSum.match(checkMask);
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
    alert('Семья сможет прожить на указанную сумму ' + days + ' дней!');
    remainAmount=availableSum-(amountPerDay*days);
    alert('Остаток: ' + remainAmount +' рублей!');
}
