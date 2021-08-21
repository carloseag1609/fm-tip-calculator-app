module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/sass/_variables.scss";
          @import "~@/sass/_mixins.scss";
          @import "~@/sass/_global.scss";
        `
      }
    }
  }
}
