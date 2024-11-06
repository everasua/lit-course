import typescript from "@rollup/plugin-typescript";
import copy from 'rollup-plugin-copy'

import resolve from '@rollup/plugin-node-resolve'

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "iife",
  },
  plugins: [typescript({ module: "ES2020" }),copy({
    targets: [
      { src: 'src/header.css', dest: 'dist/' }
    ]
  }), resolve()],
};