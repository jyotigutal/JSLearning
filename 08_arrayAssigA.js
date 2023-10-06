

const arrayFruits =["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`The given array elements are : ${arrayFruits}`);
console.log(`==========Step 1 log First and Last element=============`);

for (let index = 0; index < arrayFruits.length; index++) {
    if(index == 0){
        console.log(`The First element is: ${arrayFruits[index]}`); 
    }
    if(index = arrayFruits.length-1){
        console.log(`The Last element is: ${arrayFruits[index]}`);  
    } 
}

console.log(`------------------------------------------------------------`);
console.log(`==========Step 2 Add Papaya before Banana ============`);

arrayFruits.unshift("Papaya");
console.log(`The String is: ${arrayFruits}`);

console.log(`------------------------------------------------------------`);
console.log(`==========Step 3 Remove Mango from Array ============`);
console.log(`The given array is: ${arrayFruits}`);
var removedElements = arrayFruits.splice(4,1);
console.log(`After removing Mango from given array : ${removedElements}`);

console.log(`------------------------------------------------------------`);
console.log(`========Step 4 Insert element 'Pineapple' at last =======`);

console.log(`The given array is: ${arrayFruits}`);
 arrayFruits.push("Pineapple");
console.log(`After adding 'Pineapple' array is: ${arrayFruits}`);

console.log(`------------------------------------------------------------`);
console.log(`=====Step 5 Insert 'Dragon Fruit' Before Water Melon =====`);
console.log(`The given array is: ${arrayFruits}`);
arrayFruits.splice(4,0,'Dragon Fruit');
console.log(`The new array is: ${arrayFruits}`);

console.log(`------------------------------------------------------------`);
console.log(`=====Step 6 Replace Orange with Kiwi =====`);
console.log(`The given array is: ${arrayFruits}`);
arrayFruits.splice(2,1,'Kiwi');
console.log(`The new array is: ${arrayFruits}`);

console.log(`------------------------------------------------------------`);
console.log(`=====Step 7 starting index from 1 to 4 =====`);

var result = arrayFruits.slice(1,4);
console.log(`${result}`);

console.log(`------------------------------------------------------------`);
console.log(`=====Step 8 Select last 3 elements =====`);
for (let index = arrayFruits.length-1; index > 3; index--) {
    console.log(`${arrayFruits[index]}`);
    
}




