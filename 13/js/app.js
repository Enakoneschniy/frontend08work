const LOGIN = 'signIn';

class User {
    // конструктор
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._email = email;
    }
    // методы
    static sayHi() {
        console.log("Hello!");
    }
    [LOGIN]() {
        console.log('signIn');
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(' ');
    }

    set email(value) {
        if(/^[0-9a-z_\-\.]+@[0-9a-z_\-\.]+$/i.test(value)) {
            this._email = value;
        } else {
            this._email = this._email || 'not set';
        }
    }
    static login(email, password) {
        //запрос на сервер
        const response = { firstName: 'Den', lastName: 'Ivanov' };
        return new User(response.firstName, response.lastName, email);
    }
    get email() {
        return this._email;
    }
    static get PI() {
        return 3.14;
    }
}

const user = new User('Petya', 'Ivanov', 'petya@gmail.com');
user[LOGIN]();
User.sayHi();
console.log(user.fullName);
user.fullName = 'Piter Parker';
console.log(user.fullName);
console.log(user);
console.log(user.email);
user.email = '';
console.log(user.email);

const user123 = User.login('test@test.com', 'password123');
console.log(user123);

const button = document.getElementById('button');
const div = document.getElementById('div');
const link = document.getElementById('link');
function onClick(event) {
    event.stopPropagation();
    console.log('onButtonClick');
}
function onDivClick(event) {
    console.log('onDivClick');
}
button.addEventListener('click', onClick);
div.addEventListener('click', onDivClick);

link.addEventListener('click', function (e) {
    e.preventDefault();
    alert(e.target.getAttribute('href'));
});

const subscribeForm = document.getElementById('subscribe-form');
subscribeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(
        e.target.querySelector('input[type="text"]').value
    );
});
const submit =  document.querySelector('#subscribe-form input[type="submit"]');
const emailInput = document.querySelector('#subscribe-form input[name="email"]');
emailInput.addEventListener('input', function (e) {
    submit.disabled = !/^[0-9a-z_\-\.]+@[0-9a-z_\-\.]+$/i.test(e.target.value);
});







