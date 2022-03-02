pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PolygonBulkMintItem is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;
    Counters.Counter private _tokenIds;

    string public constant baseURI = "https://muscle-test-site.web.app/metadata/erc721/";

    constructor() ERC721("PolygonBulkMintItem", "MuscleHustle") {}

    function bulkMint(address[] memory _toList, uint256[] memory _tokenIdList) public onlyOwner  {
        require(_toList.length == _tokenIdList.length, "input length must be same");
        for (uint256 i = 0; i < _tokenIdList.length; i++) {
            _safeMint(_toList[i], _tokenIdList[i]);
        }
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) onlyOwner {
      super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view virtual override(ERC721, ERC721URIStorage) returns (string memory) {
      return string(
                    abi.encodePacked(
                        baseURI,
                        tokenId.toString(),
                        '.json'
                    )
                );
    }
}