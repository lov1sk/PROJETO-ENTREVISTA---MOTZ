import "dotenv/config";
import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "mobile-3",
  slug: "mobile-3",
  version: "1.0.0",
  extra: {
    apiUrl: process.env.API_URL,
  },
});
