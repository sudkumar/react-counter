# Counter

### Installation

```shell
$ npm install --save react-counter
```

### Usage

```javascript
import Counter from "react-counter"

const MyComponent = () => {
  return <Counter value={100} render={count => {
    return <span>{count}</span>
    }} />
}

```