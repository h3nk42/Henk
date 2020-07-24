pragma solidity >=0.4.22 <0.7.0;

pragma experimental ABIEncoderV2;

import "./ERC20.sol";


contract Coin is ERC20 {
    
    uint256 public lastTimeMinted;
    
    mapping (address => uint256) userLastTimeMinted;
    
    string[10] public tagArray;
    uint256 public counter = 0;
    
    constructor() public ERC20("Coin", "coin") {
    }
    
    function mint() public {
        require ( now > userLastTimeMinted[msg.sender], 'Faucet not ready yet!');
        userLastTimeMinted[msg.sender] = now + 20;
        _mint(msg.sender, 1);
    }
    
    
    function burn() public {
        _burn(msg.sender, 1);
    }
    
    function tag(string memory _tag) public {
        require(counter<10, 'wall is full');
        _burn(msg.sender, 1);
        tagArray[counter] = _tag;
        counter++;
    }
    
}