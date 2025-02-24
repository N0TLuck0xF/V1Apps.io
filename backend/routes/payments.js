const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/payment-status', async (req, res) => {
  try {
    const response = await axios.get('https://escrow-api.com/status', {
      headers: { Authorization: `Bearer ${process.env.ESCROW_API_KEY}` }
    });

    if (response.data.status === "confirmed") {
      res.json({ paymentConfirmed: true });
    } else {
      res.json({ paymentConfirmed: false });
    }
  } catch (error) {
    res.status(500).json({ error: "Payment verification failed" });
  }
});

module.exports = router;
