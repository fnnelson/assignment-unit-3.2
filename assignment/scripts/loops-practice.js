console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i = 0; i < 4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');

//Forrest: we need to change the condition statement of the loop ( i < 6 ) meaning once the condition is no longer true (once i hits 6 in this case), the loop doesn't run again and ends

for (let i = 0; i < 6; i++) {
  console.log(i);
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');

//Forrest: we need to change the initialization statement of the loop (let i = 3) meaning we start this loop with i being equal to 3

for (let i = 3; i < 6; i++) {
  console.log(i);
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

//Forrest: we need to change the final expression (i += 2) meaning we're changing what happens to i after each loop iteration prior to the next loop's condition check, in this case the amount it increments (going from +1 to +2).  
//really we're changing all parts from the example loop: initialization statement (i = 2), condition statement (i < 11, but i < 12 would also work), and final expression (i += 2)

for (let i = 2; i < 11; i += 2) {
  console.log(i);
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');

// for (let i = 0; i < stars.length; i++) {
//   console.log(stars[i]);
// }

//Updated 6/30 - Oops I misread the question and thought it just said a for loop!

for (let star of stars) {
  console.log(star);
}

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');

let index = 0;
const max = stars.length;

while (index < max) {
  console.log(stars[index]);
  index++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

let n = 0;

while (n < 6) {
  console.log(n);
  n++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

n = 10;

while (n > 4) {
  console.log(n);
  n--;
}