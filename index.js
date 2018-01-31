'use strict';

const babel = require('@babel/core');

const code = `
const react = require('react');
const Component = react.Component;

class MyComponent {
  render() {
  	return <div className="my-class-name" />;
  }
}
`;

console.log(
  babel.transform(code, {
    plugins: [
      '@babel/plugin-syntax-jsx',
  	  '@babel/plugin-transform-react-constant-elements',
  	  '@babel/plugin-transform-react-jsx-self'
    ]
  }).code
);