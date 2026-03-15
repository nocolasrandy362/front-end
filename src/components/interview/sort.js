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


// 14.最长公共前缀

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return ""   // 防止空数组
    let compare = strs[0] //获取 数组 中 第一个值，作为比较的基准
    for(let i=0;i<compare.length;i++){ // 逐个遍历基准值的元素
        for(let j=1;j<strs.length;j++){ //遍历数组（从第二个值 到 最后一个值）
            if(i>strs[j].length || compare[i]!==strs[j][i]){
                return compare.slice(0,i)   //slice 切片 索引 0 到 i - 1 的元素
            }
        }
    }
    return compare //返回基准全部
};



// 300 最长递增子序列 【必须复习的版本】！！！！！！！！！！！！！！！！！！！！！！！！！！！
var lengthOfLIS = function(nums) {
  const tails = []

  for (let num of nums) {
    let left = 0, right = tails.length

    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (tails[mid] < num) {
        left = mid + 1
      } else {
        right = mid
      }
    }

    tails[left] = num
  }

  return tails.length
}




/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) return s

  let start = 0
  let maxLen = 1

  const expand = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
    }
    return right - left - 1
  }

  for (let i = 0; i < s.length; i++) {
    const len1 = expand(i, i)     // 奇数回文
    const len2 = expand(i, i + 1) // 偶数回文
    const len = Math.max(len1, len2)

    if (len > maxLen) {
      maxLen = len
      start = i - Math.floor((len - 1) / 2)
    }
  }

  return s.substring(start, start + maxLen)
};






// 49. 字母异位词分组

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(!strs.length) return []
    let save = {}
    for(let item of strs){
        let curr = item.split('').sort().join('')
        if(!save[curr]){
            save[curr] = []
        }
        save[curr].push(item)
    }
    // return [...save.values()]
    return Object.values(save)

};


// pop()与shift()区别

// 1️⃣ pop()
// let arr = [1, 2, 3];
// let last = arr.pop();
// console.log(last); // 3
// console.log(arr);  // [1, 2]


// 作用：移除 数组最后一个元素

// 返回值：被移除的元素

// 原数组会被修改

// 类似 栈（Stack）的出栈操作）

// 2️⃣ shift()
// let arr = [1, 2, 3];
// let first = arr.shift();
// console.log(first); // 1
// console.log(arr);   // [2, 3]


// 作用：移除 数组第一个元素

// 返回值：被移除的元素

// 原数组会被修改

// 类似 队列（Queue）的出队操作）


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // 获取 nums[i] 之前数的所有乘积
    let len = nums.length
    let before = new Array(len)
    let sumSummary = 1
    before[0]=1
    for(let i=1;i<len;i++) {
        sumSummary = sumSummary*nums[i-1]
        before[i] = sumSummary
    }

    let after = new Array(len)
    let afterSummary = 1
    after[len-1]= 1
    for(let i=len-2;i>=0;i--) {
        after[i] = after[i+1] * nums[i+1]
    }
    let summary = new Array(len)
    for(let i=0;i<len;i++){
        summary[i] = before[i]*after[i]
    }
    return summary
};



var productExceptSelf = function(nums) {
    const len = nums.length
    const before = new Array(len)
    const after = new Array(len)
    const result = new Array(len)

    // 前缀积
    before[0] = 1
    for (let i = 1; i < len; i++) {
        before[i] = before[i - 1] * nums[i - 1]
    }

    // 后缀积
    after[len - 1] = 1
    for (let i = len - 2; i >= 0; i--) {
        after[i] = after[i + 1] * nums[i + 1]
    }

    // 合并
    for (let i = 0; i < len; i++) {
        result[i] = before[i] * after[i]
    }

    return result
}




var lowestCommonAncestor = function(root, p, q) {
    // 这个终止条件的本质是：
    // 一旦找到目标，就停止继续向下找，并把结果往上传。
    if(root===p||root===q||!root){
        return root
    }
    let leftVal = lowestCommonAncestor(root.left, p, q)
    let rightVal = lowestCommonAncestor(root.right, p, q)

    if(leftVal && rightVal){
        return root
    } else{
       leftVal ? leftVal : rightVal
    }
};


//
var maxDepth = function(root) {
    let count = [root]
    let countDep = 0
    while(count.length){
        countDep++
        let len = count.length
        for(let i=0;i<len;i++){
            let output = count.shift()
            if(output.left){
                count.push(output.left)
            }
            if(output.right){
                count.push(output.right)
            }
        }
    }
    return countDep
};

// 两数之和
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

var twoSum = function(numbers, target) {
    let arrays = new Map()
    for(let i=0;i<numbers.length;i++) {
        let targetOther = target - numbers[i]
        if(arrays.has(targetOther)){
            return [i,arrays.get(targetOther)]
        }
        arrays.set(numbers[i],i)
    }
    return -1
};


// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组是数组中的一个连续部分。
// ----- 到当前位置为止，要么把前面的和接着加上，要么从当前元素重新开始。-------
var maxSubArray = function(nums) {
    let currMax = nums[0]
    let finMax = nums[0]
    for(let i=1;i<nums.length;i++){
        currMax = Math.max(nums[i],nums[i]+currMax)
        finMax = Math.max(finMax,currMax)
    }
    return finMax
};


// leetcode 53
// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组是数组中的一个连续部分。
var maxSubArray = function(nums) {
    let currMax = nums[0]
    let finalMax = nums[0]
    for(let i=1;i<nums.length;i++){
        currMax = Math.max(nums[i], currMax+nums[i])
        finalMax = Math.max(currMax,finalMax)
    }
    return finalMax
};


// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
// 示例 1：
// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]


var generateParenthesis = function(n) {
    let final = []
    // sum表示 当前括号的 输入值
    function countPar(sum,left,right){
        if(left===n && right===n){
            final.push(sum)
            return
        }
        if(left<n){
            countPar(sum+'(',left+1,right)
        }
        if(left>right){
            countPar(sum+')',left,right+1)
        }
    }
    countPar('',0,0)
    return final
};



// 两个数相加

var addStrings = function(num1, num2) {
    let l1 = num1.length-1
    let l2 = num2.length-1
    let res = ''
    let add = 0
    while(l2>=0 || l1>=0|| add!==0){
       let cur1 = 0
       let cur2 = 0
       let curr = 0
       if(l1>=0){
        cur1 = num1[l1] - '0' 
       }
       if(l2>=0){
        cur2 = num2[l2] - '0' 
       }
       let sum = cur1+cur2+add
       l1--
       l2--
       add = Math.floor(sum/10) 
       curr = sum % 10
       res = curr + res
    }
    return res
};



