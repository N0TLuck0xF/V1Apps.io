const express = require('express');
const axios = require('axios');
const router = express.Router();

const deployUserApp = async (userId, appRepo) => {
  try {
    const droplet = await axios.post(
      "https://api.digitalocean.com/v2/droplets",
      {
        name: `user-${userId}-server`,
        region: "nyc3",
        size: "s-1vcpu-1gb",
        image: "docker-20-04",
        ssh_keys: [],
        user_data: `#!/bin/bash
          apt update -y && apt install -y docker.io git
          git clone ${appRepo} /home/deploy/app
          cd /home/deploy/app && docker build -t myapp .
          docker run -d -p 80:3000 myapp
        `
      },
      { headers: { Authorization: `Bearer ${process.env.DIGITALOCEAN_API_KEY}` } }
    );

    return { success: true, droplet: droplet.data };
  } catch (error) {
    console.error("Deployment Error:", error);
    return { success: false, error };
  }
};

router.post('/deploy/github', async (req, res) => {
  const { userId, repoUrl } = req.body;
  const deployResult = await deployUserApp(userId, repoUrl);
  res.json(deployResult);
});

module.exports = router;
