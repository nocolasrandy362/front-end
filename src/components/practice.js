/***
1.Insert Element into Sorted Sequence:

 Given a sequence list, where the elements are arranged in ascending order,
 design an algorithm to keep the sequence list in ascending order 
 after inserting an element x 
 (assuming that the insertion operation always succeeds)
 
 ***/

export const insertIntoSortedArray = (arr, x) => {
    // Find insertion location
    let i = 0;

    /* Iterate through the array arr starting from index 0, 
     stopping either when the first element that is not less than x is found 
     or when the end of the array is reached.​
    */
    while (i < arr.length && arr[i] < x) {
        i++;
    }
    /*splice(index, 0, value) Indicates inserting value at index position 
     without deleting any elements
    */
    arr.splice(i, 0, x);
    return arr;
}