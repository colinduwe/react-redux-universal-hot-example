import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StravaLogin extends Component {
  static propTypes = {
    textButton: PropTypes.string,
    typeButton: PropTypes.string,
    component: PropTypes.func
  };

  static defaultProps = {
    textButton: 'Connect with Strava',
    typeButton: 'button',
    component: Component.Button
  };

  componentDidMount() {
    /* const {
      appId, cookie, version, autoLoad, language
    } = this.props; */
  }

  click = () => {
    // const { scope, appId } = this.props;
    /* window.location.href =
      `https://www.strava.com/oauth/authorize?client_id=${appId}` +
      `&redirect_uri=${window.location.href}&response_type=code&scope=${scope}`; */
    window.location.href = 'api/auth/strava';
  };

  render() {
    const { textButton, typeButton, component: WrappedComponent } = this.props;
    const styles = require('./StravaLogin.scss');

    if (WrappedComponent) return <WrappedComponent stravaLogin={this.click} />;

    return (
      <button className={styles.connectwithstrava} onClick={this.click} type={typeButton}>
        {textButton}
      </button>
    );
  }
}

export default StravaLogin;