var addStrings = function(num1, num2) {
    let res = ''
    let len1 = num1.length-1
    let len2 = num2.length-1
    let add = 0
    let curr = 0
    while(add!==0||len1>=0||len2>=0){
        let cur1 = 0
        let cur2 = 0
        let sum = 0
        if(num1[len1]>0){
            cur1 = num1[len1]-'0'
        }
        if(num2[len2]>0){
            cur2 = num2[len2]-'0'
        }
        len1--
        len2--
        sum = cur1 + cur2 + add
        add =  Math.floor(sum/10)
        curr = sum%10
        res = curr + res
    }
    return res
};


// 给定一个含有 n 个正整数的数组和一个正整数 target 。
// 找出该数组中满足其 总和大于等于 target 的长度最小的 子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

var minSubArrayLen = function(target, nums) {
    let minLen = 10000000
    let sum=0
    let left = 0
    for(let i=0;i<nums.length;i++){
        sum += nums[i]
        while(sum>=target){
            minLen = Math.min(minLen,i-left+1)
            sum -= nums[left]
            left++
        }
    }
    if(minLen === 10000000){
        return 0
    }
    return minLen
};


// 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除了 nums[i] 之外其余各元素的乘积 。
// 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
var productExceptSelf = function(nums) {
    let len = nums.length
    // 计算当前位置全部前缀元素的乘积
    let before = new Array(len)
    before[0] = 1
    let beforeProduct = 1
    for(let i=1;i<len;i++){
        beforeProduct *= nums[i-1]
        before[i] = beforeProduct
    }
    // 计算当前位置全部后缀元素的乘积
    let after = new Array(len)
    after[len-1] = 1
    let afterProduct = 1
    for(let i=len-2;i>=0;i--){
        afterProduct *= nums[i+1]
        after[i] = afterProduct
    }
    // 计算当前位置全部 前缀 后缀 元素的乘积
    let sum = new Array(len)
    for(let i=0;i<len;i++){
        sum[i]= before[i]*after[i]
    }
    return sum
};



/////// 16. 最接近的三数之和
// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个在 不同下标位置 的整数，使它们的和与 target 最接近。
// 返回这三个数的和
var threeSumClosest = function(nums, target) {
    let minSum = 100000000
    nums.sort((a,b)=>a-b)
    let sum = 0
    for(let i=0;i<nums.length;i++){
        let left = i+1
        let right = nums.length-1
        while(left<right){
            sum = nums[i] + nums[left] +nums[right]
            if(sum===target){
                return target
            }
            if(Math.abs(minSum-target) > Math.abs(sum-target)){
                minSum = sum
            }
            if(sum<target){
                left++
            }
            if(sum>target){
                right--
            }
        }
    }
    return minSum
};



// 18 四数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b)=>a-b)
    let res = []
    // nums[i]与右侧三数之和，所以设置 i<nums.length-3 
    for(let i=0;i<nums.length-3;i++){
        if(nums[i]===nums[i-1]&&i>0) continue
        // nums[b]与右侧两数之和，设置 b<nums.length-2
        for(let b=i+1;b<nums.length-2;b++){
            if(nums[b]===nums[b-1]&&b>i+1) continue
            let left = b+1
            let right = nums.length-1
            while(left<right){
                if (nums[i]+nums[b]+nums[left]+nums[right]===target){
                    res.push([nums[i],nums[b],nums[left],nums[right]])
                    while(nums[left]===nums[left+1]&&left<right) left++
                    while(nums[right]===nums[right-1]&&left<right) right--
                    left++
                    right--
                } else if(nums[i]+nums[b]+nums[left]+nums[right]<target){
                    left++
                } else{
                    right--
                }
            }
        }
    }
    return res
};




// 三数之和
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let res = []
    for(let i=0;i<nums.length-1;i++){
        let left = i+1
        let right = nums.length-1
        if(nums[i-1]===nums[i]){
            continue
        }
        if(nums[i]>0){
            break
        }
        while(left<right){
            let sum = nums[i]+nums[left]+nums[right]
            if(sum===0){
                res.push([nums[i],nums[left],nums[right]])
                while(left<right && nums[left]===nums[left+1]){
                    left++
                }
                while(left<right && nums[right]===nums[right-1]){
                    right--
                }
                left++
                right--
            }
            if(sum>0){
                right--
            }
            if(sum<0){
                left++
            }
        }
        
    }
    return res
};




// 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1
/**
 * @param {string} s
 * @return {number}
 */
// 先统计每个字符出现次数，再找第一个只出现一次的字符。
var firstUniqChar = function(s) {
    let dataset = new Map()
    for(let i=0;i<s.length;i++){
        // dataset.get(s[i]) -表示- 从 Map 中取出 key 为 s[i] 的值
        dataset.set(s[i],(dataset.get(s[i]) || 0)+1)
    }
    for(let i=0;i<s.length;i++){
        if(dataset.get(s[i])===1){
            return i
        }
    }
    return -1
};




// 242. 有效的字母异位词
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的 字母异位词。
/**
 * 
输入: s = "anagram", t = "nagaram"
输出: true


输入: s = "rat", t = "car"
输出: false
 */

// 通过哈希表记录字符频率，再用另一个字符串进行数量抵消。
var isAnagram = function(s, t) {
    if(s.length!==t.length) return false
    let map = {}
    for(let item of s){
        map[item] = (map[item] || 0)+1
    }
    for(let unify of t){
        // map[unify] 不存在结果是 undefined
        if(!map[unify]) return false
        map[unify]--
    }
    return true
};


var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let hashMap = new Map()
    // 第一步：统计 s 中字符出现次数
    for (let char of s) {
        hashMap.set(char, (hashMap.get(char) || 0) + 1)
    }
    // 第二步：抵消 t 中字符
    for (let char of t) {
        if (!hashMap.has(char) || hashMap.get(char) === 0) {
            return false
        }
        hashMap.set(char, hashMap.get(char) - 1)
    }

    return true
}



