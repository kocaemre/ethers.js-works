import "dotenv/config";

import { ethers } from "ethers";


let a = new Date().getSeconds();
console.log("Timer started");

const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;
const provider = new ethers.JsonRpcProvider(infuraUrl);
const vitalik = "vitalik.eth";
const emrek = "emrekoca.eth";


    console.log("Current blog number is ",await provider.getBlockNumber());
    
    console.log(`Checking ${vitalik}'s balance`);
    console.log(`${vitalik} is -->`,await provider.resolveName(vitalik));
    const vitalikBalance = await provider.getBalance(vitalik);
    console.log(`${vitalik} has a `,ethers.formatEther(vitalikBalance)+" ETH");

    console.log("--------------------------------------");

    console.log(`Checking ${emrek}'s balance`);
    console.log(`${emrek} is -->`,await provider.resolveName(emrek));
    const emrekbalance = await provider.getBalance(emrek);
    console.log(`${emrek} has a `,ethers.formatEther(emrekbalance)+" ETH");

   




    let input = "atg.eth";

    console.log("--------------------------------------");
    console.log(`Checking ${input}'s balance`);
    console.log(`${input} is -->`,await provider.resolveName(input));
    const inputBalance = await provider.getBalance(input);
    console.log(`${input} has a `,ethers.formatEther(inputBalance)+" ETH");

    console.log("Current blog number is ",await provider.getBlockNumber());


    let b = new Date().getSeconds();

    console.log("Total time is ",b-a);




