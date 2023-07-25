function solution(nums){
  if(!nums){
    return []
  } else {
    return nums.sort((a, b) => a - b)
  }
}