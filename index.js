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
