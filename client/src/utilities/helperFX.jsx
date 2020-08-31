

//helper function tp split data objects for styling
export const chunkArray = (array, size) => {
  let tempArr = array.reduce((prev, curr) => {
    prev.push(array.splice(0, size))
    return prev
  }, [])

  //this check for the case if there is 1 last element in the original array. Reduce does not run when there is only 1 element left. 
  if (array.length === 1) {
    tempArr.push(array)
  }
  return tempArr
}


// const splitArrHalf = (arr, num) => {

//   const half = Math.ceil(arr.length / 2);

//   const firstHalf = arr.splice(0, half)
//   const secondHalf = arr.splice(-half)
//   return firstHalf, secondHalf;
// }


