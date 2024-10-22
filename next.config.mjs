/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.(mp4|webm)$/,  // Add webm and other video formats if needed
        type: 'asset/resource', // Tell Webpack to treat it as a resource
        generator: {
          filename: 'static/media/[name].[hash][ext]', // Optional: Specify output folder
        },
      });
  
      return config;
    },
  };

export default nextConfig;
