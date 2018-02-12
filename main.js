console.log('Ready!');
console.log('');
console.log('');
console.log('test 1');
console.log('----------------------------------------------------------------');
console.log('Создай 10 кнопок с помощью цикла js, в этом же цикле нужно повесить обработчик на каждую кнопку. При нажатии на кнопку должен всплывать alert с порядковым номером кнопки.');
console.log('----------------------------------------------------------------');

(() => {
let body = document.querySelector('body');
for (let index = 1; index <= 10; index++) {
    let btn = document.createElement('button');
    btn.innerHTML = index;

    btn.addEventListener('click', function() {
        alert(index);
    })

    body.appendChild(btn);
}
})();

console.log('');
console.log('');
console.log('test 2');
console.log('----------------------------------------------------------------');
console.log('Создай объект и запиши его в const, попытайся изменить и заменить этото объект.');
console.log('----------------------------------------------------------------');
(() => {
const user = {
    name: 'John',
    surname: 'Smith'
}
console.log(user);

user.name = 'Mike';
console.log(user);

// user = { // error
//     name: 'Mike',
//     surname: 'Smith'
// }
})();

console.log('');
console.log('');
console.log('test 3');
console.log('----------------------------------------------------------------');
console.log('Создай функцию принимающую числа (неограниченное кол-во) возвращающую сумму этих чисел. Сложи с помощью этой функции массив чисел.');
console.log('----------------------------------------------------------------');
(() => {
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// possibility 1
function sum(ArrayNam) {
    console.log(`amount = ${ ArrayNam.reduce((prev, next) => prev += next) }`);
}
sum(numbers);

// possibility 2
function sum2(...rest) {
    console.log(`amount = ${ rest.reduce((prev, next) => prev += next) }`);
}
sum2(...numbers);
})();

console.log('');
console.log('');
console.log('test 4');
console.log('----------------------------------------------------------------');
console.log('Создай функцию получающую неограниченное кол-во аргументов, в теле функции выведи каждый аргумент в консоль.');
console.log('----------------------------------------------------------------');
(() => {
    console.log('test 4');
console.log('---------------------------------------');

let arr = ['pear', 'apple', 'banana'];

function something(...rest) {
    rest.forEach( (item) => console.log(item) );
}
something('pear', 'apple', 'banana', 42);
// or
something(...arr, 42);
})();

console.log('');
console.log('');
console.log('test 5');
console.log('----------------------------------------------------------------');
console.log('Создай функцию принимающую 2 параметра, задай этим параметрам дефолтные значения.');
console.log('----------------------------------------------------------------');
(() => {
function sum(a = 2, b = 2) {
    console.log(a + b);
}
sum(2, 2);
sum(5, 5);
sum(3);
})();

console.log('');
console.log('');
console.log('test 6');
console.log('----------------------------------------------------------------');
console.log('Сложи массив чисел с помощью reduce.');
console.log('----------------------------------------------------------------');
(()=> {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(`arr = ${arr}`);
    console.log(`sum =  ${arr.reduce( (prev, next) => prev += next)}`);
})();

console.log('');
console.log('');
console.log('test 7');
console.log('----------------------------------------------------------------');
console.log('Для чего нужен for of и для чего for in ?');
console.log('----------------------------------------------------------------');
(() => {
    let user = {
        name: 'John',
        surname: 'Smith',
        age: 27
    }
    let arr = ['pear', 'apple', 'banana'];
    console.log(user);
    console.log(`for IN ------------------`);
    console.log(`Перебирает ключи массивов и объектов.`);
    console.log(`------------------`);
    for (const item in arr) {
        console.log(`IN ${item}`);
    }
    console.log(`for OF ------------------`);
    console.log(`Перебирает значения массивов.`);
    console.log(`------------------`);
    for (const item of arr) {
        console.log(`OF ${item}`);
    }
})();

console.log('');
console.log('');
console.log('test 8');
console.log('----------------------------------------------------------------');
console.log('Создай 3 переменные с произвольными строками. Создай объект, и назначь этому объекту свойства и значения одноименные переменным.');
console.log('----------------------------------------------------------------');
(() => {
    let fruit_1 = 'pear';
    let fruit_2 = 'apple';
    let fruit_3 = 'banana';
    let fruits = {
        fruit_1,
        fruit_2,
        fruit_3
    }
    for (const item in fruits) {
        console.log(`${item} = ${fruits[item]}`);
    }
})();



