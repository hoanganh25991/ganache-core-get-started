const Ganache = require("ganache-core")
const Web3 = require("web3")
const shelljs = require("shelljs")

const db_path = "data/db"
shelljs.mkdir("-p", db_path)

const server = Ganache.server({
	total_accounts: 5,
	default_balance_ether: 100,
	db_path: 'data/db',
	network_id: 999,
	seed: 123,
	mnemonic: "logic cradle area quality lumber pitch radar sense dove fault capital observe",
	// blocktime: 3
});
server.listen(8545, async (err, blockchain) => {
	if(err) {
		console.log("[ERR]", err.message)
		return
	}

	console.log("[blockchain]", blockchain)
	console.log(server.constructor.name)
	console.log(Object.getOwnPropertyNames(server));
	
	const provider = server.provider
	const web3 = new Web3(provider)
	
	const accounts = await web3.eth.getAccounts()
	console.log("[accounts]", accounts)
	process.exit()
});