

const { ethers } = require("hardhat");

async function main() {

  //import Membership_data from './artifacts/contracts/IToken_Factory.sol/IMembership_Abstraction.json';

  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so whitelistContract here is a factory for instances of our Whitelist contract.
  */
  const Token_Factory_Contract = await ethers.getContractFactory("Token_Factory");

  // here we deploy the contract
  //const deployed_Token_Factory_Contract = await Token_Factory_Contract.deploy(10000000,"Test_Token_Factory",1,"TTF");
  // 10 is the Maximum number of whitelisted addresses allowed

  // Wait for it to finish deploying
  //await deployed_Token_Factory_Contract.deployed();
  var deployed_Token_Factory_Contract = 0x252151;

  // print the address of the deployed contract
  console.log("Token_Factory Contract Address:", deployed_Token_Factory_Contract);
  var fsp = require('fs/promises');
  await fsp.writeFile("constants/index.js", "const TOKEN_FACTORY_CONTRACT_ADDRESS = "+'"'+ deployed_Token_Factory_Contract +'"'+ ";module.exports = { TOKEN_FACTORY_CONTRACT_ADDRESS };");
  



  //var abi_path = "artifacts/contracts/IToken_Factory.sol/IMembership_Abstraction.json"


  //let json = require('./artifacts/contracts/IToken_Factory.sol/IMembership_Abstraction.json');
  //console.log(json, 'the json obj');
  //var abi_path= fetch("./artifacts/contracts/IToken_Factory.sol/IMembership_Abstraction.json");
  //const myObj = JSON.parse(abi_path);
  //var abi = json.abi;

  var path_relative ="Hardhat_Env/../../"
  await fsp.writeFile(path_relative+"web-app/constants/index.js", " export const VOTING_CONTRACT_ADDRESS = "+'"'+deployed_Token_Factory_Contract+'"'+ ";export const abi ="+abi+ ";");

  
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });