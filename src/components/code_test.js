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
// BM15 删除有序链表中重复元素（1）
// BM16 删除有序链表中重复元素（2）

// BM1 二分查找（1）----（待命）
// BM2 二维数组中的查找
// BM3 寻找峰值
// BM4 数组中的逆序对
// BM5 旋转数组的最小数字
// BM6 比较版本号


var compareVersion = function(version1, version2) {
  let v1 = version1.split('.');
  let v2 = version2.split('.');
  let n = Math.max(v1.length, v2.length);

  for (let i = 0; i < n; i++) {
    let num1 = i < v1.length ? parseInt(v1[i], 10) : 0;
    let num2 = i < v2.length ? parseInt(v2[i], 10) : 0;

    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }
  return 0;
};