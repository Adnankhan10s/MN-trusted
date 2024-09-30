/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['res.cloudinary.com'],
    },
    env:{
        cloudinaryName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
        cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
    },
};

export default nextConfig;