// 128.最长连续序列
// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
// 示例 1：
// 输入：nums = [100,4,200,1,3,2]
// 输出：4
// 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
// 示例 2：
// 输入：nums = [0,3,7,2,5,8,4,6,0,1]
// 输出：9
// 示例 3：
// 输入：nums = [1,0,1,2]
// 输出：3
// 
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // 此处需要用 Set 进行重置
    let numsArray = new Set(nums)
    let maxLen = 0
    let currLen = 0
    for(let item of numsArray){
        currLen = 0
        if(!numsArray.has(item-1)){
            let currVal = item
            while(numsArray.has(currVal)){
                currLen++
                currVal++
            }
        }
        maxLen = Math.max(currLen,maxLen)
    }
    return maxLen
};



// 5.最长回文子串
/**
 * 给你一个字符串 s，找到 s 中最长的 回文 子串。
 * @param {string} s
 * @return {string}
 */











var longestPalindrome = function(s) {
    function expand(left,right){
        while(left>=0 && right<s.length && s[left]===s[right]){
            left--
            right++
        }
        return right-left-1
    }
    let finmax = 0
    for(let i=0;i<s.length;i++){
        let jishu = expand(i,i)
        let oushu = expand(i,i+1)
        let maxlen = Math.max(jishu,oushu)
        if(maxlen > finmax){
            finmax = maxlen
            start = i - Math.floor((finmax - 1) / 2)
        }
    }
    return s.substring(start, start + finmax)
};

// 5. 最长回文子串
var longestPalindrome = function(s) {
    // 遍历下标获取值
    function countLen(left,right){
        while(left>=0 && right<s.length && s[left]===s[right]){
            left--
            right++
        }
        return right-left-1
    }
    let finmax = 0
    let start = 0
    for(let i=0;i<s.length;i++){
        let jishu = countLen(i,i)
        let oushu = countLen(i,i+1)
        let len = Math.max(jishu,oushu)
        if(len>finmax){
            finmax = len
            start = i - Math.floor((finmax-1) / 2)
        }
    }
    return s.substring(start,start+finmax)
};




// 20.有效的括号
var isValid = function(s) {
    let save = []
    let map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    for(let item of s){
        // 如果是左括号 就 进入
        if(map[item]){
            save.push(item)
        }
        // 不是左括号，pop出栈比较值
        else{
            let output = save.pop()
            // 出来的值 与 当前输入的值 匹配不上，返回false
            if(map[output]!==item){
                return false
            }
        }
    }
    if(save.length===0) return true
    return false
};





var isValid = function(s) {
    let count = []
    let arrMap = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    for(let item of s){
        if(arrMap[item]){
            count.push(item)
        }else{
            let output = count.pop()
            if(arrMap[output]!==item){
                return false
            }
        }
    }
    if(count.length>0){
        return false
    }
    return true
};



// 如果没有相交节点，两个指针都会走过 A + B 长度 ，它们最终都会同时为 null
// pa === pb === null → 循环结束 → 返回 null

var getIntersectionNode = function(headA, headB) {
    let pa = headA
    let pb = headB
    while(pa!==pb){
        pa = pa ? pa.next : headB
        pb = pb ? pb.next : headA
    }
    return pa
};




// 234. 回文链表
var isPalindrome = function(head) {
    if(!head){
        return null
    }
    let slow = head
    let fast = head
    let reslow = head
    while(fast&&fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    // 当前的slow节点需要保留
    let pre = null
    let curr = slow
    while(curr){
        let save = curr.next
        curr.next = pre
        pre = curr
        curr = save
    }
    while(pre){
        if(pre.val!==reslow.val){
            return false
        }
        pre = pre.next
        reslow = reslow.next
    }
    return true
};




// 
// 49. 字母异位词分组
// 
var groupAnagrams = function(strs) {
    if(!strs.length) return []
    let save = {}
    for(let item of strs){
        let curr = item.split('').sort().join('')
        if(!save[curr]){
            save[curr] = []
        }
        save[curr].push(item)
    }
    // return [...save.values()]
    return Object.values(save)
}

// | 原始字符串 (`item`) | 排序后特征 (`curr`) | 哈希表 `save` 的变化过程 |
// | :--- | :--- | :--- |
// | "eat" | `"aet"` | `{ "aet": ["eat"] }` |
// | "tea" | `"aet"` | `{ "aet": ["eat", "tea"] }` (命中已有键) |
// | "tan" | `"ant"` | `{ "aet": [...], "ant": ["tan"] }` (新键) |
// | "ate" | `"aet"` | `{ "aet": ["eat", "tea", "ate"], "ant": [...] }` |
// | "nat" | `"ant"` | `{ "aet": [...], "ant": ["tan", "nat"] }` |
// | "bat" | `"abt"` | `{ "aet": [...], "ant": [...], "abt": ["bat"] }` |
// 




///
// 防抖函数
///
function debounce(fn, delay = 300) {
  let timer = null      // 定时器
  return function(...args) {
    // 每次触发事件，先清掉上一次的定时器
    if (timer) clearTimeout(timer)
    // 重新设置定时器
    timer = setTimeout(() => {
      fn(...args)       // 延迟执行函数
    }, delay)
  }
}


const handleInput = debounce((val) => {
  console.log('搜索:', val)
}, 500)

// 模拟用户快速输入：a → ab → abc
handleInput('a')     // 设置延迟500ms
handleInput('ab')    // 上一个延迟被取消，重新计时
handleInput('abc')   // 上一个延迟被取消，重新计时
// 500ms后只执行一次：console.log('搜索: abc')




/// 
// 实现节流函数
/// 
function throttle(fn, delay = 300) {
  let lastTime = 0  // 记录上一次执行时间
  return function(...args) {
    const now = Date.now()
    if (now - lastTime > delay) {
      fn(...args)
      lastTime = now
    }
  }
}
const handleScroll = throttle(() => {
  console.log('滚动执行')
}, 1000)
window.addEventListener('scroll', handleScroll)


//               https://xie.infoq.cn/article/d43ce8badc75c9fd13e7ece1d
//// 
///
//  promise.all 的 实现
/// 
//// 
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    // --- Start ---
    const result = []
    let count = 0

    if (promises.length === 0) {
      resolve([])
      return
    }
    promises.forEach((p, index) => {
      // 表示的是分别对每个任务进行处理吗  
      Promise.resolve(p).then(
        (value) => {
          result[index] = value  // 保证顺序
          count++

          if (count === promises.length) {
            resolve(result)
          }
        },
        (err) => {
          reject(err)  // 只要一个失败直接结束
        }
      )
    })
    // --- End ---
  })
}
myPromiseAll([p1, p2, p3])




