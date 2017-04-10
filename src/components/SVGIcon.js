import React, { Component } from 'react';
import { string } from 'prop-types';
import InlineSVG from './InlineSVG';

export default class SVGIcon extends Component {
  static propTypes = {
    ...InlineSVG.propTypes,
    width: string,
    height: string
  };

  static defaultProps = {
    width: '1em',
    height: '1em'
  };

  render () {
    const {
      width,
      height,
      style, // eslint-disable-line react/prop-types
      ...props
    } = this.props;

    return (
      <InlineSVG
        {...props}
        style={{...style, fill: 'currentColor', width, height}}
        width={width}
        height={height}
      />
    );
  }
}
