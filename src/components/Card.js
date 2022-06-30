import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Card extends Component {
  render() {
    return (
        <div>
          <div className="card w-100">
            <img src={this.props.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.text}</p>
              <p className="card-text">
                <small className="text-muted">{this.props.lastUpdated}</small>
              </p>
            </div>
          </div>
        </div>
      );
  }
}

//define proptypes
Card.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    lastUpdated: PropTypes.string.isRequired
}
//default props
Card.defaultProps = {
    title: "Card title",
    image: "https://picsum.photos/id/11/200/100",
    text: "Card with is content is a little bit longer.",
    lastUpdated: "1 mins ago"
}

export default Card