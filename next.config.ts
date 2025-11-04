import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
     {
        protocol: 'https',
        hostname: 'images.unsplash.com',  // Para URLs diretas de fotos
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',  // Para random
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',  // Para variações processadas
        port: '',
        pathname: '/**',
      },
    ] 
  }
};

export default nextConfig;