console.log('');
console.log('');
console.log('test 9');
console.log('----------------------------------------------------------------');
console.log('Напиши методы объекта с коротким синтаксисом.');
console.log('----------------------------------------------------------------');

(() => {
    const user = {
        name: 'John',
        surname: 'Smith',
        seyHi() {
            console.log(`Hello my name is ${this.name}!`);
        }
    }
    user.seyHi();
})();



console.log('');
console.log('');
console.log('test 10');
console.log('----------------------------------------------------------------');
console.log('Что такое defineProperty?');
console.log('----------------------------------------------------------------');
console.log('Это дескриптор, который позволяет задать свойство и тонко его настроить (writable, configurable, enumerable, get, set).')

console.log('');
console.log('');
console.log('test 11');
console.log('----------------------------------------------------------------');
console.log('Напиши геттер и сеттер с помощью ES5.');
console.log('----------------------------------------------------------------');

(() => {
    const user = {
        _name: 'John',
        _surname: 'Smith',
        seyHi() {
            console.log(`Hello my name is ${this._name}!`);
        }
    }
    Object.defineProperty(user, 'fullName', {
        get: function () {
            return `Mt name is ${this._name} ${this._surname}!`
        },
        set: function(fullName) {
            this._name = fullName.name;
            this._surname = fullName.surname;
        }
    });
    Object.defineProperty(user, 'setName', {
        set: function(name) {
            this._name = name;
        }
    });
    Object.defineProperty(user, 'setSurname', {
        set: function(surname) {
            this._surname = surname;
        }
    })
    console.log(user.fullName);
    // user.setName = 'Vasy';
    // user.setSurname = 'Pupkin'
    user.fullName = {name: 'Evgeny', surname: 'Prosvirin'};
    console.log(user.fullName);
})();



console.log('');
console.log('');
console.log('test 12');
console.log('----------------------------------------------------------------');
console.log('Напиши геттер и сеттер с помощью ES6.');
console.log('----------------------------------------------------------------');

(() => {
    const user = {
        _name: 'John',
        _surname: 'Smith',
        seyHi() {
            console.log(`Hello my name is ${this._name}!`);
        },
        get fullName() {
            return `${this._name} ${this._surname}`;
        },
        set fullName(fullName) {
            this._name = fullName.name;
            this._surname = fullName.surname;
        }
    }
    console.log(`Mt name is ${user.fullName}`);
    user.fullName = {name: 'Evgeny', surname: 'Prosvirin'};
    console.log(`Mt name is ${user.fullName}`);
})();

console.log('');
console.log('');
console.log('test 13');
console.log('----------------------------------------------------------------');
console.log('Создай класс и экземпляр класса, проверь является ли экземпляр потомком этого класса.');
console.log('----------------------------------------------------------------');

(() => {
    class Admin {
        constructor(id, name, surname) {
            this.id = id,
            this.name = name,
            this.surname = surname
        }
        sayHi() {
            console.log(`Hello my name is ${this.name} ${this.surname}, my id #${this.id}.`);
        }
    }
    let Bill = new Admin(62, 'Bill', 'Gates');
    console.log(Bill);
    Bill.sayHi();
    console.log(`Является ли Bill экземпляром класса Admin? ${Bill instanceof Admin ? 'Да.' : 'Нет.'}`);
})();


console.log('');
console.log('');
console.log('test 14');
console.log('----------------------------------------------------------------');
console.log(`Создай Класс таск-менеджер он должен принимать 
{
    name: ‘Название задачи’, 
    condition: false 
}
Также класс должен содержать метод completed меняющий condition на true.
Добавьте метод static.`);
console.log('----------------------------------------------------------------');

(() => {
    class Task {
        constructor(task) {
            this.name = task.name;
            this.condition = task.condition;
        }
        complited() {
            this.condition = true;
        }
        static taskInfo() {
            console.log('This tasks for home.')
        }
    }
    Task.taskInfo();
    let task_1 = new Task({name: 'Купить хлеб', condition: false});
    let task_2 = new Task({name: 'Купить маркер', condition: false});

    console.log(task_1);
        task_1.complited();
    console.log(task_1);
    console.log(task_2);

})();

console.log('');
console.log('');
console.log('test 15');
console.log('----------------------------------------------------------------');
console.log('Создайте 2 класса и унаследуйте один от другого.');
console.log('----------------------------------------------------------------');