var coinChange = function(coins, amount) {
    // 因为从 0 元开始的
    let arrayCount = Array(amount+1).fill(Infinity)
    arrayCount[0] = 0
    // arrayCount[i] 表示凑出 i 金额需要的 面值数
    for(let i=0;i<=amount;i++){
        for(let item of coins){
            // 如果当前的 币值 小于等于 凑出的目标值
            if(item<=i){
                arrayCount[i] = Math.min(arrayCount[i], arrayCount[i-item]+1)
            }
        }
    }
    if(arrayCount[amount]===Infinity){
        return -1
    }
    return arrayCount[amount]
};






// 
// 560. 和为 K 的子数组
// 
// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
// 子数组是数组中元素的连续非空序列。


// 示例 1：
// 输入：nums = [1,1,1], k = 2
// 输出：2

// 示例 2：
// 输入：nums = [1,2,3], k = 3
// 输出：2

var subarraySum = function(nums, k) {
    const map = new Map();
    map.set(0, 1);
    let currentSum = 0;
    let count = 0;
    
    for (let num of nums) {
        currentSum += num;
        const target = currentSum - k;
        // 当前的前缀和 减去 前面的前缀和（后面的值减去前面的值等于 K 目标值）
        if (map.has(target)) {
            count += map.get(target);
        }
        map.set(currentSum, (map.get(currentSum) || 0) + 1);
    }
    
    return count;
};






// 示例 1:

// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
//  示例 2:

// 输入: s = "abab", p = "ab"
// 输出: [0,1,2]
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const n = s.length;
    const m = p.length;
    const result = [];
    if (n < m) return result;

    const need = new Array(26).fill(0);
    const window = new Array(26).fill(0);

    // m 表示 目标窗口的 长度
    // 数组下标表示的字母，下标对应的值表示频率
    for (let i = 0; i < m; i++) {
        // p.charCodeAt(i) 是 JavaScript 中的一个字符串方法，它的意思是：
        // “获取字符串 p 中第 i 个字符对应的 ASCII 码（数字）
        need[p.charCodeAt(i) - 97]++;     // 'a' 的 ASCII 是 97
        window[s.charCodeAt(i) - 97]++; //s.charCodeAt(0)  s.charCodeAt(1)  s.charCodeAt(2)  s.charCodeAt(3)
    }

    if (arraysEqual(need, window)) {
        result.push(0);
    }
    for (let i = m; i < n; i++) {
        const inCharIndex = s.charCodeAt(i) - 97;
        window[inCharIndex]++;  // 相应的字母的数量
        const outCharIndex = s.charCodeAt(i - m) - 97;
        window[outCharIndex]--;  // 相应的字母的数量
        if (arraysEqual(need, window)) {
            result.push(i - m + 1);
        }
    }
    return result;
};

// 辅助函数：比较两个数组是否完全相等
function arraysEqual(a, b) {
    // 每种字母的数量
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}







// 
// 
// 34. 查找首尾位置
// 
// 
function searchRange(nums, target) {
    function findLeft(nums, target) {
        let left = 0, right = nums.length - 1;
        let index = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if(nums[mid] === target){
                index = mid
                right = mid - 1
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return index !== -1 ? index : left;
    }

    function findRight(nums, target) {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return right;
    }

    const leftIndex = findLeft(nums, target);
    const rightIndex = findRight(nums, target);

    // 检查是否存在 target
    if (leftIndex <= rightIndex && nums[leftIndex] === target && nums[rightIndex] === target) {
        return [leftIndex, rightIndex];
    }
    return [-1, -1];
}



// 
// 上述代码 findLeft 部分 对下面部分对 等价
// 
function findLeft(nums, target) {
    let left = 0, right = nums.length - 1;
    let index = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > target) {
            right = mid - 1;
        } else if(nums[mid] === target){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}







// /**
//  * @param {number[]} nums
//  * @return {number[]}
//   912.快速排序
//  */
var sortArray = function(nums) {
    function swap(nums,left,right){
        let temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
    }
    function quickSort(nums,left,right){
        let compare = nums[left]
        while(left<right){
            while(left<right && nums[right] >= compare){
                right--
            }
            swap(nums,left,right)
            while(left<right && nums[left] <= compare){
                left++
            }
            swap(nums,left,right)
        }
        return left
    }
    function execute(nums,left,right){
        // 递归边界条件 注意（易错！！！！）
        if (left >= right) return          // 注意此处 ！！！！
        let mid = quickSort(nums,left,right)
        execute(nums,mid+1,right)
        execute(nums,left,mid-1)
    }
    execute(nums,0,nums.length-1)
    return nums
};



/**
 * 26. 删除排序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let save = 0
    for(let i=1;i<nums.length;i++){
        if(nums[save]!==nums[i]){
            save++
            nums[save] = nums[i]
        }
    }
    return save+1
};


// 
// 
// 11. 盛最多水的容器
// 
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length-1
    let fin = 0
    while(left<right){
        let minHeight = Math.min(height[left],height[right])
        let curr = minHeight*(right-left)
        fin = Math.max(curr,fin)
        if(height[left]>height[right]){
            right--
        }else{
            left++
        }
    }
    return fin
};


//
// 283. 移动零
//
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let save = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[save] = nums[i]
            save++
        }
    }
    for(let j=save;j<nums.length;j++){
        nums[j] = 0
    }
    return nums
};



// 
// 
// 122. 买卖股票的最佳时机
// 
// 
var maxProfit = function(prices) {
    let sum = 0
    for(let i=0;i<prices.length;i++){
        if(prices[i+1]>prices[i]&&i+1<prices.length){
            sum += prices[i+1]-prices[i]
        }
    }
    return sum
};


// 
// 
// 70. 爬楼梯
// 
//
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<=2)return n
    let fir = 1 //爬到第一层
    let sec = 2 //爬到第二层
    let total = 0
    for(let i=3;i<=n;i++){
        total = fir + sec
        fir = sec //相对于当前的第一层（距离当前两级）
        sec = total //当对于当前的第二层（距离当前一级）
    }
    return sec
};


// 
// 198.打家劫舍
// 




// 
// 3. 无重复字符的最长子串
// 

var lengthOfLongestSubstring = function(s) {
    if(!s) return 0
    let maxLen = 1
    let dataset = new Set()
    let left = 0
    for(let i=0;i<s.length;i++){
        while(dataset.has(s[i])){
            dataset.delete(s[left])
            left++
        }
        dataset.add(s[i])
        maxLen = Math.max(maxLen,i-left+1) 
    }
    return maxLen
};







// 14. 最长公共前缀（简单）
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let compare = strs[0]
    for(let i=0;i<compare.length;i++){
        for(let j=1;j<strs.length;j++){
            if(strs[j][i]!==compare[i]){
                return compare.slice(0,i) //0 - i-1
            }
        }
    }
    return compare
};




//  165.比较版本号
// 关键代码
// version1.split('.').map(item=>parseInt(item,10))
// curr1 = l1[i] ? l1[i] : 0
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    // 将字符串解析为10进制整数
    // split('.') 返回的是一个数组
    let l1 = version1.split('.').map(item=>parseInt(item,10))
    let l2 = version2.split('.').map(item=>parseInt(item,10))
    let maxLen = Math.max(l1.length,l2.length)
    for(let i=0;i<maxLen;i++){
        let curr1 = l1[i] ? l1[i] : 0
        let curr2 = l2[i] ? l2[i] : 0
        if(curr1>curr2){
            return 1
        }else if(curr1<curr2){
            return -1
        }
    }
    return 0
};


// 344. 反转字符串 
// 关键代码
// let i=0;i<s.length/2;i++
// temp = s[s.length-1-i]
// 易错点
var reverseString = function(s) {
    for(let i=0;i<s.length/2;i++){
        let temp = s[s.length-1-i]
        s[s.length-1-i] = s[i]
        s[i] = temp
    }
    return s
};




// 
// 19. 删除链表的倒数第 N 个节点（中等）
// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 关键：声明一个节点 指向头节点；fast slow 双指针; while(fast&&fast.next)
var removeNthFromEnd = function(head, n) {
    let newNode = new ListNode(0)
    if(!head.next){
        return null
    }
    newNode.next = head
    let slow = newNode
    let fast = newNode
    for(let i=0;i<n;i++){
        fast = fast.next
    }
    while(fast && fast.next){
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return newNode.next
};



//
///
//// 206. 反转链表
///
//
// 关键：反转链表需要三个节点 pre ， curr ，save;  while(curr); head.next = null
var reverseList = function(head) {
    if(!head) return null
    let pre = head
    let curr = head.next
    head.next = null
    // 关键：反转链表需要三个节点 pre ， curr ，save
    while(curr){
        let save = curr.next
        curr.next = pre
        pre = curr
        curr = save
    }
    return pre
};





// 
/// 
//// 142.环形链表 II（中等）
/// 
// 
/**
给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 
为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
不允许修改 链表。
 */

/**
 关键代码 fast slow save ；while(fast && fast.next){
 */
var detectCycle = function(head) {
    if(!head) return null
    let fast = head
    let slow = head
    let save = head
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        if(fast===slow){
            while(save!==slow){
                save=save.next
                slow=slow.next
            }
            return slow
        }
    }
    return null
};


