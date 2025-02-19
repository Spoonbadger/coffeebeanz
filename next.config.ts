import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.mukilteocoffee.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.amazon.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.bluebottle.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images-na.ssl-images-amazon.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.peets.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'brooklynlabcoffee.com',
        pathname: '/cdn/shop/**',
      },
      {
        protocol: 'https',
        hostname: 'brooklynlabcoffee.com',
      },
      {
        protocol: 'https',
        hostname: 'fidalgocoffee.com',
      },
      {
        protocol: 'https',
        hostname: 'vervecoffee.com',
      },
    ],
  },
};

export default nextConfig;
