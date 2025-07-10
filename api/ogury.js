const axios = require("axios");

module.exports = async (req, res) => {
  const API_KEY = "6c9f5f1e048f3b27a6114661d7b8e0e0711e9b538284431286a0a2fec5521fe2_41d79f4f-89a5-425c-84bc-ead3a405a407";

  try {
    const response = await axios.post("https://reporting.api.ogury.io/v2/statistics", req.body, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: "Proxy error",
      message: error.message,
      details: error.response?.data || null
    });
  }
};
