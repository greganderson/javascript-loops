/* While loops */

function firstWhileLoop() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
  }
}

function findMaxWhileLoop(nums) {
  let max = nums[0];

  let i = 0;
  while (i < nums.length) {
    if (nums[i] > max) {
      max = nums[i];
    }
    i++;
  }

  console.log(max);
}

/* For loops */

function firstForLoop() {
  //for (initialization; condition; step)
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

function findMaxForLoop(nums) {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  console.log(max);
}

/* More loops */

function countVowels(targetString) {
  // "Hello world!" -> 3

  let count = 0;
  let vowels = "aeiouAEIOU";
  // init; condition; step
  for (let i = 0; i < targetString.length; i++) {
    if (vowels.includes(targetString[i])) {
      count++;
    }
  }

  console.log(`Number of characters in ${targetString}: ${count}`);
}

function fizzbuzz() {
  // Loop through 1-100. If the number is divisible by 3, print 'fizz'.
  // If the number is divisible by 5, print 'buzz'. If it's divisible by
  // both 3 and 5, print 'fizzbuzz'.

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i}: fizzbuzz`);
    } else if (i % 3 === 0) {
      console.log(`${i}: fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i}: buzz`);
    } else {
      console.log(`${i}:`);
    }
  }
}

/* DOM Changing Functions */

function makeChange() {
  let name = prompt("Enter name:");
  let element = document.getElementById("make-change");
  element.textContent = `Look ${name}, I made a change!`;
}

function addFavorite() {
  let favoriteText = prompt("What favorite would you like to add?");

  let list = document.getElementById("my-favorites");

  let favoriteElement = document.createElement("li");
  favoriteElement.textContent = favoriteText;

  list.appendChild(favoriteElement);
}

function addLots() {
  // <p>Item 1</p>
  // <p>Item 2</p>
  // <p>Item 3</p>
  // <p>...</p>
  // <p>Item 10</p>

  let section = document.getElementById("items");

  for (let i = 0; i < 10; i++) {
    let item = document.createElement("p");
    item.textContent = `Item ${i + 1}`;

    section.appendChild(item);
  }
}
