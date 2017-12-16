// @flow
import "./polyfills"
import * as React from "react"

import { linear,
  easeIn,
  easeOut,
  easeInOut,
  getCurrentTime,
  type EaseFn
} from "./utils"

type Props = {
  value: number,
  render: (value: number) => React.Node,
  easeFn: "linear" | "ease-in" | "ease-out" | "ease-in-out",
  duration: number
};

type State = {
  count: number
};

const raf: (fn: () => void) => number = window.requestAnimationFrame

export class Counter extends React.Component<Props, State> {

  static defaultProps = {
    value: 0,
    easeFn: "ease-out",
    duration: 1500,
    render: (value: number) => <span>{value}</span>
  }

  state = {
    count: 0
  }

  easeFn: EaseFn

  constructor (...args: Array<any>) {
    super(...args)
    const { easeFn } = this.props
    switch (easeFn) {
    case "linear":
      this.easeFn = linear
      break
    case "ease-in":
      this.easeFn = easeIn
      break
    case "ease-out":
      this.easeFn = easeOut
      break
    case "ease-in-out":
      this.easeFn = easeInOut
      break
    default:
      console.warn("Unhandled tyep of ease function: ", easeFn, ". Using linear")
      this.easeFn = linear
      break
    }
  }

  componentDidMount () {
    this.incrementCounter()
  }

  incrementCounter (counter?: number = 0) {
    const { value, duration } = this.props
    if (this.state.count < value) {
      this.setState(({ count: number }): ({ count: number }) => ({
        count: this.easeFn(counter, 0, value, duration)
      }), () => {
        const timeBeforeRag: number = getCurrentTime()
        raf(() : void => {
          const timeAtInc: number = getCurrentTime()
          this.incrementCounter(counter + timeAtInc - timeBeforeRag)
        })
      })
    }
  }

  render () {
    const { render } = this.props
    const { count } = this.state
    return render(count)
  }
}

export default Counter