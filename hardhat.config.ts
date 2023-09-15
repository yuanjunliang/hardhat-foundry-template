import * as dotenv from "dotenv";
dotenv.config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-foundry";
import "@nomicfoundation/hardhat-verify"
import "hardhat-deploy";

import "./tasks";
import networks from "./networks";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  namedAccounts: {
    deployer: process.env.DEPLOYER || "",
  },
  networks: Object.assign({}, networks, {}),
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN || "",
      goerli: process.env.ETHERSCAN || "",
      avalancheFujiTestnet: process.env.ETHERSCAN_AVAX || "",
      polygonMumbai: process.env.ETHERSCAN_POLYGON || "",
      arbitrumGoerli: process.env.ETHERSCAN_ARB || "",
      baseGoerli: process.env.ETHERSCAN_BASE || "",
      bscTestnet: process.env.ETHERSCAN_BSC || "",
      polygon: process.env.ETHERSCAN_POLYGON || ""
    },
  },
};

export default config;
