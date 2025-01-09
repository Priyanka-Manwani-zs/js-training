console.log("hello");

let delay = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 40000);
});

async function time() {
  await delay();
  console.log("after 4 sec");
}

time();

let team1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("one");
  }, 10000);
});

let team2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("two");
  }, 5000);
});
let team3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("three");
  }, 60000);
});
let team4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("four");
  }, 80000);
});

let winner = Promise.any([team1, team2, team3, team4]).then((response) => {
  console.log(response);
});

const arr = [10, 20, 30];

const result = arr.reduce((acc, value, index) => {
  acc[value] = index + 1;
  return acc;
}, {});

console.log(result);

//promises questions:

//1
let mypromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});
mypromise.then(console.log("successfull"));

//2
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello");
  }, 2000);
});

let fresult = Promise.all([p1, p2]).then((val) => {
  console.log(val);
});

//3
let first = new Promise((resolve, reject) => {
  resolve("resolved");
});
let second = new Promise((resolve, reject) => {
  reject("rejected");
});
let third = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved after 2 sec");
  }, 2000);
});

let firesult = Promise.allSettled([first, second, third]).then((val) => {
  console.log(val);
});

//4
let pro1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("winner");
  }, 1000);
});
let pro2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved after 2 sec");
  }, 2000);
});

let firessult = Promise.race([pro1, pro2]).then((val) => {
  console.log(val);
});

//5

let prom1 = new Promise((resolve, reject) => {
  resolve("resolved 1");
});
let prom2 = new Promise((resolve, reject) => {
  resolve("resolved 2");
});

let prom3 = new Promise((resolve, reject) => {
  reject("rejected");
});

let firessultt = Promise.all([prom1, prom2, prom3])
  .then((val) => {
    console.log(val);
  })
  .catch((error) => {
    console.error("One of the promises rejected:", error);
  });

//6
async function name() {
  let post1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  console.log("api 1 data");
  const api1Data = await post1.json();
  console.log("API 1 Data:", api1Data);
  console.log("api 2 data");
  let post2 = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  const api2Data = await post2.json();
  console.log(api2Data);
  let post3 = await fetch("https://jsonplaceholder.typicode.com/posts/3");
  const api3Data = await post3.json();
  console.log(api3Data);
}
name();

//7
var temp = 3;
async function race1() {
  temp++;
}
async function race2() {
  temp++;
}
console.log(temp);

10;

let num1 = new Promise((resolve, reject) => {
  const v1 = 5;
  resolve(v1);
});

let num2 = new Promise((resolve, reject) => {
  const v2 = 10;
  resolve(v2);
});

function sum(v1, v2) {
  return new Promise((resolve, reject) => {
    const result = v1 + v2;
    resolve(result); // Resolving with the sum
  });
}

num1.then((res1) =>
  num2.then((res2) =>
    sum(res1, res2).then((result) => {
      console.log("The sum is:", result);
    })
  )
);
// num2.then(sum);
// sum.then((el)=>console.log('sum is',el));
