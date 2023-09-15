import dotenv from "dotenv"
dotenv.config({})
import { NetworkUserConfig } from "hardhat/types";

function getAccounts(): Array<string> {
  return process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : ['']
}

// Note: all rpc from chainlist

export const testnets: { [chainName: string]: NetworkUserConfig } = {
  'avax-testnet': {
    url: 'https://rpc.ankr.com/avalanche_fuji',
    chainId: 43113,
    accounts: getAccounts()
  },
  'polygon-testnet': {
    url: 'https://rpc.ankr.com/polygon_mumbai',
    chainId: 80001,
    accounts: getAccounts()
  },
  'bsc-testnet': {
    url: 'https://bsc-testnet.publicnode.com',
    chainId: 97,
    accounts: getAccounts()
  },
  goerli: {
    url: 'https://rpc.ankr.com/eth_goerli',
    chainId: 5,
    accounts: getAccounts()
  },
  'zksync-era-testnet': {
    url: 'https://testnet.era.zksync.dev',
    chainId: 280,
    accounts: getAccounts()
  },
  'linea-testnet': {
    url: 'https://rpc.goerli.linea.build',
    chainId: 59140,
    accounts: getAccounts()
  },
  'arbitrum-testnet': {
    url: 'https://arbitrum-goerli.publicnode.com',
    chainId: 421613,
    accounts: getAccounts()
  },
  'optimism-testnet': {
    url: 'https://optimism-goerli.public.blastapi.io',
    chainId: 420,
    accounts: getAccounts()
  },
  'base-testnet': {
    url: 'https://base-goerli.public.blastapi.io',
    chainId: 84531,
    accounts: getAccounts()
  },
  'mantle-testnet': {
    url: 'https://rpc.testnet.mantle.xyz',
    chainId: 5001,
    accounts: getAccounts()
  },
  'manta-testnet': {
    url: 'https://manta-testnet.calderachain.xyz/http',
    chainId: 3441005,
    accounts: getAccounts()
  },
  'taiko-testnet': {
    url: 'https://rpc.test.taiko.xyz',
    chainId: 167005,
    accounts: getAccounts()
  },
  'opbnb-testnet': {
    url: 'https://opbnb-testnet-rpc.bnbchain.org/',
    chainId: 5611,
    accounts: getAccounts()
  }
}

export const mainnets: { [chainName: string]: NetworkUserConfig } = {
  'ethereum-mainnet': {
    url: 'https://1rpc.io/eth',
    chainId: 1,
    accounts: getAccounts()
  },
  'avax-mainnet': {
    url: 'https://avalanche-c-chain.publicnode.com',
    chainId: 43114,
    accounts: getAccounts()
  },
  'polygon-mainnet': {
    url: 'https://polygon-bor.publicnode.com',
    chainId: 137,
    accounts: getAccounts()
  },
  'bsc-mainnet': {
    url: 'https://bsc-rpc.gateway.pokt.network',
    chainId: 56,
    accounts: getAccounts()
  },
  'zksync-era-mainnet': {
    url: 'https://zksync.meowrpc.com',
    chainId: 324,
    accounts: getAccounts()
  },
  'linea-mainnet': {
    url: 'https://rpc.linea.build',
    chainId: 59144,
    accounts: getAccounts()
  },
  'arbitrum-mainnet': {
    url: 'https://arbitrum.drpc.org',
    chainId: 42161,
    accounts: getAccounts()
  },
  'optimism-mainnet': {
    url: 'https://optimism.drpc.org',
    chainId: 10,
    accounts: getAccounts()
  },
  'base-mainnet': {
    url: 'https://base.meowrpc.com',
    chainId: 8453,
    accounts: getAccounts()
  },
  'mantle-mainnet': {
    url: 'https://rpc.mantle.xyz',
    chainId: 5000,
    accounts: getAccounts()
  }
}


export default Object.assign({}, testnets, mainnets)
