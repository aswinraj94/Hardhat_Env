const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { TOKEN_FACTORY_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  const TokenFactoryContract = TOKEN_FACTORY_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a Crypto Dev NFT
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
  */
  const Quadratic_Voting_Contract = await ethers.getContractFactory("QuadraticVoting_Simple");

  // deploy the contract
  const deployedCryptoDevsContract = await Quadratic_Voting_Contract.deploy(
    TokenFactoryContract,
	100
  );

  // print the address of the deployed contract
  console.log(
    "Crypto Devs Contract Address:",
    deployedCryptoDevsContract.address
  );
  var fsp = require('fs/promises');
  await fsp.writeFile("constants/QuadraticVoting_Simple_Address.txt",  deployedCryptoDevsContract.address );
  
  
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });