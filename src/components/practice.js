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
    // 获取两个链表的首元结点（跳过头结点）
    let pa = A.next
    let pb = B.next

    // 新链表 C 的头结点
    const C = { next: null }
    let pc = C // pc 始终指向 C 的最后一个结点

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

    // 处理剩余的结点（pa 或 pb 其中一个不为空）
    pc.next = pa || pb

    return C // 返回带头结点的链表
}

// 引用传递案例
const referencePass = () => {
    // 构建一个简单链表
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
    console.log("起始 current:", current) // 应该是 value: 1
    // 第一次移动指针
    current = current.next
    console.log("第一次 current:", current) // 应该是 value: 2
    // 第二次移动指针
    current = current.next
    console.log("第二次 current:", current) // 应该是 value: 3
    // 验证原链表没变
    console.log("原始 head:", head)
}