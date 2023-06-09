import "dotenv/config";

export const config = {
  port: process.env.PORT || 8080,
  mongoUri: process.env.MONGO_URI,
  secretKey: process.env.SECRET_KEY || "SecretJWT",
  cloudName: process.env.CLOUD_NAME,
  cloudKey: process.env.CLOUD_API_KEY,
  cloudSecret: process.env.CLOUD_SECRET,
};

export default config;
