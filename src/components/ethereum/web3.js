// 共识机制
/*
The consensus mechanism refers to a protocol or algorithm used to ensure that all nodes in a blockchain network reach an agreement on the validity of transactions and blocks. 
It guarantees that in a decentralized network, all participants (nodes) can reach a consensus on the state of the blockchain, 
thereby maintaining the consistency and security of the data.
*/

// 挖矿
/*
Mining is a crucial process in blockchain technology, especially in cryptocurrency networks such as Bitcoin. 
It involves using computing power to verify and record transactions on the network, and through this process, 
maintain the security and consistency of the entire blockchain. Here are some core concepts related to mining: 

1.The basic purpose of mining 

Verification of transactions: The main purpose of mining is to ensure that all transactions in the cryptocurrency network are legal and to prevent issues such as double spending.

Creation of new blocks: By solving complex mathematical problems (Proof of Work), miners are able to package a batch of transactions into a new block and add it to the blockchain.

Reward mechanism: Miners who successfully complete the above tasks will receive a certain amount of newly issued cryptocurrency as a reward, which is also one of the ways for new coins to enter the circulation.

2. The process of mining 
Select the pending transactions: Miners will select a batch of unconfirmed transactions from the transaction pool.

Combine A with B	将 A 与 B 结合
Construct the candidate block: Combine these transactions with the hash value, timestamp and other information of the previous block to form a "candidate block".

Solve the puzzle: Miners need to find a specific value (nonce) such that the hash value of the candidate block meets certain conditions (for example, starting with several zeros). 
This process requires a large number of computational attempts, and is therefore called "proof of work".

Broadcast the result: Once a hash value that meets the conditions is found, the miner will broadcast the newly discovered block to the entire network.

Verify and add to the blockchain: Other nodes will verify the validity of the new block and then add it to their own blockchain copies.
*/


// ERC-20
