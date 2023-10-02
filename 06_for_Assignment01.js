
console.log(`Step 1==> print numbers 5 to 15 incrementing by 1========`);
var table="";
for (let index = 5; index <= 15; index++) {
    table = table + index +" ";
}
console.log(`${table}`);

console.log(`Step 2==> print numbers 50 to 40 decrementing by 1========`);
var table="";
for (let index = 50; index >= 40; index--) {
    table = table + index +" ";     
}
console.log(`${table}`);

console.log(`Step 3==> print first 15 odd numbers ========`);
var table="";
for (let index = 1; index <= 30; index =index+2) {
    table = table + index +" "; 
    
}
console.log(`${table}`);


console.log(`Step 4==> print first 10 even numbers ========`);
var table="";
for (let index = 2; index <= 20; index =index+2) {
    table = table + index +" "; 
}
console.log(`${table}`);

console.log(`Step 5==> print table of 5 ========`);

var table="";
for (let index = 5; index <= 50; index =index+5) {
    table = table + index +" ";   
}
console.log(`${table}`);

console.log(`Step 6==> print table of 10 ========`);

var table="";
for (let index = 10; index <= 100; index =index+10) {
    table = table + index +" ";   
}
console.log(`${table}`);

console.log(`Step 7==> print table of 10 in reverse order ========`);

var table="";
for (let index = 100; index >= 10; index =index-10) {
    table = table + index +" ";   
}
console.log(`${table}`);