// 21. 合并两个有序链表
// 关键：let newList = new ListNode(-1)
/***
 *  let l1_index = list1
    let l2_index = list2
    let newList = new ListNode(-1)
    let indexVal = newList
// 易错：if(l1_index.val > l2_index.val) else ,  而不是 if  if
 */

var mergeTwoLists = function(list1, list2) {
    let l1_index = list1
    let l2_index = list2
    let newList = new ListNode(-1)
    let indexVal = newList
    while(l1_index && l2_index){
        if(l1_index.val > l2_index.val){
            indexVal.next = l2_index
            l2_index = l2_index.next
            indexVal = indexVal.next
        } else{
            indexVal.next = l1_index
            l1_index = l1_index.next
            indexVal = indexVal.next
        }
    }
    if(l1_index){
        indexVal.next = l1_index
    }
    if(l2_index){
        indexVal.next = l2_index
    }
    return newList.next
};





var mergeTwoLists = function(list1, list2) {
    let index1 = list1
    let index2 = list2
    let save = new ListNode(-1)
    let index = save
    while(index1 && index2){
        if(index1.val >= index2.val){
            index.next = index2
            index = index.next
            index2 = index2.next
        }
        else if(index1.val < index2.val){
            index.next = index1
            index = index.next
            index1 = index1.next
        }
    }
    if(index1){
        index.next = index1
    }
    if(index2){
        index.next = index2
    }
    return save.next
};


// 102. 二叉树的层序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var levelOrder = function(root) {
    if(!root) return []
    let fin = []
    let count = [root]
    while(count.length){
        let currLen = count.length
        let currArr = []
        while(currLen){
            let output = count.shift()
            currArr.push(output.val)
            if(output.left){
                count.push(output.left)
            }
            if(output.right){
                count.push(output.right)        
            }
            currLen--
        }
        fin.push(currArr)
    }
    return fin
};






// 
// 101. 对称二叉树
// 
// 关键代码：if(!left&&!right)；if(!left||!right)；if(left.val!==right.val)；
// isCompare(left.left,right.right)&&isCompare(left.right,right.left)
// 思想：比到山穷水尽就是true；递归边界
// 
var isSymmetric = function(root) {
    if(!root) return null
    return isCompare(root.left,root.right)
    function isCompare(left,right){
        // 比到山穷水尽就是true；递归边界
        if(!left&&!right){
            return true
        }
        // 单个存在返回false
        if(!left||!right){
            return false
        }
        // 值不存在返回false
        if(left.val!==right.val){
            return false
        }
        // 当前值相等，继续遍历
        if(left.val===right.val){
            return isCompare(left.left,right.right)&&isCompare(left.right,right.left)
        }
    }
};




// 236. 二叉树的最近公共祖先
// 思路：如果不是同时找到，找到的第一个节点就是祖先节点；遍历
// 
// 
// 
// 这个终止条件的本质是：
// 一旦找到目标，就停止继续向下找，并把结果往上传。
// 如果不是同时找到，找到的第一个节点就是祖先节点
var lowestCommonAncestor = function (root, p, q) {
    if(!root){
        return null
    }
    if (root === p || root === q) {
        return root
    }
    let leftVal = lowestCommonAncestor(root.left, p, q)
    let rightVal = lowestCommonAncestor(root.right, p, q)

    if (leftVal && rightVal) {
        return root
    } 
    if (leftVal || rightVal) {
        return leftVal ? leftVal : rightVal
    }
};



/// 
/// 104. 二叉树的最大深度
/// 
var maxDepth = function(root) {
    if (!root) return 0;
    let count = [root]
    let countDep = 0
    while(count.length){
        countDep++
        let len = count.length
        for(let i=0;i<len;i++){
            let output = count.shift()
            if(output&&output.left){
                count.push(output.left)
            }
            if(output&&output.right){
                count.push(output.right)
            }
        }
    }
    return countDep
};




// 62. 不同路径
// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
// 问总共有多少条不同的路径？

    // 核心思想：
    // // const dp = [...Array(m)].map(() => Array(n).fill(1));   中...Array(m)是将每个元素都铺开吗
    // // dp[i][j] = dp[i-1][j]+dp[i][j-1]
var uniquePaths = function(m, n) {
    const dp = [...Array(m)].map(() => Array(n).fill(1)); 
    // 或：
    // const dp = [];
    // for (let i = 0; i < m; i++) {
    //     dp.push(Array(n).fill(1));
    // }
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            dp[i][j] = dp[i-1][j]+dp[i][j-1]
        }
    }

    return dp[m - 1][n - 1]
};



// 备注：创建一个 m * n的二位数组
// 先创建一个空数组，再不断的向空数组中push n维数组 
let dp = []
for(let i=0;i<m;i++){
    dp.push(Array(n).fill(1))
}




// 53. 最大子数组和
// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 思路：当前元素要么接在前面和的后面；要么作为新的开始 currMax = Math.max(nums[i],currMax+nums[i])
// 核心代码：
    // currMax = Math.max(nums[i]+currMax, nums[i])
    // finMax = Math.max(finMax,currMax)

var maxSubArray = function(nums) {
    let currMax = nums[0]
    let finMax = nums[0]
    for(let i=1;i< nums.length;i++){
        currMax = Math.max(nums[i]+currMax, nums[i])
        finMax = Math.max(finMax,currMax)
    }
    return finMax
};






// 322. 零钱兑换
// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
// 你可以认为每种硬币的数量是无限的

// 核心思想：
// *****
// let newArray = Array(amount+1).fill(Infinity)
// for(let i=1;i <= amount;i++) --- for(let item of coins) --- if(i >= item)
// newArray[i] = Math.min(newArray[i],newArray[i-item]+1) 
// *****
// newArray 的下标作为要凑出的 金额，
// 下标为0 表示凑出的 金额为0元 的最小硬币数量，
// 下标为m 表示凑出的 金额为m元 的最小硬币数量,
// 如果当前凑的金额大于等于币值 则 更新 数组（凑出 金额为m元 的硬币数量）
// 
// 

var coinChange = function(coins, amount) {
    let newArray = Array(amount+1).fill(Infinity)
    newArray[0] = 0
    for(let i=1;i <= amount;i++){
        // 每个金额都有遍历一下所有的面值
        for(let item of coins){
            // 当前金额大于面值
            if(i >= item){
                // newArray[i-item]+1 添加新面值 加 1
                newArray[i] = Math.min(newArray[i],newArray[i-item]+1)
            }
        }
    }
    // 遍历结束，数组中最后一个元素即 amount 金额
    if(newArray[amount]===Infinity) return -1 //返回的是 -1
    return newArray[amount]
};







// 1.两数之和
// 示例 1：
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// 示例 2：
// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]
// 示例 3：
// 输入：nums = [3,3], target = 6
// 输出：[0,1]

/// 
// 实现思路：
// Map方法 .has()  .set()
// Map中的 .has() 方法检查的是键   .get() 获取对应键的值
// 
/// 
var twoSum = function(numbers, target) {
    let arrays = new Map()
    for(let i=0;i<numbers.length;i++){
        let targetOther = target - numbers[i]
        if(arrays.has(targetOther)){
            return[i,arrays.get(targetOther)]
        }else{
            arrays.set(numbers[i],i)
        }
    }
    return -1
};


// 

// 22. 括号生成
// 示例 1：
// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：
// 输入：n = 1
// 输出：["()"]

// 思想：count('',0,0)
// count(sum+'(',left+1,right)
// count(sum+')',left,right+1)
// if(left===n&&right===n)

var generateParenthesis = function(n) {
    let fin = []
    executeFun('',0,0)
    return fin
    function executeFun(curr,left,right){
        if(left===n&&right===n){
            fin.push(curr)
            return 
        }
        if(left<n){
            executeFun(curr+'(',left+1,right)
        }
        if(left>right){
            executeFun(curr+')',left,right+1)
        }
    }
};


// 387. 字符串中的第一个唯一字符
// 思路：统计 字符串 中的 每个字符 出现的次数
// 再以次遍历字符串中每个字符，查找次数对应为1的字符
// dataset.set(s[i],(dataset.get(s[i]) || 0) + 1)
// dataset.get(s[i])===1

var firstUniqChar = function(s) {
  let dataset = new Map()
  // 统计 字符串 中的 每个字符 出现的次数
  // 键值对  键为字符 值为次数   
  for(let i=0;i<s.length;i++){
    dataset.set(s[i],(dataset.get(s[i]) || 0) + 1)
  }
  for(let i=0;i<s.length;i++){
    // 逐次的遍历字符串中的字符，获取次数值为1的下标索引
    if(dataset.get(s[i])===1){
        return i
    }
  }
  return -1
};




// 
// 415.字符串相加
// 
    //  let cur1 = 0
    //  let cur2 = 0
    //  let sum = 0
// 
// 易错点：长度是 num1.length-1； 而不是num1.length
var addStrings = function(num1, num2) {
    let res = ''
    let len1 = num1.length-1
    let len2 = num2.length-1
    let add = 0
    while(add!==0||len1>=0||len2>=0){
        let cur1 = 0
        let cur2 = 0
        let sum = 0
        if(num1[len1]>0){
            cur1 = num1[len1]-'0'
        }
        if(num2[len2]>0){
            cur2 = num2[len2]-'0'
        }
        len1--
        len2--
        sum = cur1 + cur2 + add // add 进位值
        add = Math.floor(sum/10)
        let curr = sum%10
        res = curr + res //此处指的是字符串的拼接
    }
    return res
};




// 
// 209. 长度最小的子数组
// 
// 给定一个含有 n 个正整数的数组和一个正整数 target 。
// 找出该数组中满足其总和大于等于 target 的长度最小的 子数组 ，并返回其长度。如果不存在符合条件的子数组，返回 0

var minSubArrayLen = function(target, nums) {
    let sum = 0
    let left = 0
    let minLen = 100000
    for(let i=0;i<nums.length;i++){
        sum += nums[i]
        while(sum>=target){
            minLen = Math.min(minLen,i-left+1)
            sum -= nums[left]
            left++
        }
    }
    if(minLen===100000){
        return 0
    }
    return minLen
};





