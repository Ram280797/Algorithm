// function findMissingNumber(arr) {
    
//     const n = arr.length + 1;

//    const expectedSum = (n * (n + 1)) / 2;

//     const actualSum = arr.reduce((sum, num) => sum + num, 0);

//     return expectedSum - actualSum;
// }

// const inputArray = [1, 2, 3, 4, 6, 7, 8];
// const missingNumber = findMissingNumber(inputArray);
// console.log(`Missing Number: ${missingNumber}`);


function removeDuplicates(nums) {

    const uniqueNums = Array.from(new Set(nums));

    for (let i = 0; i < uniqueNums.length; i++) {
        nums[i] = uniqueNums[i];
    }
    

    return uniqueNums.length;
}

const nums = [1, 1, 2, 2, 3, 4, 4, 5];
const newLength = removeDuplicates(nums);

console.log("Array with duplicates removed: " + nums.slice(0, newLength));  2, 3, 4, 5]
