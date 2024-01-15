const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: process.env.NODE_ENV !== "production",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "dummyimage.com",
      },
      {
        protocol: 'https',
        hostname: "ik.imagekit.io",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/projects",
        permanent: false,
      },
    ]
  },
}

module.exports = withPWA((nextConfig))
