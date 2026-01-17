module.exports = {
  server: {
    command: "npm run preview",
    port: 4321,
    launchTimeout: 30000,
  },
  launch: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
};
