// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;



contract Membership_Abstraction{

    struct Voting_Data{
        bool IsaMember;
		//address  wallet_address;
        //mapping ( uint => mapping(address=>bool)) IsallowedtoVote;
        uint256 votingPower;
        //mapping (address=>bool) CanMakeProposal;
    }
	
	mapping(address => Voting_Data) Members_Data;

	//Member_Data public Members_Abstraction_Data;
}