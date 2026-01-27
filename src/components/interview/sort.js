/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // 三路快排核心：分为 < pivot、= pivot、> pivot 三部分
    const quickSortThreeWay = (arr, l, r) => {
        if (l >= r) return;

        // 随机选基准
        const randomIdx = Math.floor(Math.random() * (r - l + 1)) + l;
        [arr[l], arr[randomIdx]] = [arr[randomIdx], arr[l]];
        const pivot = arr[l];

        // 定义区域：[l, lt) < pivot；[lt, i) = pivot；(gt, r] > pivot
        let lt = l, i = l + 1, gt = r;
        while (i <= gt) {
            if (arr[i] < pivot) {
                [arr[i], arr[lt]] = [arr[lt], arr[i]];
                lt++;
                i++;
            } else if (arr[i] > pivot) {
                [arr[i], arr[gt]] = [arr[gt], arr[i]];
                gt--;
            } else {
                i++;
            }
        }

        // 仅递归处理 < 和 > 区域（= 区域已有序）
        quickSortThreeWay(arr, l, lt - 1);
        quickSortThreeWay(arr, gt + 1, r);
    };

    if (nums.length <= 1) return nums;
    quickSortThreeWay(nums, 0, nums.length - 1);
    return nums;
};




functionQuickSort(array, low, high){
    if(low<high) {
        const pivots = Qsort(array, low, high)
        functionQuickSort(array, low, pivots-1)
        functionQuickSort(array, pivots+1, high)
    }
}


Qsort(arr, low, high) {
    let pivot = arr[low]
    while(low<high){
        while(pivot<arr[high]&&low<high){
            high--
        }
        while(pivot>arr[low]&&low<high){
            low++
        }
        Swap(arr, low, high)
    }
    return l
}


// 快速排序



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    function QuickSort(arr, low, high) {
        if (low < high) {
            const pivots = Qsort(arr, low, high);
            QuickSort(arr, low, pivots - 1); 
            QuickSort(arr, pivots + 1, high); 
        }
    };

    function Qsort(arr, low, high) {
        let pivot = arr[low]; // Set pivot as the first element
        let l = low, h = high;
        
        while (l < h) {
            // Move h towards left until finding a smaller element than pivot
            while (arr[h] >= pivot && l < h) {
                h--;
            }
            Swap(arr, l, h); // Swap the found element with the pivot

            // Move l towards right until finding a larger element than pivot
            while (arr[l] <= pivot && l < h) {
                l++;
            }
            Swap(arr, l, h); // Swap the found element with the pivot
        }
        
        // Return the index where the pivot is now placed
        return l;
    }

    function Swap(arr, i, j) {
        // Swap elements at indices i and j in the array
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // Call the QuickSort on the entire array
    QuickSort(nums, 0, nums.length - 1);

    return nums; // Return the sorted array
};












/////// 三数之和

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 结果数组
    const result = [];
    const len = nums.length;
    // 边界条件：数组长度小于3，直接返回空
    if (len < 3) return result;
    // 1. 排序数组（核心：方便双指针移动+去重）
    nums.sort((a, b) => a - b);
    // 2. 遍历固定第一个元素 nums[i]
    for (let i = 0; i < len; i++) {
        // 优化：排序后如果第一个元素>0，后续和必>0，直接终止循环
        if (nums[i] > 0) break;
        // 去重：跳过和前一个元素重复的i（避免重复三元组）
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        // 双指针初始化：左指针在i右侧，右指针在数组末尾
        let left = i + 1;
        let right = len - 1;
        // 3. 双指针遍历找后两个数
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];  
            if (sum === 0) {
                // 找到和为0的三元组，加入结果
                result.push([nums[i], nums[left], nums[right]]);
                // 去重：跳过左指针重复值（避免同一组合重复添加）
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                // 去重：跳过右指针重复值
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                // 移动指针继续寻找下一个可能的组合
                left++;
                right--;
            } else if (sum < 0) {
                // 和太小，左指针右移增大数值
                left++;
            } else {
                // 和太大，右指针左移减小数值
                right--;
            }
        }
    }
    return result;
};











///
//////
/////// 三数之和
//////
///

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    function swap(array, left, right){
        let middle = array[left]
        array[left] = array[right]
        array[right] = middle
    }
    function quickSorts(array, leftVal, rightVal) {
        let left = leftVal
        let right = rightVal
        let pivot = array[left]
        while (left<right){
            while(left<right&&pivot<=array[right]){
                right--
            }
            swap(array,left,right)
            while(left<right&&pivot>=array[left]){
                left++
            }
            swap(array,left,right)
        }
        return right
    }
    function executeQuickSort(arr, left, right){
        if(left<right){
            let middleVal = quickSorts(arr, left, right)
            executeQuickSort(arr, left, middleVal-1)
            executeQuickSort(arr, middleVal+1, right)
        }
    }
    executeQuickSort(nums,0,nums.length-1)
    // 结果数组
    const result = [];
    const len = nums.length;
    ////////
    ///
    /// 三数之和为 0 核心算法
    ///
    ////////
    for (let i=0; i<len; i++) {
        if(nums[i]>0){
            break
        }
        if(nums[i]===nums[i-1]&&i>1){
            continue
        }
        let left = i+1
        let right = len-1
        while(left<right) {
            let sum = nums[i] + nums[left] + nums[right]
            if(sum===0){
                result.push([nums[i], nums[left], nums[right]])
                while(left < right && nums[left] === nums[left + 1]){
                    left++
                }
                while(left < right && nums[right] === nums[right - 1]){
                    right--
                }
                // ③ 真正移动指针，进入下一次搜索
                left++
                right--
            }else if(sum<0){
                left++
            }else{
                right--
            }
        }
    }
    return result;
};



/////////
//////
///   26. 删除排序数组中的重复项
//////
/////////

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length<0) return
    let slow=0
    for(let i=1;i<nums.length;i++){
        if(nums[i]!==nums[slow]){
            slow++
            nums[slow] = nums[i]
        }
    }
    return slow+1
};





////
////
//最长公共子串
///
///
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return ""
    
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i]
        // 扫描后续数组中的 字符串
        for (let j = 1; j < strs.length; j++) {
            // strs[j][i] 表示第 j 个字符串的第 i 个字符
            if (i >= strs[j].length || strs[j][i] !== char) {
                return strs[0].slice(0, i)
            }
        }
    }
    
    return strs[0]
}




////
//
// 165. 比较版本号
//
////

var compareVersion = function(version1, version2) {
    const v1 = version1.split('.').map(num => parseInt(num, 10))
    const v2 = version2.split('.').map(num => parseInt(num, 10))
    
    const maxLen = Math.max(v1.length, v2.length)
    
    for (let i = 0; i < maxLen; i++) {
        const num1 = i < v1.length ? v1[i] : 0
        const num2 = i < v2.length ? v2[i] : 0
        
        if (num1 > num2) return 1
        if (num1 < num2) return -1
    }
    
    return 0
};

/////
/////
/////
/////
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let ver1 = version1.split('.').map(num=>parseInt(num,10))
    let ver2 = version2.split('.').map(num=>parseInt(num,10))
    let maxLen = Math.max(ver1.length,ver2.length)
    for(let i=0;i<maxLen;i++){
        let set1 = ver1[i] ? ver1[i] : 0
        let set2 = ver2[i] ? ver2[i] : 0

        if(set1>set2){
            return 1
        }else if(set1<set2){
            return -1
        }
    }
    return 0
};




///
///
///
///
///
///

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
   let node = new ListNode(0)
   node.next = head
   let fast = node
   let slow = node
   for(let i=0;i<=n;i++){
    fast=fast.next
   }
   while(fast){
    fast=fast.next
    slow=slow.next
   }
   slow.next=slow.next.next
   return node.next
};




var generateParenthesis = function(n) {
  const result = []

  function backtrack(path, left, right) {
    // 终止条件
    if (left === n && right === n) {
      result.push(path)
      return
    }

    // 在原有基础上不断的尝试加左括号
    if (left < n) {
      backtrack(path + '(', left + 1, right)
    }

    // 上述加完左括号后，在此基础上，加右括号，--------- 因为必须有左括号，才能加右括号
    if (left > right) {
      backtrack(path + ')', left, right + 1)
    }

  }

  backtrack('', 0, 0)
  return result
}


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(n<=0) return []
    let current = []
    function countParenthesis(output, left, right){
        if(n===left&&n===right){
            current.push(output)
            return 
        }
        if(left<n){
            countParenthesis(output+'(', left+1, right)
        }
        if(left>right){
            countParenthesis(output+')', left, right+1)
        }
    }
    countParenthesis('',0,0)
    return current
};




////
// 
// 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1          
//
////

var firstUniqChar = function(s) {
    const map = new Map()

    // 第一次遍历：统计次数
    for (const ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }

    // 第二次遍历：找第一个次数为 1 的
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i
        }
    }

    return -1
}





/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj = new Map()
    for(const iter of s){
        obj.set(iter, (obj.get(iter) || 0) + 1)
    }
    for(let i=0;i<s.length;i++){
        if(obj.get(s[i])===1){
            return i
        }
    }
    return -1
};


