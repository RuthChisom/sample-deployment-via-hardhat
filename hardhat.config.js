require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    lisk: {
      url: "https://rpc.sepolia-api.lisk.com", // check the exact RPC if needed
      accounts: [process.env.PRIVATE_KEY], // 🚨 NEVER push this to GitHub!
    }
  }
};
