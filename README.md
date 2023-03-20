[TOC]

# Sample Hardhat-Foundry Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

## Getting Started

```
npm install
forge install
```

## Run test

- with foundry

```
forge test
```

- with hardhat

```
npx hardhat test
```

## Notice

Whenever you install new libraries using Foundry, make sure to update your remappings.txt file by running forge `remappings > remappings.txt`

[Remapping dependencies](https://book.getfoundry.sh/projects/dependencies#remapping-dependencies)

```
forge remappings > remappings.txt
```

## Recommend resource

### Hardhat plugins

- [hardhat-contract-sizer](https://www.npmjs.com/package/hardhat-contract-sizer): Output Solidity contract sizes with Hardhat.
- [solidity-coverage](https://www.npmjs.com/package/solidity-coverage): Code coverage for Solidity testing
- [hardhat-gas-reporter](https://www.npmjs.com/package/hardhat-gas-reporter): A Mocha reporter for Ethereum test suites or use`REPORT_GAS=true npx hardhat test` instead
- [@nomiclabs/hardhat-etherscan](https://www.npmjs.com/package/@nomiclabs/hardhat-etherscan): Hardhat plugin for integration with Etherscan's contract verification service.

### Template

- [hardhat-foundry-template](https://github.com/foundry-rs/hardhat-foundry-template)
