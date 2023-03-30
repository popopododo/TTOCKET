const SangToken = artifacts.require("SangToken");
const Ticket = artifacts.require("Ticket");
const TicketReceiver = artifacts.require("TicketReceiver");

module.exports = async function (deployer) {
  await deployer.deploy(SangToken, "SANGMINTOKEN", "SANGMIN");
  await deployer.deploy(Ticket);
  // const ticketInstance = await Ticket.deployed();
  // await deployer.deploy(TicketReceiver,ticketInstance.address);
};