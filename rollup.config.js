import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: 'index.ts',
    output: [{
      file: 'index.js',
      format: 'iife',
      sourcemap: false,
    }],
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
      resolve({
        browser: true,
      }),
      commonjs()
    ],
  }
];
