<template>
  <div>
    <h1>Uniswap Token Swap Example</h1>
    <button @click="getAmountOut(1000)">Get Amount Out</button>
    <p>Amount Out: {{ amountOut }}</p>
  </div>
</template>
// https://etherscan.io/address/0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f#code
<script>
import { ref, onMounted } from "vue";
import { ethers } from "ethers"; // 确保导入 ethers.js 5.x

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

        const routerAbi = [
          {
            inputs: [
              {
                internalType: "address",
                name: "_feeToSetter",
                type: "address",
              },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "token0",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "token1",
                type: "address",
              },
              {
                indexed: false,
                internalType: "address",
                name: "pair",
                type: "address",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            name: "PairCreated",
            type: "event",
          },
          {
            constant: true,
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            name: "allPairs",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "allPairsLength",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "tokenA", type: "address" },
              { internalType: "address", name: "tokenB", type: "address" },
            ],
            name: "createPair",
            outputs: [
              { internalType: "address", name: "pair", type: "address" },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "feeTo",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "feeToSetter",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [
              { internalType: "address", name: "", type: "address" },
              { internalType: "address", name: "", type: "address" },
            ],
            name: "getPair",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "_feeTo", type: "address" },
            ],
            name: "setFeeTo",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              {
                internalType: "address",
                name: "_feeToSetter",
                type: "address",
              },
            ],
            name: "setFeeToSetter",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
        ];

        // 实例化合约
        const router = new ethers.Contract(routerAddress, routerAbi, signer);
        console.log("Router Contract:====", router);
        console.log("Router Address:====", router.interface);
        // 假设你已经定义了 tokenA 和 tokenB 的地址
        const tokenA = "0xdac17f958d2ee523a2206206994597c13d831ec7"; // USDT 地址
        const tokenB = "0xc778417E063141139Fce010982780140Aa0cD5Ab"; // WETH 地址 (Wrapped Ether)

        // 计算创建交易对的 gas 费用
        const gasEstimate = await router.estimateGas.createPair(tokenA, tokenB);
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
