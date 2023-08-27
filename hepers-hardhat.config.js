const { ethers } = require("ethers");

const networkConfig = {
  default: {
    name: "hardhat"
    
},
11155111: {
    name: "sepolia",
  

  },
  31337: {
    name: "localhost",
  

  },
};

const developmentChains = ["hardhat", "localhost"];
const swapRouterAddress = "0x1234567890abcdef1234567890abcdef12345678"
module.exports = {
  networkConfig,
  developmentChains,
  swapRouterAddress
};
