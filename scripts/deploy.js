async function main() {
  const contract = await ethers.getContractFactory("HelloWorld");
  const result = await contract.deploy("Hello World!");   
  console.log("Contract deployed to address:", result.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });