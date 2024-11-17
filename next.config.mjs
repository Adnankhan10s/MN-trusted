/** @type {import('next').NextConfig} */
const nextConfig = {  
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '/dd9qru6ue/image/upload/**', 
          },
        ],
      },
    env:{
        cloudinaryName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
        cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
    },
};

export default nextConfig;
