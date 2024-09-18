/** @type {import('next').NextConfig} */

export default {
    async rewrites() {
      return [
        {
          source: '/api/basics',
          destination: 'http://localhost:8080/api/basics',
        },
      ]
    },
}