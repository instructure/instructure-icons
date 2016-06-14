import React, { Component } from 'react'
import BaseIcon from '../IconBase'

export default class IconFacebookBoxedLine extends Component {
  render() {
    return (
      <BaseIcon
        {...this.props}
        name="IconFacebookBoxedLine"
        viewBox="0 0 1920 1920">
        
    <defs>
        <path id="a" d="M797.007 1594H1594V0H.013v1594h796.994z"/>
    </defs>
    <g transform="translate(163 163)" stroke="none" strokeWidth="1" fillRule="evenodd">
        <mask id="b">
            <use xlinkHref="#a"/>
        </mask>
        <path d="M1328.347 0H265.68C119.563 0 .013 119.55.013 265.733v1062.534C.013 1474.517 119.563 1594 265.68 1594h1062.667c146.116 0 265.666-119.484 265.666-265.733V265.733C1594.013 119.55 1474.463 0 1328.347 0m0 132.833c73.257 0 132.833 59.576 132.833 132.9v1062.534c0 73.324-59.576 132.9-132.833 132.9H265.68c-73.258 0-132.833-59.576-132.833-132.9V265.733c0-73.324 59.575-132.9 132.833-132.9h1062.667" mask="url(#b)"/>
        <path d="M1340.156 797H1092.62v665.628H807.36V797H669.945V579.22H807.36V437.819c0-192.21 82.888-306.447 308.837-306.447h260.354v235.58h-212.666c-63.229-.066-70.933 32.943-70.933 94.378l-.332 117.89h285.26L1340.088 797h.067z" mask="url(#b)"/>
    </g>

      </BaseIcon>
    )
  }
}