import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-foundry";
import "./tasks";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
};

export default config;
