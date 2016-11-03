import jsdom from 'mocha-jsdom'
import TestUtils from 'react-addons-test-utils'
import ReactDOM from 'react-dom'
import assert from 'assert'
import React from 'react'
import BaseIcon from '../BaseIcon'

describe('<BaseIcon/> tests', () => {

  jsdom()

  it('should render', () => {
    const subject = TestUtils.renderIntoDocument(getTestBaseIcon())
    const svg = TestUtils.findRenderedDOMComponentWithTag(subject, 'svg')

    assert.ok(ReactDOM.findDOMNode(svg))
  })

  it('should have role "presentation" when no title is provided', () => {
    const subject = TestUtils.renderIntoDocument(getTestBaseIcon())

    assert.ok(subject.role === 'presentation')
  })

  it('should have role "img" when a title is provided', () => {
    const subject = TestUtils.renderIntoDocument(getTestBaseIcon('testIconTitle'))

    assert.ok(subject.role === 'img')
  })

  it('should not render title when no title prop is provided', () => {
    const subject = TestUtils.renderIntoDocument(getTestBaseIcon())
    let error = false
    try {
      TestUtils.findRenderedDOMComponentWithTag(subject, 'title')
    }
    catch (e) {
      error = true
    }

    assert.ok(error)
  })

  it('should render title when title prop is provided', () => {
    const subject = TestUtils.renderIntoDocument(getTestBaseIcon('testIconTitle'))
    const title = TestUtils.findRenderedDOMComponentWithTag(subject, 'title')

    assert.ok(ReactDOM.findDOMNode(title))
  })

  it('should not render desc when no desc prop is provided', () => {
    const subject = TestUtils.renderIntoDocument(getTestBaseIcon())
    let error = false
    try {
      TestUtils.findRenderedDOMComponentWithTag(subject, 'desc')
    }
    catch (e) {
      error = true
    }

    assert.ok(error)
  })

  it('should render desc when desc prop is provided', () => {
    const subject = TestUtils.renderIntoDocument(getTestBaseIcon('testIconTitle', 'testIconDesc'))
    const desc = TestUtils.findRenderedDOMComponentWithTag(subject, 'desc')

    assert.ok(ReactDOM.findDOMNode(desc))
  })

  it('should produce null for "labelledBy" when no title or desc are provided', () => {
    const subject = TestUtils.renderIntoDocument(getTestBaseIcon())

    assert.ok(subject.labelledBy === null)
  })

  it('should properly join ids when both title and desc attributes are provided', () => {
    const subject = TestUtils.renderIntoDocument(getTestBaseIcon('testIconTitle', 'testIconDesc'))
    let re =/TestIcon__([^\s]+) TestIcon__([^\s]+)/

    assert.ok(re.test(subject.labelledBy))
  })

  it('should set custom width and height properly', () => {
    const subject = TestUtils.renderIntoDocument(getTestBaseIcon('testIconTitle', 'testIconDesc', '2.75em', '3.8em'))

    assert.ok(subject.props.width === '2.75em')
    assert.ok(subject.props.height === '3.8em')
  })

})

const getTestBaseIcon = (title=null, desc=null, width='1em', height='1em') => {
  return (<BaseIcon name="TestIcon" viewBox="0 0 1920 1920" title={title} desc={desc} width={width} height={height}>
            <path d="M962" stroke="none" strokeWidth="1" fillRule="evenodd"/>
          </BaseIcon>)
}
