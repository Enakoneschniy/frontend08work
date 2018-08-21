const { helloWorld } = (() => {
    'use strict';
    let array = [1, 2, 3, 4, 5];
    array = array.map(item => item ** 2);
    console.log(array);

    function map(array, callback) {
        for (let index in array) {
            array[index] = callback(array[index], index);
        }
        return array;
    }
    let array12 = [1, 2, 3, 4, 5];
    array12 = map(array12, function (item) {
        return item ** 2;
    });
    console.log(array12);

    array12 = [1, 2, 3, 4, 5];
    const res = array12.slice(2).reduce(function(result, element) {
        return result *= element;
    }, 1);
    console.log(res);

    array12 = array12.filter(function(el) {
        return el % 2 === 0;
    });
    // array12 = array12.filter(el => el % 2 === 0);
    console.log(array12);

    array = [1, 2, 3, 4, 5];
    array = array.map(item => {
        if(item % 2 === 0) {
            item = item ** 2;
        }
        return item;
    });
    console.log(array);

    function factorial(num) {
        if(num === 1) {
            return 1;
        }
        return num * factorial(num - 1);
    }
    console.log(factorial(5));

    function abc() {
        console.log('print tag ul');
        def();
    }

    function def() {
        let children = true;
        console.log('print tag li');
        if(children) {
            abc()
        }
    }

    function foo() {
        const test = 'test';
        const hello = 'Hello world';
        return function () {
            console.log(hello);
        }
    }
    const bar = foo();
    bar();

    const translate = {
        hello: "Привет",
        name: "Имя",
        "hello world": 'Привет мир',
        445: 'ssdf445'
    };
    const word = prompt('input word', '');
    console.log(translate.hello);
    console.log(translate['hello world']);
    console.log(translate[word]);
    console.log(Object.keys(translate));
    console.log(Object.values(translate));

    const user = Object.freeze({
        username: 'testuser',
        firstName: 'Petya',
        lastName: 'Pupkin',
        personalInfo: {
            age: 23
        },
        friends: [
            {
                firstName: 'asdas',
                lastName: 'sadas'
            },
            {
                firstName: 'asdas',
                lastName: 'sadas'
            }
        ],
        fullName() {
            return `${this.firstName} ${this.lastName}`
        }
    });

    console.log(user);
    console.log(user.personalInfo.age);

    const products = [
        {
            id: 1,
            title: 'Iphone 7',
            price: 500
        },
        {
            id: 2,
            title: 'Iphone 6',
            price: 400
        }
    ];
    const totalPrice = products.reduce(function(total, product) {
        return total += product.price;
    },0);
    console.log(totalPrice);

   /* const firstName = user.firstName;
    const lastName = user.lastName;*/

    const { firstName, lastName } = user;

    function sum({ a, b }) {
        const result = a + b;
        return { a, b, result };
    }
    const testObj = {
        a: 2,
        b: 4
    };
    const { result, a, b } = sum(testObj);
    console.log(result, a, b);

    const testObj1 = {
        message: 'This is Sparta!!!',
        showMessage() {
            console.log(this);
            return () => {
                console.log(this)
            }
        }
    };
    testObj1.showMessage()();

    function sumAll() {
        return [].reduce.call(arguments, function (sum, arg) {
            return sum += arg;
        }, 0);
    }
    console.log(sumAll(1, 2, 3));

    function baz() {
        console.log(this);
    }
    const baz1 = baz.bind({
        message: 'test'
    });
    baz1();
    return {
        helloWorld(message) {
            alert(message);
        },
        testMethod() {
            alert('testMethod');
        }
    }
})();
