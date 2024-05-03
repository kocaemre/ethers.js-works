import "dotenv/config";
import { ethers } from "ethers";
import { getProvider, getSigner, generateNewWallet } from "./utilities.js";


const mainnetProvider = getProvider(true);
const testnetProvider = getProvider();
const signer = getSigner();

const reciever = await mainnetProvider.resolveName("emrekoca.eth");





console.log("You have "+ethers.formatEther((await testnetProvider.getBalance(signer.address)))+" ETH");
const tx = await signer.sendTransaction({
    to : reciever,
    value : ethers.parseEther("0.001")
});

console.log("Transaction sent. Tx id:", tx.hash);

await tx.wait();

console.log("Transaction confirmed");
console.log("You have "+ethers.formatEther((await testnetProvider.getBalance(signer.address)))+" ETH");