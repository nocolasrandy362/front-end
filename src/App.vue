<script setup>
import { onMounted } from "vue";
import WelcomeItem from "./components/WelcomeItem.vue";
onMounted(() => {
  console.log("test");
  mergeList()
});
const buildSingleLinkList = (arr) => {
  let L = { val: 0, next: null };
  let ilterate = L;
  console.log("ilterate", ilterate);
  for (let i = 0; i < arr.length; i++) {
    ilterate.next = { val: arr[i], next: null };
    ilterate = ilterate.next;
    /***
     * ilterate = { val: arr[i], next: null }
       ilterate = ilterate.next  // At this time, ilterate will be null
    */
  }
  return L;
};
const mergeList = () => {
  let ListA = buildSingleLinkList([11, 22, 31, 40, 41, 53]);
  let ListB = buildSingleLinkList([17, 32, 34, 38, 41, 50]);
  let pA = ListA.next;
  let pB = ListB.next;
  let C = buildSingleLinkList([])
  let pC = C
  while (pA && pB) {
    /*NO: You are merging two ordered singly linked lists into an ascending linked list. 
      But your judgment condition is pA.val > pB.val */
    // if (pA.val > pB.val) { // No
      if (pA.val < pB.val) { // OK
      // TypeError: Cannot set properties of null (setting 'next')
      // 你正在尝试给 null 设置一个属性（这里是 .next）
      pC.next = pA;
      pA = pA.next;
      console.log('111pA.val  pB.val',pA?.val , pB?.val)
    } else {
      pC.next = pB;
      pB = pB.next;
      console.log('222pA.val  pB.val',pA?.val , pB?.val)
    }
    
    pC = pC.next
  }
  // 连接剩下的部分
  pC.next = pA || pB;
  console.log('C',C)
  return C;
};
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
  </header>

  <main>
    <WelcomeItem />
  </main>
</template>

<style scoped>
</style>