(() => {
class Animal {
    constructor(name, say) {
        this.name = name;
        this.say = say;
    }
    speak() {
        console.log(`${this.name} say ${this.say}!`);
    }
}
let Cat = new Animal('cat', 'myay myay');
console.log('cat: ', Cat);
Cat.speak();

class Fish extends Animal {
    constructor(swim) {
        super('trut', 'bul bul');
        this.swim = swim;
    }
    swimming() {
        console.log(`They swimming ${this.swim}!`);
    }
}
let Trout = new Fish('5 k/h');
Trout.speak();
Trout.swimming();
})()

console.log('');
console.log('');
console.log('test 16');
console.log('----------------------------------------------------------------');
console.log('Для чего нужен super() ?');
console.log('----------------------------------------------------------------');
console.log('super() нужен для вызова конструктора родительского метода, в качестве параметров можно передать параметры для родительского класса.');

console.log('');
console.log('');
console.log('test 17');
console.log('----------------------------------------------------------------');
console.log('Замени метод родительского класса в дочернем классе. (D.R.Y)');
console.log('----------------------------------------------------------------');

(() => {
    class Car {
        constructor(merek) {
            this.merek = merek;
        }
        bip() {
            console.log('bip! bip!');
        }
    }
    let toyota = new Car('toyota');
    toyota.bip();

    class Truk extends Car {
        constructor() {
            super('truk');
        }
        bip() {
            console.log('FAAAA!!! FAAAA!!!');
        }
    }
    let mercedes = new Truk();
    mercedes.bip();
})()

console.log('');
console.log('');
console.log('test 18');
console.log('----------------------------------------------------------------');
console.log('Напиши аналог класса с ES5, он должен содержать: - входные параметры, - геттер и сеттер, - методы - статический метод и статические сво-ва');
console.log('----------------------------------------------------------------');

(() => {
    function AnimalES5(name, say) {
        this._name = name;
        this.say = say;
        this.info = function() {
            console.log(`name = ${this._name} : say = ${this.say}!`);
        }
        // debugger
    }
    Object.defineProperty(AnimalES5, 'setName', {
        get: function() {
            return this._name;
        },
        set: function(value) {
            this._name = value;
        }
    });
    AnimalES5.prototype.speack = function() {
        console.log(`${this._name} say ${this.say}!`);
    }
    let cat = new AnimalES5('Murzik', 'myay myay');
    cat.speack();
    console.log('------------------------ ', cat.setName);
    cat.setName = 'zzz';
    console.log('------------------------ ', cat.setName);
    cat.speack();
    
})()

console.log('');
console.log('');
console.log('test 19');
console.log('----------------------------------------------------------------');
console.log('Унаследуй один класс от другого ES5.');
console.log('----------------------------------------------------------------');

