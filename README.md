# `babel-plugin-framer-x`

This plugin lets you directly use a Framer X components in a larger React application. It removes two things that normally you need to do by-hand:

- All imported values from `framer`;
- All `propertyControls` class properties.

## Quick start

Install the plugin first:

```
npm install --save-dev babel-plugin-framer-x
```

Then add it to your babel configuration:

```JSON
{
  "plugins": ["babel-plugin-framer-x"]
}
```
