import type { NextConfig } from "next";

// Define the custom configuration for the experimental feature
interface CustomNextConfig {
  experimental: {
    serverActions: boolean; // Correctly typing serverActions
    // Add any other experimental features if necessary
  };
}

const nextConfig: NextConfig & CustomNextConfig = {
  experimental: {
    serverActions: true, // Enable experimental server actions
  },
};

export default nextConfig;
