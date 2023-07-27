var isAnagram = function(s, t) {
  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');

  return sortedS === sortedT;
};

// convert string to array
// sort by lexical order
// join to make string
// compare