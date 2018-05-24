import React from "react"
import ReactDOM from "react-dom"
import Counter from "./../../src"

const mountNode = document.getElementById('root')

const RangeInput = ({ easeFn, value }) =>
  <Counter to={value} easeFn={easeFn} render={(count) => (
     <input type="range" value={parseInt(count, 10)} readOnly min={0} max={value} />
  )} />

const EaseFns = ({ value }) => {
  return <table className="table">
    <tbody>
      <tr>
        <td>Linear</td>
        <th><RangeInput easeFn="linear" value={value} /></th>
      </tr>
      <tr>
        <td>Ease In</td>
        <th><RangeInput easeFn="ease-in" value={value} /></th>
      </tr>
      <tr>
        <td>Ease Out</td>
        <th><RangeInput easeFn="ease-out" value={value} /></th>
      </tr>
      <tr>
        <td>Ease In-Out</td>
        <th><RangeInput easeFn="ease-in-out" value={value} /></th>
      </tr>
    </tbody>
  </table>
}

const total = 158
// work out percentage as a result of total
const numberFixer = num => ((num * total) / 100)
export class Donut extends React.Component {

  static defaultProps = {
    color: "#0074d9",
    value: 0,
  }

  render () {
    const { value, color } = this.props
    const pieValue = numberFixer(value)
    return <svg width="100" height="100" className={"donut"}>
        <circle
          r="25"
          cx="50"
          cy="50"
          className="donut__circle"
          style={{
            stroke: color,
            strokeDasharray: `${pieValue} ${total}` }} />}
      <circle
        r="10"
        cx="50"
        cy="50"
        className="donut__hole" />
    </svg>
  }
}

class App extends React.Component {
  state = {
    value: 1000
  }
  render () {
    const { value } = this.state
    return <div>
      <Counter to={1} render={(count) => {
        return <section className="hero text-center" style={{ opacity: count }}>
          <div className="container">
            <h1>ReactJS Counter</h1>
            <p>A Simple counter utility component to help manage the counting with easing.</p>
          </div>
        </section>
      }} />
      <section className="example example--slider">
        <h1 className="text-center">Sliders</h1>
        <p className="text-center">Simple usage of counter with sliding effects</p>
        <div className="container">
          <EaseFns value={value} />
        </div>
      </section>
      <section className="example example--donut">
        <h1 className="text-center">Donuts</h1>
        <p className="text-center">Simple usage of counter with donut fill effects</p>
        <div className="container">
          <Counter to={70} render={count => {
            return <Donut value={count} />
          }} />
        </div>
      </section>
    </div>
  }
}


ReactDOM.render(<App />, mountNode)
