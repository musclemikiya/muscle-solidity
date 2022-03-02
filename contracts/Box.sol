pragma solidity ^0.8.0;

contract Box {
  uint256 private _value;
  string private _name;

  event ValueChanged(uint256 value);

  function store(uint256 value) public {
    _value = value;
    _name = "fukuchan";
    emit ValueChanged(value);
  }

  function retrieve() public view returns (uint256) {
    return _value;
  }

  function getName() public view returns (string memory) {
    return _name;
  }
}