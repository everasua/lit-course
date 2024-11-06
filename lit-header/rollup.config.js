import typescript from "@rollup/plugin-typescript";
import copy from 'rollup-plugin-copy'

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "iife",
  },
  plugins: [typescript({ module: "ES6" }),copy({
    targets: [
      { src: 'src/header.css', dest: 'dist/' }
    ]
  })],
};