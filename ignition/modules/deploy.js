
const hre = require("hardhat");

async function main() {
  const myVideo = await hre.ethers.deployContract("MyVideo");
  const myVideoContract = await myVideo.deploy();
  
  await myVideoContract.deployed();  
  console.log("MyVideo deployed to:", myVideoContract.address);

}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
})