// 43. 字符串相乘
var multiply = function(num1, num2) {
    if(num1.length===1&&num2.length===1){
        return String((num1[0] - '0')*(num2[0] - '0'))
    }
    if(num1==='0'||num2==='0') return '0'
    let sumLen = num1.length + num1.length
    let newArray = new Array(num1.length + num2.length).fill(0)
    for(let i=num1.length-1; i>=0; i--){
        for(let j=num2.length-1; j>=0; j--){
            // 计算后的结果的个位数依然放在newArray[i+j+1]的位置
            let curAcul = num2[j] * num1[i] + newArray[i+j+1] 
            let nextVal = Math.floor(curAcul / 10)  // 十位值
            let currVal = curAcul % 10              // 个位值
            newArray[i+j+1] = currVal               // 个位留在这
            newArray[i+j] = nextVal + newArray[i+j] // 十位数累加
        }
    }
    newArray = newArray.join('')
    while (newArray[0] === '0') {
        newArray = newArray.slice(1);
    }
    return newArray
};






// 
// 
// 等价 --- 清晰
// 
// 
var multiply = function(num1, num2) {
    if(num1.length===1&&num2.length===1){
        return String((num1[0] - '0')*(num2[0] - '0'))
    }
    if(num1==='0'||num2==='0') return '0'
    let newArray = new Array(num1.length + num2.length).fill(0)
    for(let i=num1.length-1; i>=0; i--){
        for(let j=num2.length-1; j>=0; j--){
            // 计算后的结果的个位数依然放在newArray[i+j+1]的位置
            let curAcul = num2[j] * num1[i] + newArray[i+j+1] 
            newArray[i+j+1] = curAcul % 10               // 个位留在这
            newArray[i+j] = Math.floor(curAcul / 10) + newArray[i+j] // 十位数累加
        }
    }
    newArray = newArray.join('')
    while (newArray[0] === '0') {
        newArray = newArray.slice(1);
    }
    return newArray
};




// 20. 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

var isValid = function(s) {
    let count = []
    let arrMap = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    for(let item of s){
        if(arrMap[item]){
            count.push(item)
        }else{
            let output = count.pop()
            if(arrMap[output]!==item){
                return false
            }
        }
    }
    if(count.length>0){
        return false
    }
    return true
};




// 128. 最长连续序列
// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
// 

// let numsArray = new Set(nums) 创建的不是数组，而是一个 Set 对象（集合）。
// 尽管它不是数组，但它可以使用 for...of 循环，原因如下：
//for...of 循环不仅仅用于数组，它适用于任何可迭代对象 (Iterable)。

var longestConsecutive = function(nums) {
    let numsArray = new Set(nums)
    let maxLen = 0
    let currLen = 0
    // //for...of 循环不仅仅用于数组，它适用于任何可迭代对象 (Iterable)。
    for(let item of numsArray){
        currLen = 0
        if(!numsArray.has(item-1)){
            let currVal = item
            while(numsArray.has(currVal)){
                currLen++
                currVal++
            }
        }
        maxLen = Math.max(currLen,maxLen)
    }
    return maxLen
};



// 
// 
// 5. 最长回文子串 
// 
// 
var longestPalindrome = function(s) {
    // 遍历下标获取值
    // left right可以左右紧邻的，也可以是同一个节点
    function countLen(left,right){
        while(left>=0 && right<s.length && s[left]===s[right]){
            left--
            right++
        }
         // 易错？？？？？？？ 此时跳出循环的时候 left 和 right都已经多走了1位
        return right-left-1
    }
    let finmax = 0
    let start = 0
    for(let i=0;i<s.length;i++){
        let jishu = countLen(i,i)
        let oushu = countLen(i,i+1)
        let len = Math.max(jishu,oushu)
        if(len>finmax){
            finmax = len
            // i处于当前的 回文子串的中心点
            start = i - Math.floor((finmax-1) / 2)
        }
    }
    return s.substring(start,start+finmax)  // 共截取长度为finmax的字符串
};






// 20. 有效的括号
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let saveCom = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    let arr = []
    for(let i=0;i<s.length;i++){
        if(saveCom[s[i]]){
            arr.push(s[i])
        }else{
            let output = arr.pop()
            if(saveCom[output]!==s[i]){
                return false
            }
        }
    }
    if(arr.length>0){
        return false
    }
    return true
};





// 121. 买卖股票的最佳时机
var maxProfit = function(prices) {
    let lowest = 100000000
    let finsum = 0
    for(let item of prices){
        if(item < lowest){
            lowest = item
        }else{
            let curr = item - lowest
            finsum = Math.max(finsum,curr)
        }
    }
    return finsum
};




// 234.回文链表
var isPalindrome = function(head) {
    if(!head){
        return null
    }
    let slow = head
    let fast = head
    let reslow = head
    while(fast&&fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    // 当前的slow节点需要保留
    let pre = null
    let curr = slow
    // 将后面的链表反转
    while(curr){
        let save = curr.next
        curr.next = pre
        pre = curr
        curr = save
    }
    while(pre){
        if(pre.val!==reslow.val){
            return false
        }
        pre = pre.next
        reslow = reslow.next
    }
    return true
};



// 
// 160. 相交链表 
// 
var getIntersectionNode = function(headA, headB) {
    let pa = headA
    let pb = headB
    while(pa!==pb){
        pa = pa ? pa.next : headB  //关键所在
        pb = pb ? pb.next : headA  //关键所在
    }
    return pa
};


// 141 .环形链表

var hasCycle = function(head) {
    let fast = head
    let slow = head
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        if(fast === slow){
            return true
        }
    }
    return false
};



// 98. 验证二叉搜索树

var isValidBST = function(root) {
    function verify(node,min,max){
        if(!node) return true
        if(node.val >= max || node.val<=min){
            return false}
        return verify(node.left,min,node.val)&&verify(node.right,node.val,max)
    }
    return verify(root,-Infinity,Infinity)
};






// 300.最长递增子序列
// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
// 例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
var lengthOfLIS = function(nums) {
    if(nums.length<1) return 0
    let dp = new Array(nums.length).fill(1)
    let maxLen = 1
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if(nums[j]<nums[i]){
              dp[i] = Math.max(dp[i],dp[j]+1)
              maxLen = Math.max(maxLen,dp[i])
            }
        }
    }
    return maxLen
};







var maxDepth = function(root) {

    function dfs(node){
        if(!node) return 0

        let left = dfs(node.left)
        let right = dfs(node.right)

        return Math.max(left, right) + 1
    }

    return dfs(root)
};



