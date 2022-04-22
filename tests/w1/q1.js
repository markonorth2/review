/* Question 1
 *
 *  Implement the functions defined below
 *
 */



/* ===========================================================================

// Question 1.1 

  * MIN - the lowest value in a list
  *
  * For example:
  *
  *    min([6,2,3,4,9,6,1,0,5])
  *
  * Returns:
  *
  *    0
  */

  // The solution below is way too complicated. There is an easier solution. 

  const min = function(arr) {
    
    // We need a variable to store the minimum value as we loop through the array. We will compare the min variable to the current value, the smallest one becomes the min  
    let min = null
    for (const value of arr) {
      
      if (min || min === 0){
        if (value < min){
          min = value
          //console.log("success", min)
        }
      }
      else {
        min = value
        //console.log("else", min)
      }
    }
    return min 
  };

  //console.log("1.1 Answer:", min([6,2,3,4,9,6,-5,0,5]))

  // Solution #2 for Question 1.1. Way easier solution than the first solution. 
  const min2 = function(arr) {
    let min = arr[0]
    for (const value of arr) {
      if (min > value){
        min = value
      }
    }
    return min

  }
  //console.log("1.1 Answer Solution 2:", min([6,2,3,4,9,6,5]))

/* ===========================================================================

  // Question 1.2

  * MAX - the highest value in a list
  *
  * For example:
  *
  *    max([6,2,3,4,9,6,1,0,5])
  *
  * Returns:
  *
  *    9
  */
  const max = function(arr) {
    let max = arr[0]
    for (const value of arr) {
      if (max < value){
        max = value
      }
    }
    return max
  };
  // console.log("1.2 Answer:", max([6,2,3,4,100,6,5]))
/* ===========================================================================

Question 1.3 

  * RANGE - the difference between the highest and lowest values in a list
  *
  * For example:
  *
  *    range([6,2,3,4,9,6,1,0,5])
  *
  * Returns:
  *
  *    9
  */
  const range = function(arr) {
    maxValue = max(arr) 
    console.log(maxValue)
    
  };
  




