# placeholder-kit

svg placeholder images with auto contrast. icon goes black or white depending on the background color, you dont have to think about it.

## install

```bash
npm install placeholder-kit
```

## usage

### as img src

```jsx
import { placeholder } from "placeholder-kit"

<img src={placeholder("400x250")} />
<img src={placeholder("400x250", "#1e293b")} />
<img src={placeholder(200, "#7c3aed")} />
<img src={placeholder("400x250", "#1e293b", { text: "banner", radius: 12 })} />
```

### as react component

```jsx
import { Placeholder } from "placeholder-kit"

<Placeholder size="400x250" />
<Placeholder size="400x250" bg="#1e293b" />
<Placeholder size={200} bg="#7c3aed" />
```

the component reads its actual size from css automatically. if you dont pass width/height it fills the parent and shows the real dimensions.

```jsx
<div style={{ width: 400, height: 250 }}>
  <Placeholder />
</div>
```

## placeholder() function

returns a data uri you can use anywhere a image url works.

```
placeholder(size, bg?, options?)
```

| param | type | default | what it does |
|-------|------|---------|--------------|
| `size` | `string \| number` | - | `"400x250"` or `200` for square |
| `bg` | `string` | `"#ffffff"` | background color hex |
| `options.text` | `string` | auto | custom text, otherwise shows dimensions |
| `options.radius` | `number` | `0` | border radius |
| `options.iconOpacity` | `number` | `0.35` | icon opacity |
| `options.textOpacity` | `number` | `0.5` | text opacity |

## \<Placeholder /> component

| prop | type | default | what it does |
|------|------|---------|--------------|
| `size` | `string \| number` | - | `"400x250"` or `200`, auto shows dimensions |
| `width` | `number` | - | explicit width in px |
| `height` | `number` | - | explicit height in px |
| `bg` | `string` | `"#ffffff"` | background color |
| `radius` | `number` | `0` | border radius |
| `text` | `string` | auto | custom text |
| `iconOpacity` | `number` | `0.35` | icon opacity |
| `textOpacity` | `number` | `0.5` | text opacity |

if no size/width/height given, it goes 100% width and height and reads the actual rendered size from the dom.

## auto contrast

icon and text flip automatically based on background brightness. light bg gets dark icon, dark bg gets light icon. uses wcag luminance calc so it actually looks right.

## license

mit
