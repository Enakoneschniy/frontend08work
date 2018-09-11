(() => {
    'use strict';

    function foo(a) {
        const c = 4;
        const x = 44;
        console.log(x / 2);

        return function (b) {
            return a + b - c;
        }
    }

    const bar = foo(4);
    console.log(bar(6)); // 6

    function baz(a, b, callback) {
        if(typeof callback  === 'function') {
            callback(a + b);
        }
    }

    baz(4, 4, function (res) {
        console.log(res);
    });

    function Animal(name) {
        this.name = name;
        this.sayHi = function () {
            console.log('Hi' + this.name);
        }
    }

    const vasya = new Animal('Vasya');
    console.log(vasya.name);
    vasya.sayHi();
    const petya = new Animal('Petya');
    console.log(petya);

    function User(name, email) {
        function format() {
            return `Name: ${this.name}, Email: ${this.email}`;
        }
        return {
            name,
            email,
            showInfo() {
                console.log(format.call(this));
            }
        }
    }

    const user = new User('Petya', 'petya@gmail.com');

    console.log(user);
    user.showInfo();
    user.name = 'Alex';
    user.showInfo();
    console.log(user);


    function Basket() {
        const items = [];
        return {
            add(product) {
                items.push(product);
            },
            getAll() {
                return items;
            },
            totalPrice() {
                return '$' + items.reduce((acc, item) => acc += item.price, 0);
            },
            clear() {
                items.length = 0;
            }
        }
    }

    const basket = new Basket();

    console.log(basket);
    basket.add({
        title: "phone",
        price: 300
    });
    basket.add({
        title: "phone",
        price: 300
    });
    console.log(basket);
    console.log(basket.getAll());
    console.log(basket.totalPrice());
    basket.clear();
    console.log(basket.getAll());


    function Transport(name) {
        this.engine = true;
        this.name = name;
    }
    Transport.prototype.move = function () {
        console.log('move', this.name);
    };

    function Moto(name, speed) {
        Transport.call(this, name);
        this.speed = speed
    }
    Moto.prototype = Object.create(Transport.prototype);
    Moto.prototype.constructor = Transport;

    const transport = new Transport('Bus');
    transport.move();
    console.log(transport);

    const moto = new Moto('Bravis', 120);
    console.log(moto);
    moto.move();

    class TranspotES6 {
        constructor(name) {
            this.name = name;
            this.engine = true;
        }
        move() {
            console.log('move', this.name);
        }
    }

    class MotoES6 extends TranspotES6 {
        constructor(name, speed) {
            super(name);
            this.speed = speed;
        }
    }

})();








