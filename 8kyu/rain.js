function rainAmount(n) {
  if (n < 40) {
      return "You need to give your plant " + (40 - n) + "mm of water"
  } else {
      return "Your plant has had more than enough water for today!"
  }
}