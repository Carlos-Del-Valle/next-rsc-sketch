/** @type {import('next').NextConfig} */
const nextConfig = {
  // In case of using node -v below 14:
  //   experimental: {
  //     serverActions: true,
  //   },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
