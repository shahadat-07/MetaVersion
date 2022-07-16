const { ethers } = require("hardhat");

const getUsers = async () => {
    const owner = (await ethers.getSigners())[0];
    const contract = await ethers.getContract("MetaVisionRegister");

    console.log((await contract.connect(owner).getNumberOfUsers()).toString());
};

getUsers()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
