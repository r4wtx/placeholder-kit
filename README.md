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

## placeholder() function

returns a data uri you can use anywhere a image url works.

```
placeholder(size, bg?, options?)
```

| param | type | default | what it does |
|-------|------|---------|--------------|
| `size` | `string \| number` | - | `"400x250"` or `200` for square |
| `bg` | `string` | `"#e2e8f0"` | background color hex |
| `options.text` | `string` | auto | custom text, otherwise shows dimensions |
| `options.radius` | `number` | `0` | border radius |
| `options.iconOpacity` | `number` | `0.35` | icon opacity |
| `options.textOpacity` | `number` | `0.5` | text opacity |

## \<Placeholder /> component

| prop | type | default | what it does |
|------|------|---------|--------------|
| `size` | `string \| number` | - | `"400x250"` or `200`, auto shows dimensions |
| `bg` | `string` | `"#e2e8f0"` | background color |
| `radius` | `number` | `0` | border radius |
| `text` | `string` | auto | custom text |
| `iconOpacity` | `number` | `0.35` | icon opacity |
| `textOpacity` | `number` | `0.5` | text opacity |

## auto contrast

icon and text flip automatically based on background brightness. light bg gets dark icon, dark bg gets light icon. uses wcag luminance calc so it actually looks right.

## license

mit
