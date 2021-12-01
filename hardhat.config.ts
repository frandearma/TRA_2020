import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "solidity-coverage";
import "hardhat-gas-reporter";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [{ version: "0.7.3", settings: {} }],
  },
  networks: {
    rinkeby: {
      url: 'https://eth-mainnet.alchemyapi.io/v2/v6zL-tQvNkit2Ge2nheWNArG9kAMIrTz',
      accounts: [`0x715F149C32514aC6Db4DE7c7c3278d99B957c27b`],
      gasPrice: 8000000000
      },
    hardhat: {},
    localhost: {},
    coverage: {
      url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
    },
  }
};

export default config