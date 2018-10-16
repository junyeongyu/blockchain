# blockchain

Satashi Nakamoto invented bitcoin described in bitcoin.pdf

5. Network

6. Intentive

7. Recaliming Disk Space

8. Simplifed Payment Verification

9. Combining and Splitting Value

10. Privacy

11. Calculation


Block
 - Timestamp
 - LastHash
 - Hash
 - The data to store

Block hash algorithm
 - SHA-256: produce 32-byte hash value

Hash Validation


P2P Connection
 - yarn dev
 - HTTP_PORT=3002 P2P_PORT=5002 PEERS=ws://localhost:5001 yarn dev
 - HTTP_PORT=3003 P2P_PORT=5003 PEERS=ws://localhost:5002 yarn dev

Proof of Work System
 - Hashcash was a proof-of-work system to perven email spamming.
  - ex) Hash = 000000haxiadsfsdljk when difficulty is 6
 - Generate hashes until a one with the matching leading 0's is found
 - A "nonce" value adjusts in order to generate new hashes
 - This computational work is "mining"
 
 - The difficulty wets a rate of mining
 - Bitcoin sets the rate to a new block around every 10 minutes

51% Attack
 - A dishonest miner has more than at least 51% of the network's power
 - A 51% attack for bitcoin would be more than $6 billion (as of 2018)

Wallet
 - Wallets store the balance of an individual.
 - They store an individual's keys.
 - Private key is used to generate signatures
 - public key is used to verify signiture and public address

Transaction
 - ex) Input: timestamp, Balance: 500, signiture, sender's public key: OxfooOne

Digital Signatures

Blockchain-powered Cryptocurrencies
 - Contain wallet objects
 - Keys for digial signatures and verification
 - Have transactions objects to represent currency exchange

Transaction Pool
 - An object that contains all new transactions submitted by individuals.

Miners of Transacions
 - Miner take transactions from the pool and store them into block
 - Miner receive rewards for mining
 - Transactions go from "unconfirmed" in the pool to "confirmed" in the chain

The Nuance of Wallet Balance
 - Balance = all output amounts that belongs to a user.
 - Update the balance at least before each transaction.
 - All outputs since a user's most recent transaction.
 - Possible double counting of transactions within the blockchain history.

## Test
 - yarn test

## References
 - https://github.com/15Dkatz/sf-chain-guides