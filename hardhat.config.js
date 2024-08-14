require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    mumbai: {
      url: "https://rpc-amoy.polygon.technology",
      accounts: process.env.PRIVATE_KEY,
    },
  },
  paths: {
    artifacts: "/artifacts",
  }
};
