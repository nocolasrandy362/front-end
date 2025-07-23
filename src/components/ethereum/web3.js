// 共识机制 复习01
/*
The consensus mechanism refers to a protocol or algorithm used to ensure that all nodes in a blockchain network reach an agreement on the validity of transactions and blocks. 
It guarantees that in a decentralized network, all participants (nodes) can reach a consensus on the state of the blockchain, 
thereby maintaining the consistency and security of the data.
/

// 挖矿
/
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
/*
ERC-20 is a technical standard for smart contract tokens on the Ethereum blockchain. It defines a set of rules and functions that a token contract must follow in order to be compatible with the Ethereum network. 
The term ERC stands for "Ethereum Request for Comments," and 20 is the proposal number that identifies the standard.

### Key Points about ERC-20:
1. Standardization: ERC-20 defines a standard set of rules that make it easy for tokens to interact with various wallets, decentralized exchanges (DEXs), and other decentralized applications (DApps) on the Ethereum network.

2. Interoperability: By following the ERC-20 standard, tokens can be easily integrated into Ethereum-based platforms and used across a wide variety of decentralized services.

3. Token Functions: The standard specifies several key functions that a token smart contract must implement to work on Ethereum. 
These include basic functions for transferring tokens, checking balances, and approving other addresses to spend a certain amount of tokens.

### ERC-20 Standard Functions
Here are the most important functions that any ERC-20 compliant token must have:

1. `totalSupply()`:
    Returns the total supply of the token in circulation.

2. `balanceOf(address _owner)`:
    Returns the token balance of a specific address.

3. `transfer(address _to, uint256 _value)`:
    Transfers a certain amount of tokens from the sender to the recipient.

4. `approve(address _spender, uint256 _value)`:
    Allows a third party (a spender) to spend a specified amount of tokens on behalf of the token holder.

5. `transferFrom(address _from, address _to, uint256 _value)`:
    Allows a third party (a spender) to transfer tokens from one address to another, provided they have been approved to do so.
    provided 是一个连词，用于引导条件状语从句，相当于“if only”或“as long as”，意思是“只要……”。
6. `allowance(address _owner, address _spender)`:
    Returns the amount of tokens that a spender is allowed to withdraw from the owner's account.

### Advantages of ERC-20

1. Wide Adoption:

    ERC-20 is the most widely used token standard on Ethereum. It is supported by virtually all wallets, exchanges, and DApps that operate on the Ethereum network.

2. Simplicity and Flexibility:

    ERC-20 tokens are easy to create, making them a go-to solution for tokenization on Ethereum. Developers can launch their own custom tokens with minimal effort, enabling the creation of projects, utility tokens, and even decentralized finance (DeFi) applications.

3. Interoperability:

    ERC-20 tokens are compatible with many platforms, including decentralized exchanges (DEXs), token wallets, and more. This allows for easy trading and management of tokens across the Ethereum ecosystem.

4. Security:

    Since ERC-20 tokens are based on Ethereum’s smart contracts, they inherit Ethereum's security model, which is one of the most secure blockchain architectures available.

### Disadvantages of ERC-20

1. Lack of Flexibility:

    While ERC-20 is widely adopted, it does not allow for more complex features, such as creating multiple types of assets (e.g., non-fungible tokens, NFTs) or managing assets with more granular controls (e.g., fungible and non-fungible assets in the same contract).

2. Scalability and Gas Fees:

    Like any operation on the Ethereum network, transactions involving ERC-20 tokens require gas, which is the computational fee paid to miners. High gas fees can make using ERC-20 tokens costly during periods of network congestion.

3. Security Vulnerabilities:

    Although ERC-20 tokens follow a standardized approach, the contracts themselves can still have bugs or vulnerabilities, as seen in many high-profile token hacks or exploits.

### Use Cases of ERC-20 Tokens

1. Initial Coin Offerings (ICOs):

    Many projects use ERC-20 tokens to raise funds through ICOs. These tokens are issued to investors in exchange for cryptocurrencies like Ether (ETH) during a fundraising event.

2. Stablecoins:

    Several stablecoins, such as Tether (USDT) and USD Coin (USDC), are ERC-20 tokens. They are used to maintain a stable value (usually pegged to a fiat currency like the US Dollar).

3. DeFi and DApps:

    DeFi platforms often use ERC-20 tokens to represent assets or perform financial operations such as lending, staking, and yield farming.

4. Gaming and NFTs:

    While ERC-20 is typically used for fungible tokens, some gaming platforms and NFT marketplaces use ERC-20 tokens as in-game currencies or for other purposes.

### Conclusion

ERC-20 is a widely adopted, standardized framework for creating tokens on the Ethereum blockchain. It ensures interoperability and compatibility across Ethereum's decentralized ecosystem, making it easier for developers and users to interact with various Ethereum-based applications. Despite its success, newer standards (such as ERC-721 for NFTs and ERC-1155 for multi-token support) have emerged to cater to more complex use cases, but ERC-20 remains the dominant token standard on Ethereum.
*/
