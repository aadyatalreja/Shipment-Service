require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;

if (!ALCHEMY_API_KEY || !SEPOLIA_PRIVATE_KEY) {
  throw new Error("❌ Missing environment variables in .env file");
}

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${SEPOLIA_PRIVATE_KEY}`], // Add 0x prefix if it was removed
    },
  },
  etherscan: {
    apiKey: {
      sepolia: "your-etherscan-api-key-if-needed",
    },
  },
  sourcify: {
    enabled: true,
  },
};