// 
// 543. 二叉树的直径
// 
var diameterOfBinaryTree = function(root) {
    let max = 0
    function depth(node) {
        // 设立边界
        if (!node) return 0
        let left = depth(node.left)
        let right = depth(node.right)
        // 更新最大直径

        // 可以理解，对每个节点进行max = Math.max(max, left+right)计算，最终找到最大值
        max = Math.max(max, left + right)
        // 返回当前节点的深度
        return Math.max(left, right) + 1
    }
    depth(root)
    return max
};



// 739. 每日温度
// 什么情况下栈会在计算过程中存多个值，然后又都出去了？是不是一直遍历逐渐减小或者不变的值，然后突然遇到了比之前都大的值（ ✅ ✅ ✅ ）
// 
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let answer = new Array(n).fill(0);
    let stack = []; // 存下标，单调递减栈
    for (let i = 0; i < n; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let idx = stack.pop();
            answer[idx] = i - idx;
        }
        stack.push(i);
    }
    return answer;
};



// 
// 438. 字母异位词
// 
// 
// char.charCodeAt() - 97

var findAnagrams = function(s, p) {

    let res = [];
    let need = new Array(26).fill(0);
    let window = new Array(26).fill(0);

    for (let char of p) {
        need[char.charCodeAt() - 97]++;
    }

    let left = 0;

    for (let right = 0; right < s.length; right++) {

        // 右边加入字符
        window[s[right].charCodeAt() - 97]++;

        // 如果窗口长度超过 p
        if (right - left + 1 > p.length) {
            window[s[left].charCodeAt() - 97]--;
            left++;
        }
        // ----- 上述的这两块代码实现了右移动 ------

        // 判断是否匹配
        if (arraysEqual(window, need)) {
            res.push(left);
        }
    }

    return res;
};

function arraysEqual(a, b) {
    // 用一个 长度为 26 的数组来统计每个字母出现的次数
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}





// 146. LRU 缓存

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.map = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
// get 不只是返回值，还会 把 key 移动到最近使用的位置
LRUCache.prototype.get = function(key) {
    // 不存在
    if(!this.map.has(key)){
        return -1
    }
    // 取值
    const value = this.map.get(key)
    // 删除旧位置
    this.map.delete(key)
    // 重新插入 -> 变成最新使用
    this.map.set(key,value)
    return value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // 如果已经存在
    if(this.map.has(key)){
        this.map.delete(key)
    }
    // 插入
    this.map.set(key,value)
    // 超出容量
    if(this.map.size > this.capacity){
        // Map第一个key就是最久未使用
        const oldestKey = this.map.keys().next().value
        this.map.delete(oldestKey)
    }
};




// 
// 525.连续数组
// 
// 如果两个位置的前缀和相同，那么它们之间的子数组和为 0。
// 前缀和
var findMaxLength = function(nums) {
    let map = new Map()
    map.set(0, -1) // 初始值，处理从开头就相等的情况
    let maxLen = 0
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        // 把0当成-1，1保持1
        count += nums[i] === 1 ? 1 : -1

        if (map.has(count)) {
            // 当前count之前出现过，说明这段子数组0和1相等
            maxLen = Math.max(maxLen, i - map.get(count))
        } else {
            // 第一次出现count，记录索引
            map.set(count, i)
            // map 只记录某个前缀和第一次出现的位置，不能更新。
            // 原因是：
            // 第一次出现的位置，才能得到最长子数组。
        }
    }

    return maxLen
};




// 
// 2. 两数相加
// 

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0) // 虚拟头节点
    let cur = dummy
    let carry = 0

    while (l1 || l2 || carry) {

        let v1 = l1 ? l1.val : 0
        let v2 = l2 ? l2.val : 0

        let sum = v1 + v2 + carry
        carry = Math.floor(sum / 10)

        cur.next = new ListNode(sum % 10)
        cur = cur.next

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    return dummy.next
};



// 46.全排列
var permute = function(nums) {

    let result = []
    let path = []

    function dfs() {

        if (path.length === nums.length) {
            result.push([...path])
            return
        }

        for (let num of nums) {

            if (path.includes(num)) continue

            path.push(num)

            dfs()

            path.pop()//pop() 的作用正是为了给后面的 for 循环腾出“位置”去尝试下一个数字。
        }
    }
    dfs()
    return result
}



// 整数数组 nums 按升序排列，数组中的值 互不相同 。

// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 向左旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 下标 3 上向左旋转后可能变为 [4,5,6,7,0,1,2] 。

// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

// 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。

// ---- 就是在一个略微打乱顺序的数组中找数的下标 -----
// 33	搜索旋转排序数组
var search = function(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        // 数组 [4,5,6,7,0,1,2]，目标 0：
        // 第一次 mid = 3 → nums[3]=7
        // 左半段 [4,5,6,7] 有序
        // 0 不在左半段 → 搜右半段 [0,1,2]
        // mid = 5 → nums[5]=1
        // 右半段有序 → 0 在左半段 → 调整右指针
        // mid = 4 → nums[4]=0 → 找到！
        // 整个过程只用了 O(log n) 次比较 ✅

        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid; // 找到目标
        }
        // 判断哪一半有序
        if (nums[left] <= nums[mid]) {
            // 左半段有序
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; // 目标在左半段
            } else {
                left = mid + 1; // 目标在右半段
            }
        } else {
            // 右半段有序
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1; // 目标在右半段（同上 left = mid + 1）
            } else {
                right = mid - 1; // 目标在左半段（同时 right = mid - 1）
            }
        }
    }

    return -1; // 没找到
};



// 
// 155. 最小栈
// 
var MinStack = function() {
    // 主栈，存储所有数据
    this.stack = [];
    // 辅助栈，存储最小值
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // 1. 将元素推入主栈
    this.stack.push(val);
    
    // 2. 更新最小栈
    // 如果最小栈为空，或者当前值小于等于最小栈顶部的值，则推入最小栈
    // 注意：必须是 <=，因为如果有多个相同的最小值，pop时需要对应移除
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length === 0) return;
    
    // 1. 弹出主栈顶部元素
    const topVal = this.stack.pop();
    
    // 2. 如果弹出的元素正好是当前最小值，则最小栈也要弹出
    if (topVal === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length === 0) return null; // 或者根据题目要求抛出异常
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.minStack.length === 0) return null; // 或者根据题目要求抛出异常
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
