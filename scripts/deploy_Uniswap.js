const { ethers } = require("hardhat");

async function main() {

  
  
  const RPC = "https://long-tame-pallet.ethereum-goerli.discover.quiknode.pro/8faecb4ee1439b89a204628838536c5d85079c31/";
  const blockNumber = 8000432; // number of the block you want to get timestamp of
  const provider = new ethers.providers.JsonRpcProvider(RPC);

  const timestamp = (await provider.getBlock(blockNumber)).timestamp;

  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so whitelistContract here is a factory for instances of our Whitelist contract.
  */
  const Uniswap_Contract = await ethers.getContractFactory("Uniswap");


  // here we deploy the contract
  const deployed_Uniswap_Contract = await Uniswap_Contract.deploy("0x93CE1B3dE0B8E5d52c6cA09C90173F292aDD5e63","0x93CE1B3dE0B8E5d52c6cA09C90173F292aDD5e63",timestamp+300);
  // 10 is the Maximum number of whitelisted addresses allowed

  // Wait for it to finish deploying
  await deployed_Uniswap_Contract.deployed();

  // print the address of the deployed contract
  console.log("Uniswap Contract Address:", deployed_Uniswap_Contract.address);
  var fsp = require('fs/promises');
  await fsp.writeFile("constants/Uniswap_Address.txt", "Uniswap contract address = "+'"'+ deployed_Uniswap_Contract.address +'"');
  
  
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });