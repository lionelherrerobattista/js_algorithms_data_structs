function binarySearch(sortedArray, value) {
    let leftPointer = 0;
    let rightPointer = sortedArray.length - 1;
    let middle; 

    while(leftPointer < rightPointer) {
        middle = Math.round((rightPointer + leftPointer) / 2); //round up
        console.log(middle);

        if(sortedArray[middle] === value){ // found the number, return array index
            return middle;
        } else if(sortedArray[middle] < value) { // move left pointer up
            leftPointer = middle;
        } else { //move right pointer down
            rightPointer = middle;
        }

    }

    return -1;
}

console.log("result: ",binarySearch([1,2,3,4,5],2)) // 1 
console.log("result: ",binarySearch([1,2,3,4,5],3)) // 2
console.log("result: ",binarySearch([1,2,3,4,5],5)) // 4
console.log("result: ",binarySearch([1,2,3,4,5],6)) // -1
console.log("result: ",binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 10)) // 2
  console.log("result: ",binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 95)) // 16
  console.log("result: ",binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 100)) //-1


//Other solution
function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length -1; 
    let middle = Math.floor((start + end)/2); // average

    // look for the element
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end)/2);
    }
    if(arr[middle] === elem) {
        return middle;
    }
    return -1;
}

//shorter version
function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length -1; 
    let middle = Math.floor((start + end)/2); // average

    // look for the element
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end)/2);
    }

    return arr[middle] === elem ? middle : -1;
}