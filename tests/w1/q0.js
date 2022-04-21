/* Question 0
 *
 *  Implement the functions defined below
 *
 */

//Question 0.1

  /* ===========================================================================
  * COUNT - the number of items in a list
  *
  * For example:
  *
  *    count([6,2,3,4,9,6,1,0,5]);
  *
  * Returns:
  *
  *    9
  */

  // Without using length method 

  const count = function(arr) {
    //accumulator 
    let ans = 0;

    for (let i = 0; i < arr.length; i++) {
      ans++
      console.log(ans)
    }
    return ans
  };

  console.log("0.1 Answer:", count([6,2,3,4,9,6,1,0,5,8]))

  //Using length method 

  const countLength = function(arr) {
    return arr.length
  };

  console.log("0.1 Answer with length method:", countLength([6,2,3,4,9,6,1,0,5,1,2]))



/* ===========================================================================

//Question 0.2

  * SUM - the sum of the numbers in a list
        - safe to assume that all items are numbers already
  *
  * For example:
  *
  *    sum([6,2,3,4,9,6,1,0,5])
  *
  * Returns:
  *
  *    36
  */

  const sum = function(arr) {
    /* IMPLEMENT ME */
    
    //accumulator 
    let ans=0;

    //for loop over array
    for (let i=0; i<arr.length; i++){
      ans+= arr[i]
      console.log(ans)
    }

    //return accumulator 
    return ans


    
  

  };

  // call function
  console.log("0.2 Answer:", sum([6,2,3,4,9,6,1,0,5]))


// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

//console.log(Math.round(3.5))

/* ===========================================================================

//Question 0.3
  * MEAN - the average value of numbers in a list
  *      - use the provided 'round' function when returning your value
  *      - if empty array, return null to indicate that mean cannot be calculated
  *
  * For example:
  *
  *    mean([6,2,3,4,9,6,1,0,5])
  *
  * Returns:
  *
  *    4
  */
  const mean = function(arr) {
    /* IMPLEMENT ME */
    if (arr.length === 0){
      return null
    }
    else {
      let sum = 0
      let mean = 0 
      for (let i = 0; i < arr.length; i++){
        sum += arr[i]
      }
      mean = sum/arr.length
      return Math.round(mean)
    }
  };


  console.log("0.3 Answer Scenario 1:", mean([1, 2, 3]))
  console.log("0.3 Answer Scenario 2:", mean([]))
