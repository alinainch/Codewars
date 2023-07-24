//defining a new method called last() and adding it to the prototype of the Array object 

Array.prototype.last = function() {
  return this.length == 0 ? -1 : this[this.length -1]
};

/**
* const arr = [1, 2, 3];
* arr.last(); // 3
*/

//this function returns -1 if the array is empty.
// : returns the last index of the array 
//ex: arr[arr.length -1] <- new index