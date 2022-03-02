const { ethers } = require("hardhat")

async function main() {
  const accounts = await ethers.provider.listAccounts()
  console.log(accounts)

  const Box = await ethers.getContractFactory('Box')
  const box = await Box.attach('0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0')
  await box.store(10)
  const name = await box.getName()
  console.log('name: ', name)
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.error(e)
    process.exit(1)
  })