# Counter

### Installation

```shell
$ npm install --save reactjs-counter
```

### Usage

```javascript
import Counter from "reactjs-counter"

const MyComponent = () => {
  return <Counter value={100} />
}

```

### Props

```javascript
// @flow

type Props = {
  value: number, // value to which counter should go, start from 0
  render: (value: number) => React.Node, // render function to render an component
  easeFn: "linear" | "ease-in" | "ease-out" | "ease-in-out", // easing functions
  duration: number // duration for counting
};

```
