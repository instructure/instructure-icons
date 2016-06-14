import React, { Component } from 'react'
import BaseIcon from '../IconBase'

export default class IconCalendarMonthLine extends Component {
  render() {
    return (
      <BaseIcon
        {...this.props}
        name="IconCalendarMonthLine"
        viewBox="0 0 1920 1920">
        
    <path d="M1680 280h-240V120h-160v480h160V440h240v1200H240V440h160V280H240c-88.32 0-160 71.68-160 160v1200c0 88.32 71.68 160 160 160h1440c88.32 0 160-71.68 160-160V440c0-88.32-71.68-160-160-160zM640 440h560V280H640V120H480v480h160V440zm80 320H400v320h320V760zm400 0H800v320h320V760zm80 320h320V760h-320v320zm-800 400h320v-320H400v320zm400 0h320v-320H800v320z" stroke="none" strokeWidth="1" fillRule="evenodd"/>

      </BaseIcon>
    )
  }
}