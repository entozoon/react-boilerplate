require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class Layer extends React.Component {
  // Not convinced this does anything:
  static propType = {
    type: React.PropTypes.string
  }

  render () {
    const { type } = this.props;
    return (
      <div>
        {type}<br />
      </div>
    );
  }
}

class Sandwich extends React.Component {
  /*
  constructor (props) {
    super(props);
    console.log(this.props);
    this.dimensions = this.props.dimensions;
  }
  */
  render () {
    const { dimensions, type } = this.props;
    return (
      <div>
        Bread ({type}) ({dimensions.width}cm wide)<br />
        {this.props.children}
        Bread ({type})<br />
      </div>
    );
  }
}

class Waiter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      request: 'placeholder'
    };
  }
  onChangeValue(e) {
    this.setState({
      request: e.target.value
    });
  }
  render() {
    const { request } = this.state; // passes this.state.request to request
    return (
      <div>
        <input value={request} onChange={this.onChangeValue.bind(this)} />
        <p>{request}</p>
      </div>
    )
  }
}

class AppComponent extends React.Component {
  render() {
    const title = 'Dinner';
    const arrayOfThings = ['plate', 'table'];
    return (
      <div className="index">
        <h1>{title}</h1>

        <Sandwich dimensions={ {width: 20} } type="brown">
          <Layer type="lettuce" />
          <Layer type="cheese" />
          <Layer type="ham" />
        </Sandwich>

        <ul>
          {/* key must be unique */}
          {arrayOfThings.map((thing, i) => (
            <li key={i}>{thing}</li>
          ))}
        </ul>

        <Waiter />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
