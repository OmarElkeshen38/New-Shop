/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ['fakestoreapi.com'],
        loader: 'imgix',
    },

}

module.exports = { 
    images: {
        domains: ['fakestoreapi.com'],
    },
 };