(() => {
    function CarES5(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    CarES5.prototype.sayName = function() {
        console.log(`my name ${this.brand}`);
    }
    function Motorcycle(brand, speed, transmission) {
        CarES5.call(this, brand, speed);
        this.transmission = transmission;
    }
    Motorcycle.prototype = Object.create(CarES5.prototype);
    Motorcycle.prototype.constructor = Motorcycle;

    let motorcycle = new Motorcycle('harley davidson', 120, 5);
    console.log('motorcycle: ', motorcycle)
    motorcycle.sayName();
})()

console.log('');
console.log('');
console.log('test 20');
console.log('----------------------------------------------------------------');
console.log('Напиши стрелочную функцию складывающую 2 числа.');
console.log('----------------------------------------------------------------');

(() => {
    let a = 5,
        b = 7;
        console.log(`sum ${a} and ${b} = ${ ((a, b) => a + b )(a, b) }`);
})()

console.log('');
console.log('');
console.log('test 21');
console.log('----------------------------------------------------------------');
console.log('Верни объект из стрелочной функции.');
console.log('----------------------------------------------------------------');

(() => {
        console.log(`return object = ${ (() =>  ({a: 5, b: 7}) )() }`);
})()

console.log('');
console.log('');
console.log('test 22');
console.log('----------------------------------------------------------------');
console.log('Чему равен this в стрелочной функции?');
console.log('----------------------------------------------------------------');
console.log('this в стрелочной функции равен контексту (т.е. родительской функции или window)');

console.log('');
console.log('');
console.log('test 23');
console.log('----------------------------------------------------------------');
console.log('Диструктурируй массив из 3х элементов по переменным.');
console.log('----------------------------------------------------------------');

(() => {
    let a,
        b,
        c;
    [a, b, c] = [1, 2, 3];
    console.log('params: ', a, b, c);
})()

console.log('');
console.log('');
console.log('test 24');
console.log('----------------------------------------------------------------');
console.log('Поменяй местами элементы массива с помощью диструктуризации.');
console.log('----------------------------------------------------------------');

(() => {
    let a,
        b,
        c;
        arr = [1, 2, 3];
    [a, b, c] = arr;
    arr = [c, b, a];

    console.log('arr: ', arr);
})()

console.log('');
console.log('');
console.log('test 25');
console.log('----------------------------------------------------------------');
console.log('Диструктурируй объект.');
console.log('----------------------------------------------------------------');

(() => {
    let person = {
        name: 'John',
        surname: 'Smith'
    }
    let {name, surname} = person;
    console.log(`My name: ${name}, and my surname: ${surname}.`);
})()

console.log('');
console.log('');
console.log('test 26');
console.log('----------------------------------------------------------------');
console.log('Диструктурируй объект с вложенным объектом.');
console.log('----------------------------------------------------------------');

(() => {
    let person = {
        name: 'John',
        surname: 'Smith',
        clothes: {
            outerwear: 'shirt',
            pants: 'jeans',
            shoes: 'sneakers'
        }
    }
    let {name, surname, clothes: {outerwear, pants, shoes}} = person;
    console.log(`My name: ${name}, and my surname: ${surname}.`);
    console.log(`My clothes: ${outerwear}, ${pants}, ${shoes}.`);
})()

console.log('');
console.log('');
console.log('test 27');
console.log('----------------------------------------------------------------');
console.log('Диструктурируй объект входящий в параметр функции.');
console.log('----------------------------------------------------------------');

(() => {
    let person = {
        name: 'John',
        surname: 'Smith',
        clothes: {
            outerwear: 'shirt',
            pants: 'jeans',
            shoes: 'sneakers'
        }
    }

    function showPerson({name, surname, clothes: {outerwear, pants, shoes}}) {
        console.log(`My name: ${name}, and my surname: ${surname}.`);
        console.log(`My clothes: ${outerwear}, ${pants}, ${shoes}.`);
    }
    showPerson(person);
})()

console.log('');
console.log('');
console.log('test 28, test 29');
console.log('----------------------------------------------------------------');
console.log('Для чего нужен Promise?');
console.log('----------------------------------------------------------------');
console.log('Что такое resolve, reject, then, catch?');
console.log('----------------------------------------------------------------');
console.log('Promise - это объект выполняющий асинхронный запрос, с удобной способом организации кода. Promise может иметь только один результат resolve или reject.');
console.log('resolve - это положительный результат выполнения Promise.');
console.log('reject - это отрицательный результат выполнения Promise.');
console.log('then - это метод который навешивают на Promise. В первый параметор передается колбек выполняющий resolve, во второй параметор передается колбек выполняющий reject.');
console.log('catch - это метод перехватывающий все ошибки (добавляется в конец цепочки), и выполяющий колбек reject.');

console.log('');
console.log('');
console.log('test 30');
console.log('----------------------------------------------------------------');
console.log('Напиши Promise.');
console.log('----------------------------------------------------------------');
console.log('----------------------------------------------------------------');
console.log('----------------------------------------------------------------');

(() => {
    const params = {
        passport: true,
        tickets: true,
        trunks: true,
        flying: true
    }
    // --------------------------------------------------------------------------------------------------


    function getPasport(message) { // Получить загранпаспорт
        console.log(message);
        let pasport = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(params.passport) {
                    resolve('Загран паспорт получен!');
                }
                else {
                    reject('Загран паспорт НЕ получен!');
                }
            }, 2000);
        })
        return pasport;
    }

    function getTickets(message) { // Купить билеты
        console.log(message);
        let tickets = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(params.tickets) {
                    resolve('Купил билеты на самолет!');
                }
                else {
                    reject('НЕ купил билеты на самолет!');
                }
            }, 2000);
        })
        return tickets;
    }

    function getTrunks(message) { // Купить плавки
        console.log(message);
        let trunks = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(params.trunks)  {
                    resolve('Купил плавки!');
                }
                else {
                    reject('НЕ купил плавки!');
                }
            }, 2000);
        })
        return trunks;
    }

    function goFlying(message) { // Летим в отпуск
        console.log(message);
        let flying = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(params.flying) {
                    resolve('Летим в отпуск!');
                }
                else {
                    reject('НЕ влезаю в плавки!');
                }
            }, 2000);
        })
        return flying;
    }
    function errorMessage(message) {
        console.error(message);
    }

    getPasport('Хочу в отпуск...')
    .then(getTickets)
    .then(getTrunks)
    .then(goFlying)
    .then(console.log)
    .catch(errorMessage);
})()