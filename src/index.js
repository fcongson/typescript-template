const main = () => {
  console.log("🚀");
};

module.exports = { main };

if (require.main === module) {
  main();
}
