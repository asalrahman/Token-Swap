const { assert } = require("chai");
const { getNamedAccounts, ethers } = require("hardhat")

describe("Swap",function(){
let deployer,swap,DAI,WETH9
    beforeEach(async ()=>{
        await deployments.fixture(["all"]);
        [deployer] = await ethers.getUnnamedSigners();
        swap = await ethers.getContract("Swap", deployer);
        DAI = await swap.DAI();
        WETH9=await swap.WETH9();
    });
    it('Should initialize with correct values', async function () {
        assert.equal(DAI.toString(), "0x6B175474E89094C44Da98b954EedeAC495271d0F");    
        assert.equal(WETH9.toString(),"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2")
      });

      });
