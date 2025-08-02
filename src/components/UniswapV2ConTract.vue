<template>
  <div>
    <h1>Uniswap Token Swap Example</h1>
    <button @click="getAmountOut(1001)">Get Amount Out</button>
    <p>Amount Out: {{ amountOut }}</p>
  </div>
</template>
// https://etherscan.io/address/0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f#code
<script>
import { ref, onMounted } from "vue";
import { ethers } from "ethers"; // 确保导入 ethers.js 5.x
import { routerAbi } from "./constant"
export default {
  name: "UniswapInteraction",
  setup() {
    const routerAddress = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
    const exeCute = () => {
      try {
        console.log("Executing Uniswap interaction...");
        // 校验并格式化地址
        const validAddress = ethers.utils.getAddress(routerAddress);
        console.log("Formatted Address:", validAddress);
      } catch (error) {
        console.error("Invalid Address:", error);
      }
    };

    const amountOut = ref(null);

    // 检查 MetaMask 是否安装
    onMounted(() => {
      exeCute();
      if (typeof window.ethereum === "undefined") {
        console.log("Please install MetaMask!");
      } else {
        console.log("MetaMask is installed!");
      }
    });

    const getAmountOut = async (amountIn) => {
      try {
        // 确保 MetaMask 安装且连接
        if (typeof window.ethereum === "undefined") {
          throw new Error("MetaMask is not installed");
        }

        // 使用 Web3Provider 来连接到 MetaMask
        const provider = new ethers.providers.Web3Provider(window.ethereum); // 使用 ethers.js 5.x
        await provider.send("eth_requestAccounts", []); // 请求 MetaMask 钱包授权连接

        const signer = provider.getSigner();

        // 手动确保地址符合校验和规则 0x5C69bEe701Ef814A2B6A3EdD4B4653B72C6eA6b8

        const routerAddress = ethers.utils.getAddress(
          "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"
        ); // 修正地址

        // 实例化合约
        const router = new ethers.Contract(routerAddress, routerAbi, signer);
        console.log("Router Contract:====", router);
        console.log("Router Address:====", router.interface);
        // 假设你已经定义了 tokenA 和 tokenB 的地址
        const tokenA = "0xdac17f958d2ee523a2206206994597c13d831ec7"; // USDT 地址
        const tokenB = "0xc778417E063141139Fce010982780140Aa0cD5Ab"; // WETH 地址 (Wrapped Ether)
        const tokenC = "0x6b175474e89094c44da98b954eedeac495271d0f"; // 你可以添加更多的代币地址
        // 计算创建交易对的 gas 费用 BC 2528078    AB 2528068    AC 已存在
        const gasEstimate = await router.estimateGas.createPair(tokenB, tokenA);
        console.log("Estimated Gas:", gasEstimate.toString());
      } catch (error) {
        console.error("Error fetching amount out:", error);
      }
    };

    return {
      getAmountOut,
      amountOut,
    };
  },
};
</script>

<style scoped>
/* 可添加样式 */
</style>
