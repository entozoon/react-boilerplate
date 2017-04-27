require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class FoodThoughts extends React.Component {
  static defaultProps = {
    flavour: 'cold'
  }
  render() {
    const food = 'pizza';
    //const { flavour } = this.props;

    return (
      <div>
        <p>{`I like ${food}`}</p>
        <p>Specifically, {flavour} pizza</p>
      </div>
    );
  }
}

class AppComponent extends React.Component {
  render() {
    const title = 'Wooh';
    return (
      <div className="index">
        <h1>{title}</h1>
        <FoodThoughts flavour="margarita" />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
