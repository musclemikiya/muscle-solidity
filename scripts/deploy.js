async function main () {
  // We get the contract to deploy
  const Item = await ethers.getContractFactory('PolygonBulkMintItem');
  console.log('Deploying PolygonBulkMintItem...');
  const item = await Item.deploy();
  await item.deployed();
  console.log('PolygonBulkMintItem deployed to:', item.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });