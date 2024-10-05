const redis = require("redis");
const client = redis.createClient({
  url: "redis://localhost:6379",
});

client.connect().catch(console.error);

client.on("error", (err) => {
  console.error("Redis Error: ", err);
});

module.exports = client;
