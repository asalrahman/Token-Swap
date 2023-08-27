const { network, ethers } = require("hardhat");
const { swapRouterAddress } = require("../hepers-hardhat.config"); 

module.exports = async function ({ deployments, getNamedAccounts }) {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    console.log("Deploying...");
    const swap = await deploy("Swap", {
        from: deployer,
        args: [swapRouterAddress], 
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    });
    console.log("Deployed");
};

module.exports.tags = ["all", "swap"];
