export const insertIntoSortedArray = (arr, x) => {
    // 找插入位置
    let i = 0;
    while (i < arr.length && arr[i] < x) {
        i++;
    }
    // 插入元素
    arr.splice(i, 0, x); // splice(index, 0, value) 表示在 index 位置插入 value
    return arr;
}