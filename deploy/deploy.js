
const hre = require("hardhat");

async function main() {
  const MyVideo = await ethers.getContractFactory("MyVideo");
  const myVideoContract = await MyVideo.deploy();
  console.log(myVideoContract)
  console.log("MyVideo deployed to:", myVideoContract.target);

}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
})