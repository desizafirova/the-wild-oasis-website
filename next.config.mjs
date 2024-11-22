// Import statements if needed
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables React Strict Mode
  reactStrictMode: true,

  // Use SWC for faster builds and minification
  swcMinify: true,

  // Rewrites to ensure API routes aren't treated as pages
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },

  // Custom image optimization for remote patterns
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fkmabdznybtnqrkjzxwl.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/cabin-images/**',
      },
    ],
    unoptimized: process.env.NEXT_STATIC_EXPORT === 'true', // Disable optimization for static exports
  },

  // Static export configuration (conditionally applied)
  ...(process.env.NEXT_STATIC_EXPORT === 'true' && { output: 'export' }),
};

export default nextConfig;
