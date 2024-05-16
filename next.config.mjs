/** @type {import('next').NextConfig} */
const nextConfig = {
    output: `standalone`,
    images: {
        domains: ['randomuser.me', 'aceternity.com', 'learninglabwebsite.s3.ap-southeast-1.amazonaws.com']
      },
};

export default nextConfig;
