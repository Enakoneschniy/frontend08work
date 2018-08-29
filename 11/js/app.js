function foo(a, b, callback) {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
}

foo(2, 3, function (res) {
    foo(res, 3, function (res1) {
        foo(res1, 2, function (res2) {
            console.log(res2);
        });
    });
});
console.log('END');

function asyncLoop(n, callback) {
    setTimeout(() => {
        let sum = 0;
        for (let num = 1; num <= n; num++) {
            sum += num;
        }
        callback(sum);
    });
}
asyncLoop(100, function (res) {
    console.log(res);
});

console.log('------------------');

asyncLoop(10, function (res) {
    console.log(res);
});

function bar(a, b) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if(b !== 0) {
                const res = a / b;
                resolve(res);
            } else {
                reject('Error: Divide by zero!');
            }
        }, 2000);
    });
}
bar(20, 2).then(function (res) { // res = 10
    return bar(res, 2); // res = 10
}).then(function (res) { // res = 5
    return bar(res, 2); // res = 5
}).then(function (res) { // res = 2.5
   return res + 1; // res = 2.5
}).then(function (res) { // res = 3.5
    console.log(res); // res = 3.5
}).catch(function (error) {
    console.log(error);
});
console.log('End End!');

axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
    return response.data.map(async (item) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${item.userId}`);
        return Object.assign({}, item, { user: response.data });
    });
}).then(function (posts) {
    console.log(posts);
});

async function getPosts() {
    return (await axios.get('https://jsonplaceholder.typicode.com/posts')).data;
}

/*getPosts().then(function (posts) {
    console.log(posts);
});*/
async function attachUsers(posts) {
    for(let index in posts) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${posts[index].userId}`);
        posts[index] = Object.assign({}, posts[index], { user: response.data })
    }
    return posts;
}

(async () => {
    const tmpPosts = await getPosts();
    const posts = await attachUsers(tmpPosts);
    console.log(posts);
})();

const resObj = Object.assign({}, { a: 1, b: 2 }, { a: 3 });


