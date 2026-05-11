/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // https://i.ibb.co/jkbHpdST/images-3.jpg
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
