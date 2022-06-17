module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties",
    "@babel/transform-runtime",
    "inline-react-svg",
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          Pages: "./src/pages",
          Components: "./src/components",
          BaseComponents: "./src/baseComponents",
          Styles: "./src/assets/styles",
          Images: "./src/assets/images",
          Reducers: "./src/reducers",
          Services: "./src/services",
          Store: "./src/store",
          Hooks: "./src/hooks",
          Utils: "./src/utils",
          Constants: "./src/constants",
        },
      },
    ],
  ],
};
