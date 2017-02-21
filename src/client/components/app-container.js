import React, {Component} from 'react';
import {connect} from 'react-redux';
import trumpMeltdown from '../images/trump-meltdown.jpg';
import {fetchTracks} from '../actions/tracks-actions';

export class AppContainer extends Component {
  componentDidMount() {
    this.props.fetchTracks();
  }

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

    return <div>
      <div style={containerStyle}>
        <div className="section">
          <div className="u-text-center u-padding-top u-padding-bottom">
            <img style={imgStyle} src={trumpMeltdown} />
          </div>
          <iframe width="500" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308531660&amp;color=ef6f00&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
        </div>
      </div>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks
  }
}

const mapDispatchToProps = {fetchTracks};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);