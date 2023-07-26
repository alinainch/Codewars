var removeDuplicates = function(nums) {
  let ans = 1
  for(let i = 1; i < nums.length; i++)
      if(nums[i] != nums[i - 1]){  
          nums[ans] = nums[i] 
          ++ans
      }
  return ans
};

//start with 1 because the first element of the array (at index 0) is always unique
//The loop skips the first element since we have already considered it as a unique element
//If the current element is not equal to the previous one, it means we have found a new unique element
//If the current element is unique, we copy it to the ans-th position in the array
//return ans (how many items are in the mutated array)