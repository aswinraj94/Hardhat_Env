// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface IMembership_Abstraction {
  //function votingPower(address) external view returns(uint256);
  
  function approve(address spender, uint rawAmount) external returns (bool);
  
  function transferFrom(address src, address dst, uint rawAmount) external returns (bool);
  
  function transfer(address recipient, uint amount) external returns (bool);
  
  function permit(address owner, address spender, uint rawAmount, uint deadline, uint8 v, bytes32 r, bytes32 s) external;

}
