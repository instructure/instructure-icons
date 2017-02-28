import React, { PropTypes, Component } from 'react'
import shortid from 'shortid'

export default class BaseIcon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    viewBox: PropTypes.string.isRequired,
    title: PropTypes.string,
    desc: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    focusable: PropTypes.bool
  };

  static defaultProps = {
    width: '1em',
    height: '1em',
    focusable: false
  };

  constructor (props) {
    super()

    this.titleId = props.name + '__' + shortid.generate()
    this.descId = props.name + '__' + shortid.generate()
  }

  get role () {
    if (this.props.title) {
      return 'img'
    } else {
      return 'presentation'
    }
  }

  renderTitle () {
    const { title } = this.props
    return (title) ? (
      <title id={this.titleId}>{title}</title>
    ) : null
  }

  renderDesc () {
    const { desc } = this.props
    return (desc) ? (
      <desc id={this.descId}>{desc}</desc>
    ) : null
  }

  get labelledBy () {
    const ids = []

    if (this.props.title) {
      ids.push(this.titleId)
    }

    if (this.props.desc) {
      ids.push(this.descId)
    }

    return (ids.length > 0) ? ids.join(' ') : null
  }

  render() {
    const {
      title,
      width,
      height,
      viewBox,
      focusable,
      ...props
    } = this.props

    delete props.name
    delete props.children
    delete props.desc

    const style = {
      fill: 'currentColor',
      width,
      height
    }

    return (
      <svg
        {...props}
        style={style}
        width={width}
        height={height}
        viewBox={viewBox}
        aria-hidden={title ? null : 'true'}
        aria-labelledby={this.labelledBy}
        role={this.role}
        focusable={focusable}>
        {this.renderTitle()}
        {this.renderDesc()}
        <g role="presentation">
          {this.props.children}
        </g>
      </svg>
    )
  }
}
