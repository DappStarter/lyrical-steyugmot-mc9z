require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth soccer million just private swap term'; 
let testAccounts = [
"0xe2d16ab720ecae4c141d71fa0d19f38674a6cf3a92a103aa900ec10ce27d4098",
"0x950448315add13b5b7391c1db2c1a705a00ecbe5cea3540a94bbc3c5d1fdfa0f",
"0x9beb02af60e92a9cbce229cb4331b1c2320ade1c4b37f102a1c9cb6b3cb3baf6",
"0xd03e072ea203bd5882801ac864bf8a3d018cc251362a1570132a5447a972452f",
"0xa4d49c16e3c699532bab8b68d492f511d72c14c416143c73c9bfa02dd1615c96",
"0x30e94f400e3dcefbd782a74ea04df71dfbc9360a6b588ad7c6e519304cf6d8bf",
"0x556c758081965b128f1405b90f2bd980706e1fa74b3cfbc875c7662e298c12b5",
"0x54704e39af602990fcd5845cb0e87b902e91d9d9c1aae24e59fb9c057d3d72df",
"0xdf3fdd42584ca61c720c17683a717220c356147044fd2b63db29f8c6c43d2146",
"0x1ac2ca863186c3331b229fce234b5cff3cc1522019e4c5d69b4296181bad2d8e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


