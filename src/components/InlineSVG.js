import React, { PropTypes } from 'react';
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
      return <g role="presentation" dangerouslySetInnerHTML={{ __html: clean(src) }} />;
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

function camelizeAttrs (svg) {
  /* eslint-disable max-len */
  const pattern = /(fill-rule|clip-path|fill-opacity|font-family|font-size|marker-end|marker-mid|marker-start|stop-color|stop-opacity|stroke-width|stroke-linecap|stroke-dasharray|stroke-opacity|text-anchor|xlink:href)=/g;
  /* eslint-enable max-len */

  return svg.replace(pattern, function (line, attr) {
    return toCamelCase(attr) + '=';
  });
}

// remove outer svg elements
function clean (src) {
  const pattern = /<svg[^>]*>((.|[\n\r])*)<\/svg>/;
  const matches = pattern.exec(src);

  return camelizeAttrs(matches[1]);
}

function parseAttributes (src) {
  const attributes = {};
  const SVGAttributesRegExp = /<svg\s+([^>]*)\s*>/;
  const namesAndValuesRegExp = /\s+([\w\-.:]+)(\s*=\s*(?:"([^"]*)"|'([^']*)'|([\w\-.:]+)))?/g;

  if (typeof src === 'string') {
    const attributesMatches = SVGAttributesRegExp.exec(src);
    const attributesString = attributesMatches ? attributesMatches[1] : '';

    let match = namesAndValuesRegExp.exec(attributesString);

    while (match != null) {
      attributes[match[1]] = match[2] || (match[3] ? match[3] : match[4] ? match[4] : match[5]) || match[1];
      match = namesAndValuesRegExp.exec(attributesString);
    }
  }

  return attributes;
}

function toCamelCase (string) {
  return string.replace(
    /([-:]\w)/g,
    function ($1) { return $1.toUpperCase().replace('-', '').replace(':', ''); }
  );
}
