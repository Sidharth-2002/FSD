console.log("Hi Welcome");
var a=5;
let b="hi";
let c=true;
let d=null;
let e=undefined;
// let b=23
{
    var a=23;
    let b=4;
}

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));

let person = {
    name: "Abc",
    age: 21,
    location: "Tvm"
}

let arr=[{name: "Abc", age: 23},{name: "Def", age: 24}];
console.log(arr[1].name);

function add(a, b) {
    let sum=a+b;
    return sum;
}

c=add(2,4);
console.log(c);

let s=1
t=++s;
console.log(s);
console.log(t);

let a1=99;
let a2="99";

if (a1>a2) {
    console.log("a1 is greater");
} else if (a1==a2) {
    console.log("a1 is samev as a2 and the value is "+a2);
} else {
    console.log("a2 is greater");
}

let lst=[10,20,30,40]
for (let i=0;i<lst.length;i++) {
    console.log(lst[i]);
}

for (const i in lst) {
    console.log(lst[i]);
}

for (const i of lst) {
    console.log(i);
}