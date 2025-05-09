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


export const deleteElement = (L, p, eContainer) => {
    /* L is a sequence list array, p is the index to be deleted, 
    and eContainer is used to store the deleted value*/
    if (!Array.isArray(L) || typeof p !== 'number' || p <= 0 || p >= L.length - 1) {
        return 0; // If the conditions are not met, the deletion fails.
    }
    // Save deleted values
    eContainer.value = L[p];
    // Remove one element from array L starting at index p
    L.splice(p, 1);
    return 1;
}

export const mergeSortedLists = (A, B) => {
    // Get the first node of two linked lists (skip the head node)
    let pa = A.next
    let pb = B.next
    const C = { next: null }
    let pc = C // pc always points to the last node of C
    while (pa && pb) {
        if (pa.value <= pb.value) {
            pc.next = pa
            pa = pa.next
        } else {
            pc.next = pb
            pb = pb.next
        }
        pc = pc.next
    }
    // Process the remaining nodes (one of pa or pb is not empty)
    pc.next = pa || pb
    return C // Returns the linked list with the head node
}

// Pass by reference case
const referencePass = () => {
    // Building a simple linked list
    const head = {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: null
            }
        }
    }
    let current = head
    console.log("起始 current:", current) //  value: 1
    // Move the pointer for the first time
    current = current.next
    console.log("第一次 current:", current) // value: 2
    // Move the pointer a second time
    current = current.next
    console.log("第二次 current:", current) // value: 3
    // Verify that the original linked list has not changed
    console.log("original head:", head)
}