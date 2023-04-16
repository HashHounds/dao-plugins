import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: process.env.MUMBAI_RPC_URL,
      accounts: [String(process.env.PK)],
    },
    frame: {
      httpHeaders: { origin: "hardhat" },
      url: "http://localhost:1248",
    },
  },
  namedAccounts: {
    deployer: 0,
  },
};

export default config;
