# `babel-plugin-framer-x`

This plugin lets you directly use Framer X components in a larger React application. It removes two things that normally you need to do by-hand:

- All imported values from `framer`;
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
