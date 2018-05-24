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

type State = {
  count: number
};

type RAF = (fn: () => void) => number;

const root: { requestAnimationFrame: RAF } = typeof window === 'undefined' ? global : window

const raf: RAF = root.requestAnimationFrame

export class Counter extends React.Component<Props, State> {

  static defaultProps = {
    from: 0,
    to: 0,
    easeFn: "ease-out",
    duration: 1500,
    render: (value: number) => <span>{value}</span>,
    strict: false,
  }
  state = {
    count: 0
  }
  easeFn: EaseFn
  rafHandle: number

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

  componentWillUnmount () {
    this.cancelUpdate()
  }

  cancelUpdate () {
    this.rafHandle && raf.cancel(this.rafHandle)
  }

  componentDidUpdate (prevProps: Props) {
    const { from, to } = prevProps
    if (from !== this.props.from || to !== this.props.to) {
      // need to update recycle
      this.cancelUpdate()
      this.setState({
        count: this.props.from
      }, () => {
        this.incrementCounter(this.props.from)
      })
    }
  }

  incrementCounter (counter?: number = 0) {
    const { to, duration, strict } = this.props
    if (this.state.count < to) {
      this.setState(({ count: number }): ({ count: number }) => ({
        count: this.easeFn(counter, 0, to, duration)
      }), () => {
        const timeBeforeRag: number = getCurrentTime()
        this.rafHandle = raf(() : void => {
          const timeAtInc: number = getCurrentTime()
          this.incrementCounter(counter + (strict ? timeAtInc - timeBeforeRag : 16))
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
