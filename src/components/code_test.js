// https://www.nowcoder.com/exam/oj?questionJobId=10&subTabName=online_coding_page
// https://ttsreader.com/zh/ 英文阅读

// BM1 链表反转
// BM2 链表内指定区间反转
// BM3 链表中结点每K个一组翻转
// BM4 合并两个排序的链表
// BM6 判断链表中是否有环
// BM7 链表中环的入口结点
// BM8 链表中倒数K个结点
// BM9 删除链表倒数第n个结点 
// BM10 两个链表的第一个公共结点
// BM11 链表相加（二）
// BM12 单链表排序
// BM13 判断链表是否为回文结构
// BM14 链表的奇偶重排
// BM15 删除有序链表中重复元素（1）----(待)
// BM16 删除有序链表中重复元素（2）----(待)

// BM1 二分查找（1）----（待命）
// BM2 二维数组中的查找
// BM3 寻找峰值
// BM4 数组中的逆序对
// BM5 旋转数组的最小数字
// BM6 比较版本号


// BM1 链表反转
/**
 * 反转单链表
 *
 * @param head ListNode类 链表的头结点
 * @return ListNode类 反转后链表的新头结点
 */
function ReverseList(head) {
    // 如果链表为空或只有一个节点，直接返回
    if (!head || !head.next) {
        return head;
    }

    let prev = null; // 前一个节点
    let current = head; // 当前节点

    while (current) {
        const next = current.next; // 保存下一个节点
        current.next = prev; // 反转当前节点的指针
        prev = current; // 移动 prev 到当前节点
        current = next; // 移动 current 到下一个节点
    }

    // 循环结束后，prev 指向原链表的最后一个节点，即新链表的头
    return prev;
}

// BM2 链表内指定区间反转

