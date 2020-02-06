require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note stick hospital idea beauty flock transfer'; 
let testAccounts = [
"0x38b1761da37d2344d16c733947229458a2eb06ee0582f7637cca42dc8e63559b",
"0xb65fcd080abe1fe2610067a5a18960e73076ec5874641be34b98e86928a7cf61",
"0x61b8083711fa45338c8752ce63bcbec96d857797308d6b146d9fe3857e740dcc",
"0xec7ecc0d33bc8001c02730a898205fc5e83383de60ab282d69dc36b9da210c7f",
"0x39b0bd43d7fa4d0f482bf75885e33ebf358f2464b9a6684b102cef33e81d71b2",
"0x7b355dde8261c0545bfc66767148e6094aeb09ab0e6ef56520cd0d1fadf9f695",
"0x8e4622858b09a21b3f4b536e01f9dda0a441a5331024386df5a8e9d9cf77bc5c",
"0x8bd714ee059e1559316204a870de8547fcddcbd6c2955b524480b07d1f9cfa16",
"0x14cf6899d369ee8020a1223ec744a3492581ff5f321010d1d59fc13dbfc16163",
"0x8196e60845ea0427ca65c9a23fd0e31e04edf83fad05fe94a5d8cbae0cea6cd5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
