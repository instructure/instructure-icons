import React, { Component } from 'react'
import BaseIcon from '../IconBase'

export default class IconAddressBookLine extends Component {
  render() {
    return (
      <BaseIcon
        {...this.props}
        name="IconAddressBookLine"
        viewBox="0 0 1920 1920">
        
    <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <path d="M800 880c88.32 0 160-71.68 160-160s-71.68-160-160-160-160 71.68-160 160 71.68 160 160 160z"/>
        <path d="M1440 640h160V480h-160v160zm0 320h160V800h-160v160zM320 1600V320h960l.16 1280H320zM1440 320c0-88.32-71.76-160-160-160H320c-88.24 0-160 71.68-160 160v1280c0 88.24 71.76 160 160 160h960c88.24 0 160-71.76 160-160v-480h320V320h-320z"/>
        <path d="M800 960c-147.28 0-240 92.72-240 240h480c0-147.28-92.72-240-240-240"/>
    </g>

      </BaseIcon>
    )
  }
}