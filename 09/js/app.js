
function debounce(callback, time) {
    return function(...args) {
        setTimeout(callback, time, ...args);
    }
}

function validate(message) {
    console.log('Validate: ' + message);
}

const validateDebounce = debounce(validate, 2000);

validateDebounce('Error!!!!');

(() => {
    'use strict';

    let hello = 'Hello World!';

    console.log(hello[1]);
    console.log(hello.charAt(1));
    //hello[1] = 'o';
    //console.log(hello);

    console.log('abc' === 'bca');
    console.log('abc'.length);

    let str = "Widget with id";

    function strSearch(str, query) {
        let result = [];
        let pos = 0;
        let index = -1;
        do {
            index = str.indexOf(query, pos);
            // console.log(index, pos);
            if (index !== -1) {
                result.push(index);
                // pos += query.length; // incorrect!!!!
                pos = index + query.length;
            }
        } while (index !== -1);
        return result;
    }
    console.log(strSearch(str, 'id'));

    let chars = ['a', 'b', 'c', 'd', 1, 4343];

    Array.prototype.toString = function() {
        return this.reduce(function (res, element) {
            return res += element + '';
        });
    };

    console.log( ''.substr.call(chars, 0, 2) );

    const user = {
        firstName: 'Petya',
        lastName: 'Pupkin',
        fullName() {
            console.log(this.firstName + " " + this.lastName);
        }
    };

    const debounceFullName = debounce(user.fullName.bind(user), 500);
    debounceFullName();
    console.log('WOW!');

    const intertval = setInterval(function () {
        console.log('Hi!');
    }, 1000);

    console.log(intertval);

    setTimeout(function () {
        clearInterval(intertval);
    }, 10000);

    function getProp(obj, property) {
        return obj[property];
    }

    let test = null;
    try {
        getProp(test, 'name');
    } catch (error) {
        console.log(error.message);
        window.open(`https://stackoverflow.com/search?q=${e.message}`);
    }


    console.log('THE END!');

})();