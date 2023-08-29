const { ethers } = require("ethers");
const Web3 = require("web3")

let web3;

if (typeof window.ethereum !== 'undefined') {
  web3 = new Web3(window.ethereum);
} else {
  console.log('Web3 not found. Please install MetaMask.');
}

const contractABI = [
    {
      "inputs": [
        {
          "internalType": "contract ISwapRouter",
          "name": "_swapRouter",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "DAI",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "WETH9",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeTier",
      "outputs": [
        {
          "internalType": "uint24",
          "name": "",
          "type": "uint24"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "swapRouter",
      "outputs": [
        {
          "internalType": "contract ISwapRouter",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        }
      ],
      "name": "swapWETHForDAI",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
  
const contractAddress = '0x64f5219563e28EeBAAd91Ca8D31fa3b36621FD4f';

// Initialize Web3


// Connect to the contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Get the swap button element
const swapButton = document.getElementById('swapButton');

// Listen for button click
swapButton.addEventListener('click', async () => {
  const amount = document.getElementById('amount').value;

  // Call the swapWETHForDAI function
  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const result = await contract.methods.swapWETHForDAI(web3.utils.toWei(amount)).send({ from: accounts[0] });

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Swap successful! Amount received: ${result.events.Swap.returnValues.amountOut}`;
  } catch (error) {
    console.error('Error:', error);
  }
});
