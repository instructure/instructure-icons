import React from 'react';
import PropTypes from 'prop-types';
import svgtojsx from 'svg-to-jsx';
import shortid from 'shortid';

export default class InlineSVG extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    src: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    focusable: PropTypes.bool
  };

  static defaultProps = {
    focusable: false
  };

  constructor (props) {
    super();

    this.titleId = shortid.generate();
    this.descId = shortid.generate();
  }

  get role () {
    if (this.props.title) {
      return 'img';
    } else {
      return 'presentation';
    }
  }

  renderTitle () {
    const { title } = this.props;
    return (title) ? (
      <title id={this.titleId}>{title}</title>
    ) : null;
  }

  renderDesc (desc) {
    return (desc) ? (
      <desc id={this.descId}>{desc}</desc>
    ) : null;
  }

  get labelledBy () {
    const ids = [];

    if (this.props.title) {
      ids.push(this.titleId);
    }

    if (this.props.desc) {
      ids.push(this.descId);
    }

    return (ids.length > 0) ? ids.join(' ') : null;
  }

  renderContent (children, src) {
    if (src) {
      return <g role="presentation" dangerouslySetInnerHTML={{ __html: svgtojsx(src) }} />;
    } else {
      return <g role="presentation">{children}</g>;
    }
  }

  render () {
    const {
      title,
      desc,
      focusable,
      children,
      src,
      ...props
    } = this.props;

    return (
      <svg
        {...parseAttributes(src)}
        {...props}
        aria-hidden={title ? null : 'true'}
        aria-labelledby={this.labelledBy}
        role={this.role}
        focusable={focusable}>
        {this.renderTitle()}
        {this.renderDesc(desc)}
        {this.renderContent(children, src)}
      </svg>
    );
  }
}

function parseAttributes (src) {
  const attributes = {};
  const SVGAttributesRegExp = /<svg\s+([^>]*)\s*>/;
  const namesAndValuesRegExp = /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g;

  if (typeof src === 'string') {
    const attributesMatches = SVGAttributesRegExp.exec(src);
    const attributesString = attributesMatches ? attributesMatches[1] : '';

    let match = namesAndValuesRegExp.exec(attributesString);

    while (match != null) {
      if (['xmlns', 'xmlns:xlink', 'version'].indexOf(match[1]) === -1) {
        attributes[match[1]] = match[2] || (match[3] ? match[3] : match[4] ? match[4] : match[5]) || match[1];
      }
      match = namesAndValuesRegExp.exec(attributesString);
    }
  }

  return attributes;
}
