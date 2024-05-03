import "dotenv/config";
import { ethers } from "ethers";
import { getProvider, getSigner, generateNewWallet } from "./utilities.js";
import { abi } from "./abi.js";
import { testnetabi } from "./testnetabi.js";


const mainnetProvider = getProvider(true);
const testnetProvider = getProvider();
const signer = getSigner();

//const contractAddress = "0xb131f4A55907B10d1F0A50d8ab8FA09EC342cd74";

const mintCalldata = "0x1249c58b"

const nftContractAddress= "0xfDadf685109db043ad0A811c1afC43EC1E060B7a";

//const contract = new ethers.Contract(nftContractAddress, testnetabi, testnetProvider);

const mintTx = await signer.sendTransaction({
    to: nftContractAddress,
    data: mintCalldata,
    //gasPrice: 10000000000,
});


console.log("TX sent", mintTx.hash);

await mintTx.wait();

console.log("NFT mined!");



// const contract = new ethers.Contract(contractAddress, abi, mainnetProvider);

// const balance = await contract.balanceOf("emrekoca.eth");

// console.log("You have "+ethers.formatEther(balance)+" MEME");