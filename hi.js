import "dotenv/config";
import { ethers } from "ethers";

const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;
const provider = new ethers.JsonRpcProvider(infuraUrl);

// console.log("Current block number", await provider.getBlockNumber());

// console.log("atg.eth is", await provider.resolveName("atg.eth"));

// console.log(
//   "0xc4ac4174aa9a93d9eef02621ce8205c75d003de5 is",
//   await provider.lookupAddress("0xc4ac4174aa9a93d9eef02621ce8205c75d003de5")
// );

const vitalikBalance = await provider.getBalance("vitalik.eth");
let sanfordBalance = await provider.getBalance("sanfordstout.eth");


console.log("sanford balance", ethers.formatEther(sanfordBalance));
console.log("vitalik balance", ethers.formatEther(vitalikBalance));


// console.log("vitalik.eth has", ethers.utils.formatEther(vitalikBalance));
//
// console.log(
//   "1.5 ETH is",
//   ethers.utils.formatEther(ethers.utils.parseEther("1.5"))
// );