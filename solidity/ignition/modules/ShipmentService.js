const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const ShipmentServiceModule = buildModule("ShipmentServiceModule", (m) => {
  const token = m.contract("ShipmentService");

  return { token };
});

module.exports = ShipmentServiceModule;