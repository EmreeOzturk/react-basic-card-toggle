/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export class Collapse extends Component {
  state = {
    isOpen: true,
  };

  render() {
    return (
      <div>
        <a
          className="btn btn-primary w-100"
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
        >
        
        {React.Children.map(this.props.children, child => child.props.title)}
           


        </a>

        {this.state.isOpen ? (
          <div className="collapse show ">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
