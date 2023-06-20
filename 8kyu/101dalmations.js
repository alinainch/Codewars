function howManyDalmatians(nums) {
  let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"]
  if (nums <= 10) {
      return dogs[0]
  } else if (nums <= 50) {
      return dogs[1]
  } else if (nums === 101) {
      return dogs[3]
  } else {
      return dogs[2]
  }
}