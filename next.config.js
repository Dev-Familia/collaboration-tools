module.exports = {
  basePath: '/collaboration-tools',
  distDir: 'build',
  reactStrictMode: true,
  eslint: {
    dirs: ['src'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}