////
//
// uniquePaths
//
////
var uniquePaths = function(m, n) {
    const dp = Array.from({ length: m }, () => Array(n).fill(1))

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
            // 计算到 dp[m-1][n-1] 截止
        }
    }

    return dp[m-1][n-1]
};


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let right = 0
    let left = 0
    let minLen = 100000
    for(right=0;right<nums.length;right++){
        sum += nums[right]
        while(target<=sum){
            minLen = Math.min(minLen, right-left+1)
            sum -= nums[left]
            left++
        }
    }
    return minLen
};



//15. 三数之和




// 415 两数之和

var addStrings = function(num1, num2) {
    let i = num1.length - 1
    let j = num2.length - 1
    let carry = 0
    let res = ''

    while (i >= 0 || j >= 0 || carry) {
        const n1 = i >= 0 ? num1.charCodeAt(i--) - 48 : 0
        const n2 = j >= 0 ? num2.charCodeAt(j--) - 48 : 0
        const sum = n1 + n2 + carry
        res = (sum % 10) + res
        carry = Math.floor(sum / 10)
    }

    return res
}

///
///
//// LeetCode 43：字符串相乘（Multiply Strings）
///
///
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'

  const m = num1.length
  const n = num2.length
  const res = new Array(m + n).fill(0)

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const mul =
        (num1.charCodeAt(i) - 48) *
        (num2.charCodeAt(j) - 48)

      const sum = mul + res[i + j + 1] // 当前乘积上一次计算的进位

      res[i + j + 1] = sum % 10 //保留当前的结果
      res[i + j] += Math.floor(sum / 10)// 留给下一次进位的
    }
  }

  // 去掉前导 0
  while (res[0] === 0) {
    res.shift()
  }

  return res.join('')
}






////
///
// 最小长度子数组
///
////
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let right = 0
    let left = 0
    let minLen = 100000000000000000000
    let sum = 0
    for(right=0;right<nums.length;right++){
        sum += nums[right]
        while(target<=sum){
            minLen = Math.min(minLen, right-left+1)
            sum -= nums[left]
            left++
        }
    }
    if(minLen===100000000000000000000) return 0
    return minLen
};



////
//
//
//
////
示例 1:

输入: nums = [1,2,3,4]
输出: [24,12,8,6]
示例 2:

输入: nums = [-1,1,0,-3,3]
输出: [0,0,9,0,0]

var productExceptSelf = function(nums) {
    const n = nums.length
    const answer = new Array(n)

    // 1. 前缀乘积
    let prefix = 1
    for (let i = 0; i < n; i++) {
        answer[i] = prefix
        prefix *= nums[i]
    }

    // 2. 后缀乘积
    let suffix = 1
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffix
        suffix *= nums[i]
    }

    return answer
}





// 18.四数之和

var fourSum = function(nums, target) {
  const n = nums.length
  const res = []

  if (n < 4) return res

  // 1. 排序
  nums.sort((a, b) => a - b)

  // 2. 第一层循环：固定 a
  for (let a = 0; a < n - 3; a++) {
    // 去重 a
    if (a > 0 && nums[a] === nums[a - 1]) continue

    // 3. 第二层循环：固定 b
    for (let b = a + 1; b < n - 2; b++) {
      // 去重 b
      if (b > a + 1 && nums[b] === nums[b - 1]) continue

      let left = b + 1
      let right = n - 1

      // 4. 双指针找 c 和 d
      while (left < right) {
        const sum = nums[a] + nums[b] + nums[left] + nums[right]

        if (sum === target) {
          res.push([nums[a], nums[b], nums[left], nums[right]])

          // 去重 c
          while (left < right && nums[left] === nums[left + 1]) left++
          // 去重 d
          while (left < right && nums[right] === nums[right - 1]) right--

          left++
          right--
        } else if (sum < target) {
          left++
        } else {
          right--
        }
      }
    }
  }

  return res
}


////242 有效字母异位词
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false

  const map = {}

  // 统计 s 中字符出现次数
  for (let ch of s) {
    map[ch] = (map[ch] || 0) + 1
  }

  // 用 t 抵消
  for (let ch of t) {
    if (!map[ch]) return false
    map[ch]--
  }

  return true
}



// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

// 你可以认为每种硬币的数量是无限的。

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}



// 
/***  



***/
// 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mapSet = new Map()
    for(let i=0;i<nums.length;i++){
        findTarget = target - nums[i]
        if(mapSet.has(findTarget)){
            return [mapSet.get(findTarget),i]
        }
        mapSet.set(nums[i],i) //值 与 下标值
    }
};



