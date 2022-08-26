const {ethers} = require('ethers')
const paypal = require('./paypal/paypal.json')

const provider = new ethers.providers.JsonRpcProvider("https://eth-rinkeby.alchemyapi.io/v2/MZhYBNHgMUkc1lHWLLmHd6TLITCaSivi");

// Contracts 
const paypalContract = new ethers.Contract('0xB74F110EF5ABD3720D300EF619d2Cc263a150Df3', paypal.output.abi, provider);

async function getData() {
    const get = await paypalContract.filters.recipeints()
    const trans = await paypalContract.queryFilter(get);
    console.log(trans)
  }
  
getData()