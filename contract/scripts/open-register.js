const { ethers } = require("hardhat");

const openRegister = async () => {
    const owner = (await ethers.getSigners())[0];
    const contract = await ethers.getContract("MetaVisionRegister");

    await contract.connect(owner).openRegistration();

    console.log("Opened!");
};

openRegister()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
