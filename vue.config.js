const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "./build",
  configureWebpack: {
    resolve: {
      alias: {
        componnts: "@/components",
      },
    },
  },
});
