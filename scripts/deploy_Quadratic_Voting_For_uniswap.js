const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { Uniswap_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  const UniswapFactoryContract = Uniswap_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a Crypto Dev NFT
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
  */
  const Quadratic_Voting_Contract = await ethers.getContractFactory("QuadraticVoting_Simple");

  // deploy the contract
  const deployedQuadratic_Voting_Contract = await Quadratic_Voting_Contract.deploy(
    UniswapFactoryContract,
	10
  );

  // print the address of the deployed contract
  console.log(
    "Quadratic_Voting_for_uniswap_Contract Address:",
    deployedQuadratic_Voting_Contract.address
  );
  var fsp = require('fs/promises');
  await fsp.writeFile("constants/QuadraticVoting_FOR_Uniswap_Address.txt",  deployedQuadratic_Voting_Contract.address );
  
  
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });