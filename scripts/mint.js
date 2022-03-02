const { ethers } = require("hardhat")

async function main() {
  const PolygonItemTest = await ethers.getContractFactory('PolygonItemTest')
  const item = await PolygonItemTest.attach('0xe08Ba582A7D8D6513A06996e4D21Ff65dE5541D8')
  const id = await item.awardItem("0x63E232132D41b6CBFb0BaFD2779AbdE9ce9c9C68")
  console.log(id)
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.error(e)
    process.exit(1)
  })