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
// const executeDeleteElement = () => {
//   // 使用示例
//   const L = [10, 20, 30, 40, 50];
//   const eSave = ref();
//   console.log("删除前", L.length);
//   const result = deleteElement(L, 2, eSave);
//   console.log("删除结果：", result); // 输出: 1
//   console.log("被删除的元素值：", eSave.value); // 输出: 30
//   console.log("更新后的顺序表：", L, L.length); // 输出: [10, 20, 40, 50]
// };

/*** 
The 'splice()' method is used to add, remove or replace elements in an array, and it directly modifies the original array (that is, it changes the original array).

array.splice(start, deleteCount, item1, item2, ...)

1.
const fruits = ['apple', 'banana', 'orange', 'grape'];

// 从索引 1 开始，删除 2 个元素
const removed = fruits.splice(1, 2);
console.log(fruits);     // ['apple', 'grape']
console.log(removed);    // ['banana', 'orange']

2.
const colors = ['red', 'blue'];

// 从索引 1 开始，删除 0 个，插入 'green'
colors.splice(1, 0, 'green');
console.log(colors);     // ['red', 'green', 'blue']

3.
const pets = ['cat', 'dog', 'fish', 'bird'];

// 从索引 1 开始，删除 2 个，插入 'hamster' 和 'rabbit'
pets.splice(1, 2, 'hamster', 'rabbit');
console.log(pets);       // ['cat', 'hamster', 'rabbit', 'bird']

4.
const nums = [1, 2, 3, 4, 5];

// 从倒数第2个开始，删除1个
nums.splice(-2, 1);
console.log(nums);       // [1, 2, 3, 5]

***/

/* The merging loop runs at most m + n times — each iteration moves either pa or pb.
   Overall Time Complexity: O(m + n) */
/* The merge operation does not create new nodes — it reuses existing ones by adjusting the next pointers.
   Only constant extra space is used for pointers like pa, pb, and pc.
   Space Complexity for Merge Step: O(1)   */
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
    // console.log("起始 current:", current) //  value: 1
    // Move the pointer for the first time
    current = current.next
    // console.log("第一次 current:", current) // value: 2
    // Move the pointer a second time
    current = current.next
    // console.log("第二次 current:", current) // value: 3
    // Verify that the original linked list has not changed
    // console.log("original head:", head)
}


/*Find out whether there is a node with value x in linked list C (head node). 
  If so, delete the node and return 1, otherwise return 0. JavaScript implementation */
// time complexity is O(n)
// space complexity is O(1)
const deleteNodeWithValue = (C, x) => {
    /* p points to the current node, prev is the previous node, 
       and initially points to the head node */
    let prev = C;
    let p = C.next;

    while (p !== null) {
        if (p.val === x) {
            // Delete node: prev.next skips the current node p
            prev.next = p.next;
            return 1; // Delete successfully
        }
        prev = p;
        p = p.next;
    }

    return 0; // Not found, deletion failed
};
const buildSingleLinkList = (arr) => {
    let head = { val: 0, next: null }; // dummy head
    let current = head;
    for (let val of arr) {
        current.next = { val, next: null };
        current = current.next;
    }
    return head;
};

export const executeDeleteNodeWithValue = () => {
    let C = buildSingleLinkList([10, 20, 30, 40]);
    // console.log(deleteNodeWithValue(C, 30)); // 输出 1
    // console.log(deleteNodeWithValue(C, 50)); // 输出 0
    // 打印链表结构
    let curr = C.next;
    while (curr) {
        // console.log(curr.val); // 应该输出 10, 20, 40
        curr = curr.next;
    }
}

