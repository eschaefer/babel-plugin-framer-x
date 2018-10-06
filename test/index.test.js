const babel = require('@babel/core');
const plugin = require('../src/index.js');

const example1 = `
const React = require("react");
const { PropertyControls, ControlType } = require("framer");

export class Example extends React.Component {
  static defaultProps = { text: "Hello World!" };

  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" }
  };

  render() {
    return React.createElement("div", null, this.props.text);
  }
}
`;

const example2 = `
import React from "react";
import { PropertyControls, ControlType } from "framer";

export class Example extends React.Component {
  static defaultProps = { text: "Hello World!" };

  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" }
  };

  render() {
    return React.createElement("div", null, this.props.text);
  }
}
`;

const plugins = [
	plugin,
	'@babel/plugin-syntax-flow',
	'@babel/plugin-syntax-typescript',
	'@babel/plugin-syntax-class-properties'
];

it('works on imports', () => {
	const { code } = babel.transform(example1, {
		plugins
	});
	expect(code).toMatchSnapshot();
});

it('works on requires', () => {
	const { code } = babel.transform(example2, {
		plugins
	});
	expect(code).toMatchSnapshot();
});
