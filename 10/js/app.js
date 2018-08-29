(() => {
    'use strict';

    function divide(a, b) {
        if (b === 0) {
            throw new Error('Error: Divide by zero!');
           // throw 'Error: Divide by zero!';
        }
        return a / b;
    }
    try {
        divide(5, 0);
        divide(5, 2);
    } catch (error) {
        console.log(error.message);
    }
    console.log('OK');

    function* NumberGen() {
        let num = 0;
        while (true) {
            yield num++;
        }

    }

    const generator = NumberGen();
    /*console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().value);*/

    function* Gen(a, b) {
        //возвращает результат a + b
        //кроме того, сохраняет в k новые входные данные, а не
        //результат операции a + b
        let k = yield a + b;
        //то же самое справедливо и для m
        let m = yield a + b + k;

        yield a + b + k + m;
    }

    const sum = Gen(2, 2);
    console.log(sum.next().value);

    const x = parseFloat(prompt('input number'));
    console.log(sum.next(x).value);

    const y = parseFloat(prompt('input number'));
    console.log(sum.next(y).value);


    //console.log(sum.next(3).value);
})();