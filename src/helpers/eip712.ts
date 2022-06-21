const example = {
  types: {
    EIP712Domain: [
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "verifyingContract", type: "address" },
    ],
    RelayRequest: [
      { name: "target", type: "address" },
      { name: "encodedFunction", type: "bytes" },
      { name: "gasData", type: "GasData" },
      { name: "relayData", type: "RelayData" },
    ],
    GasData: [
      { name: "gasLimit", type: "uint256" },
      { name: "gasPrice", type: "uint256" },
      { name: "pctRelayFee", type: "uint256" },
      { name: "baseRelayFee", type: "uint256" },
    ],
    RelayData: [
      { name: "senderAddress", type: "address" },
      { name: "senderNonce", type: "uint256" },
      { name: "relayWorker", type: "address" },
      { name: "paymaster", type: "address" },
    ],
  },
  domain: {
    name: "GSN Relayed Transaction",
    version: "1",
    chainId: 42,
    verifyingContract: "0x6453D37248Ab2C16eBd1A8f782a2CBC65860E60B",
  },
  primaryType: "RelayRequest",
  message: {
    target: "0xa83575490d7df4e2f47b7d38ef351a2722ca45b9",
    encodedFunction:
      "0x095ea7b30000000000000000000000009760cf20Ba5e2dA3E8031aCC716f62031e3Fbf4B7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    gasData: { gasLimit: "666000", gasPrice: "1700000000", pctRelayFee: "70", baseRelayFee: "0" },
    relayData: {
      senderAddress: "0x22d491bde2303f2f43325b2108d26f1eaba1e32b",
      senderNonce: "3",
      relayWorker: "0x3baee457ad824c94bd3953183d725847d023a2cf",
      paymaster: "0x957F270d45e9Ceca5c5af2b49f1b5dC1Abb0421c",
    },
  },
};

export const eip712 = {
  example,
};
