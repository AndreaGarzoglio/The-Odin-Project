/*
function camelize(str){
    return str
    .split('-')
    .map(
        (word, index) => index==0 ? word : word[0].toUpperCase()+ word.slice(1)
    )
    .join('')
}

let str= "my-lovely-place"


console.log(camelize(str))

*/
/*
function filterRange(arr,a,b){
    return arr.filter(item => (item>=a && item<=b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr );
*/
/*
function filterRangeInPlace(arr,a,b){
   for (let i= 0; i<arr.length; i++){
    let val= arr[i];
    if (val<a|| val>b){
         arr.splice(i, 1);
        i--
    }
   
   }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]
*/
/*
let arr = [5, 2, 1, -10, 8];

arr.sort((a,b)=>b-a)

alert( arr ); // 8, 5, 2, 1, -10
*/

/*
function copySorted(arr){
    return arr.slice().sort()
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
*/

/*
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
let arr = [1, 2, 3];

shuffle(arr);

alert(arr)
*/

/*
function unique(arr) {
  let result= []
  for (let str of arr){
    if (!result.includes(str)){
        result.push(str);
    }
  }
  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) );( // Hare, Krishna, :-O
*/

function groupById(arr){
  return arr.reduce((obj, value) => {
    obj[value.id]= value;
    return obj;
  }, {})
}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);