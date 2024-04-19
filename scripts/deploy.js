const hre ==  require("hardhat");

const tokens = (nToken) => {
    return ethers.utils.parsedUnits(nToken.toString(),"ether");
};

async function main(){
    //DEPLOY TOKEN CONTRACT
    const _initialSupply = tokens(50000000);

    const TheBlockchainCoders = await hre.ethers.getContractFactory(
        "TheBlockchainCoders"
    );

    const TheBlockchainCoders = await TheBlockchainCoders.deploy(_initialSupply);

    await TheBlockchainCoders.deploy();
    console.log('TheBlockchainCoders: ${theBlockchainCoders.address}');

    //  TOKEN SALE CONTRACT
    const _tokenPrice = tokens(1);
ß
    const TokenSale = await hre.ethers.getContractFactory("TokenSale");
    const tokenSale = await TokenSale.deploy(
        TheBlockchainCoders.address,
        _tokenPrice
    );

    await tokenSale.deployed();
    console.log('TokenSale: ${tokenSale.address}' )

}
main().catch((error)=> {
    console.error(error);
    process.exitCode = 1;
});