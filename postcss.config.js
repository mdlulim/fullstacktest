module.exports = {
    plugins: [
      require('postcss-import'),
      require('tailwindcss')('@reablocks/core/config'),
      require('autoprefixer'),
    ],
  };