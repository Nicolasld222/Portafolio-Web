/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dwkq16pdu/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
