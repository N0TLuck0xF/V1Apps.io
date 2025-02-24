#!/usr/bin/env node
const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your app GitHub repo URL: ", async (repoUrl) => {
  try {
    const response = await axios.post("https://your-api.com/api/deploy/cli", { userId: "123", appRepo: repoUrl });
    console.log("Deployment started:", response.data);
  } catch (error) {
    console.error("Deployment failed:", error.response?.data || error);
  }
  rl.close();
});
