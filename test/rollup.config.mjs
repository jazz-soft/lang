import nodejs from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'test.mjs',
  output: {
    file: 'test.js',
    format: 'iife'
  },
  plugins: [nodejs(), commonjs()]
};
