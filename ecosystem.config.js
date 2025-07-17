module.exports = {
  apps: [
    {
      name: "nurpet-website",
      script: "npm",
      args: "start",
      cwd: "./",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
