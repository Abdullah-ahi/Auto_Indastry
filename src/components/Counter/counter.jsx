import React, { Component } from 'react'
import './counter.css'

export class Counter extends Component {
  render(){
    return (
      <div className="speedometr">
        <div className="ris-w"></div>
        <div className="ris-w"></div>
        <div className="ris-w"></div>
        <div className="ris-w"></div>
        <div className="ris-w"></div>
        <div className="ris-w"></div>
        <div className="ris-w"></div>
        <div className="ris-w"></div>
        <div className="ris-w"></div>

        <span className="s-0 speed">0</span>
        <span className="s-1 speed">1</span>
        <span className="s-2 speed">2</span>
        <span className="s-3 speed">3</span>
        <span className="s-4 speed">4</span>
        <span className="s-5 speed">5</span>
        <span className="s-6 speed">6</span>
        <span className="s-7 speed">7</span>
        <span className="s-8 speed">8</span>
        <span className="s-9 speed">9</span>
        <span className="s-10 speed">10</span>

        <div className="strelka"></div>
    </div>
    )
  }
}