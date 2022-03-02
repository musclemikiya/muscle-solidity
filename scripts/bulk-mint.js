const { ethers } = require("hardhat")

async function main() {
  const Item = await ethers.getContractFactory('PolygonBulkMintItem')
  const item = await Item.attach('0xF91EfDA5F60D2D8739AADbD29FfCce13Ba59D81b')
  await item.bulkMint(['0x63E232132D41b6CBFb0BaFD2779AbdE9ce9c9C68', '0x70997970c51812dc3a010c7d01b50e0d17dc79c8', '0x70997970c51812dc3a010c7d01b50e0d17dc79c8'], [1, 2, 3])
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.error(e)
    process.exit(1)
  })