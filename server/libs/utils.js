import Web3 from 'web3'

const RPC_URL = "https://eth-mainnet.g.alchemy.com/v2/LbGQ_gbJWj0-yJwk7p514xKZkfdXiEcI"

export function initWeb3() {
    const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL))
    return web3
}

export async function initContract(web3, config) {
    const {abi, address} = config
    console.log(abi,address)
    const contract =  new web3.eth.Contract(abi, config)
    return contract
}

