import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://images.pexels.com/**"), new URL("https://o7y30yptvf.ufs.sh/**")],
  },
};

export default nextConfig;
