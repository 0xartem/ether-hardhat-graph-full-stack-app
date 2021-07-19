require("@nomiclabs/hardhat-waffle");

const ropstenAddrPrivKey = '71eae105e1e7e6bb46aa0a8b34135ad59a20e5873deb8a751f7e3c69fbaf12b4'

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/494fdf9c55be4bfc995f0eaa02a4c698",
      accounts: [`0x${ropstenAddrPrivKey}`]
    }
  }
};

