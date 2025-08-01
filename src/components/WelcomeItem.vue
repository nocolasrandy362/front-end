<template>
  <div class="item">
    <div class="details">
    <el-button @click="goEvent"> Default</el-button>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import {
  insertIntoSortedArray,
  deleteElement,
  mergeSortedLists,
  executeDeleteNodeWithValue
} from "./practice.js";
onMounted(() => {
  // executeInsertIntoSortedArray()
  // executeDeleteElement()
  // executeMergeSortedLists();
  executeDeleteNodeWithValue()
});
const executeInsertIntoSortedArray = () => {
  const arr = [1, 3, 5, 7, 9];
  const x = 6;
  console.log(insertIntoSortedArray(arr, x));
  // 输出: [1, 3, 5, 6, 7, 9]
};

const executeDeleteElement = () => {
  // 使用示例
  const L = [10, 20, 30, 40, 50];
  const eSave = ref();
  console.log("删除前", L.length);
  const result = deleteElement(L, 2, eSave);
  console.log("删除结果：", result); // 输出: 1
  console.log("被删除的元素值：", eSave.value); // 输出: 30
  console.log("更新后的顺序表：", L, L.length); // 输出: [10, 20, 40, 50]
};

/***
 * Reference assignment *
  const obj1 = { a: 1 }
  const obj2 = obj1
    obj2 does not contain a copy of obj1's data. Instead, it holds a reference to the same memory location as obj1.
    Therefore, when you perform obj2.a = 2, the property a of the shared object in memory is updated
    , which means obj1.a will also reflect this change.
 ***/
// 构建带头结点的链表
const createList = (arr) => {
  const head = { next: null };
  let current = head;
  for (const val of arr) {
    current.next = { value: val, next: null };
    current = current.next;
  }
  return head;
};
const executeMergeSortedLists = () => {
  // 测试
  const A = createList([1, 3, 5, 99]);
  const B = createList([0, 0, 1, 2, 4, 6]);
  // important code !
  const C = mergeSortedLists(A, B);

  // 打印结果
  let curr = C.next;
  let result = [];
  while (curr) {
    result.push(curr.value);
    curr = curr.next;
  }
  console.log(result); // 输出: [1, 2, 3, 4, 5, 6]
};

const goEvent = () => {
  connectMetaMask()
  // 跳转到指定页面
};

const account = ref(null);
    const contractResult = ref(null);

    // 连接 MetaMask 钱包
    const connectMetaMask = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          account.value = accounts[0];
          console.log('Connected accounts:', accounts);
        } catch (error) {
          console.error('User rejected the request:', error);
        }
      } else {
        alert('MetaMask is not installed!');
      }
    };

    // 监听账户和网络变化
    // onMounted(() => {
    //   if (typeof window.ethereum !== 'undefined') {
    //     window.ethereum.on('accountsChanged', (accounts) => {
    //       account.value = accounts[0];
    //       console.log('Account changed:', accounts);
    //     });

    //     window.ethereum.on('chainChanged', (chainId) => {
    //       console.log('Network changed:', chainId);
    //     });
    //   }
    // });

</script>
<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
