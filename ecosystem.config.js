module.exports = {
  apps: [
    {
      name: 'printer-api',
      script: 'server.js', // Replace with the entry point of your app
      env: {
        PORT: 3003, // Ensure your app runs on port 3003
      },
    },
    {
      name: 'script-runners',
      script: './run_scripts.js',
      watch: false,
    },
  ],
}
