import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './main.css';

export class Navbar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dropdown: false
    };
  }
  static propTypes = {
    header: PropTypes.string,
    headerHref: PropTypes.string,
    libraryVersion: PropTypes.string,
    children: PropTypes.node
  }
  toggleDropDown = () => {
    this.setState({
      dropdown: !this.state.dropdown
    });
  }
  render () {
    const { header, headerHref, children, libraryVersion } = this.props;
    const { dropdown } = this.state;
    const navbarClass = dropdown ? `${styles.nav} ${styles.responsive}` : styles.nav;
    return (
      <div className={navbarClass}>
        <a href={headerHref}>{ header } <small>v{libraryVersion}</small></a>
        { children }
        <button type="button" onClick={this.toggleDropDown} className={styles.icon}>
          &#9776;
        </button>
      </div>
    );
  }
}

export class NavItem extends Component {
  static propTypes = {
    name: PropTypes.string,
    href: PropTypes.string
  }
  render () {
    const { href, name } = this.props;
    return (
      <a href={href}>{name}</a>
    );
  }
}
