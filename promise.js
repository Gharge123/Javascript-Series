//promise has used for some tasks time to perform
//three State - 1)pending - initial state 2)fulfilled- completed 3)rejected - failed

// syntax:
// const promise = new Promise((resolve, reject) => {

// })

const promise = new Promise((resolve, reject) => {
    let sucess = true;
    if (sucess) {
        resolve("Success!");
    } else {
        reject("Error occurred!");
    }
});
console.log(promise);

//handling promise
// .then - promise succeeds

const promise1 = new Promise((resolve, reject) => {
    resolve("Promise succeeded!");
});

promise1.then((result) => {
    console.log(result);
});

//.catch- promise fails
const promise2 = new Promise((resolve, reject) => {
    reject("promise failed");
});

promise2.catch((error) => {
    console.log(error);
});

//.finally - success or Failure

const promise3 = new Promise((resolve, reject) => {
    resolve("Promise success");
})

promise3
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => {
        console.log("Promise is completed.");
    });

const promise4 = new Promise((resolve, reject) => {
    resolve("Promise success");
})

promise4.then(demo => console.log(demo))
promise4.catch(error => console.log(error))
promise4.finally(() => {
    console.log("Promise is sucessfully completed.");
})

//maily used for async operations

const promise5 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("data loaded")
    }, 2000);
})

promise5.then(data => console.log(data));


//promise chaining
const promise6 = new Promise((resolve, reject) => {
    resolve(2);
})

promise6
    .then(num => {
        return num * 2;
    })
    .then(num => {
        return num * 3;
    })
    .then(result => {
        console.log(result);
    });

const promise7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("data completed sucessfully");
    }, 1000);
})
promise7.then(data => { console.log(data) });

//Promise Methods
//Promise.all

const p1 = Promise.resolve("Hello");
const p2 = Promise.resolve("world");
const p3 = Promise.resolve("Rutuja");
Promise.all([p1, p2, p3])
    .then(result => {
        console.log(`All Promises resolved ${result}`);
    })

//promise.race
const p11 = new Promise((resolve) =>
    setTimeout(() => resolve("First Promise"), 1000)
)
const p22 = new Promise((resolve) =>
    setTimeout(() => resolve("Second Promise"), 2000)
);

Promise.race([p11, p22])
    .then(result => {
        console.log(result);
    })

//promise.allsettled

const p21 = Promise.resolve("Promise 1");
const p23 = Promise.resolve("Promise 2");

Promise.allSettled([p21, p23])
    .then(result => {
        console.log(result);
    })



//full example

const orderfood = new Promise((resolve, reject) => {
    let delivered = true;
    setTimeout(() => {
        if (delivered) {
            resolve("Food delivered");
        }
        else {
            reject("food not delivered");
        }
    }, 2000);
})

orderfood
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("order process completed."));


//promise.any()

//async and await = asynchronous operations, promises, API Calls

//async - Makes fuction retrun a promise

//await - awits for promise result

//syntax
//async function demo(){
// const result = await promise;
// }


async function greet() {

    return "Hello Sneha";

}
console.log(greet());
greet().then(result => console.log(result));

function demo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("data fetched");
        }, 3000)
    })
}
demo().then(result => console.log(result));

//using async/await

async function outputdemo() {
    return "hello Rutuja Patil How are you";

}

async function getdata() {
    const result = await outputdemo();
    console.log(result);
}
getdata();


function orderfoodpizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Pizza order delivered")
        }, 2000)
    })
}


async function orderprocess() {
    console.log("Pizza order placed");
    const outpputdata = await orderfoodpizza();
    console.log(outpputdata);
    console.log("Enjoy your order");

}

orderprocess();