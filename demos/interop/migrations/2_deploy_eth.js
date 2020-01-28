var TestToken = artifacts.require("./TestToken.sol");
var TestItem = artifacts.require("./TestItem.sol");

module.exports = function(deployer, network) {
  if (network == "development") {
    deployer.deploy(TestToken, 100000);
    deployer.deploy(TestItem);
  }
};