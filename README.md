# Counter

### Installation

```shell
$ npm install --save reactjs-counter
```

### Usage

```javascript
import Counter from "reactjs-counter"

const MyComponent = () => {
  return <Counter to={80} />
}

```

### Props

```javascript
// @flow

type Props = {
  from: number, // value to which counter should go, start from 0
  to: number, // value to which counter should go, start from 0
  render: (value: number) => React.Node, // render function to render an component
  easeFn: "linear" | "ease-in" | "ease-out" | "ease-in-out", // easing functions
  duration: number, // duration for counting
  // if strict is set to true, then the counter will finish with the given duration,
  // else it'll use the 16ms (1 frame) for each to smooth the counting
  // when using strict mode, if you are using it for some animation, please make sure to add the transition for that property
  // else you may feel jerks
  strict: boolean,
};

defaultProps = {
  from: 0,
  to: 0,
  easeFn: "ease-out",
  duration: 1500,
  render: (value: number) => <span>{value}</span>,
  strict: false,
}

```
