import autoprefixer from "autoprefixer";
import babel from "rollup-plugin-babel";
import common from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import string from 'rollup-plugin-string';

export default [
  {
    input: "src/index.js",
    output: {
      file: "lib/index.js",
      format: "cjs"
    },
    external: ['path'],
    plugins: [babel(), common(), resolve()]
  },
  {
    input: "src/clientRootMixin.js",
    output: {
      file: "lib/clientRootMixin.js",
      format: "esm"
    },
    plugins: [
      postcss({ plugins: [autoprefixer] }),
      babel(),
      common(),
      resolve(),
      string({ include: '**/*.svg' })
    ]
  }
];
