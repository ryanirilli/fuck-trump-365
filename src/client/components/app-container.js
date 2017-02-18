import React, {Component} from 'react';
import trumpMeltdown from '../images/trump-meltdown.jpg';

export default class AppContainer extends Component {
  render() {
    const imgStyle = {
      maxWidth: '100px'
    };

    const containerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    };

    return <div style={containerStyle}>
      <img style={imgStyle} src={trumpMeltdown} />
    </div>
  }
}