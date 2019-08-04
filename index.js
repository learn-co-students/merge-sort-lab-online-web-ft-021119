function findMinAndRemoveSorted(array) {
  for(let i = 0; i < array.length; i++) {
    return array.shift();
  }
}


function merge(firstSubArray, secondSubArray) {
  let sorted = [];
  let min;

  while (firstSubArray.length != 0 && secondSubArray.length !=0) {
    let firstMin = firstSubArray[0];
    let secondMin = secondSubArray[0];

    if (secondMin < firstMin) {
      min = findMinAndRemoveSorted(secondSubArray);
      sorted.push(secondMin);
    } else {
      min = findMinAndRemoveSorted(firstSubArray);
      sorted.push(min);
    }
  }

  return sorted.concat(firstSubArray).concat(secondSubArray);
}

function mergeSort(array) {
  let midpoint = array.length/2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)

  let sorted = []


  if (array.length < 2) {
    return array;
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
