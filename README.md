# `babel-plugin-framer-x`

## Who is this for?

- You have components built with Framer X, but want to publish a living styleguide with something like [Storybook](http://storybook.js.org/) or [Styleguidist](https://react-styleguidist.js.org/).
- You want to use components built in Framer X directly in a React application.

This plugin removes two things that normally you need to do by-hand:

- All imported values from `framer`.
- All `propertyControls` class properties.

```javascript
// Removes this
import { PropertyControls, ControlType } from "framer";

// Removes this
const { PropertyControls, ControlType } = require("framer");

// Removes this
static propertyControls: PropertyControls = {
  text: { type: ControlType.String, title: "Text" },
  color: { type: ControlType.Color, title: "Background Color" }
}

// Removes this
ComponentName.propertyControls = {
  text: { type: ControlType.String, title: "Text" },
  color: { type: ControlType.Color, title: "Background Color" }
};
```

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
