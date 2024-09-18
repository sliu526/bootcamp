/** @type {import('next').NextConfig} */

export default {
    async rewrites() {
      return [
        {
          source: '/api/test',
          destination: 'http://localhost:8080/api/test',
        },
      ]
    },
}