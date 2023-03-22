function shortenToDate(longDate) {
  let newDate = longDate.split(', ')
  newDate.pop()
  newDateComplete = newDate.join(' ')
  return newDateComplete
}

// or

const shortenToDate = longDate => longDate.split(",")[0]
