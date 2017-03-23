import jsdom from 'mocha-jsdom';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import assert from 'assert';
import React from 'react';
import InlineSVG from '../InlineSVG';

describe('<InlineSVG/>', () => {
  jsdom();

  it('should render', () => {
    const subject = TestUtils.renderIntoDocument(getTestInlineSVG());
    const svg = TestUtils.findRenderedDOMComponentWithTag(subject, 'svg');

    assert.ok(ReactDOM.findDOMNode(svg));
  });

  it('should have role "presentation" when no title is provided', () => {
    const subject = TestUtils.renderIntoDocument(getTestInlineSVG());

    assert.ok(subject.role === 'presentation');
  });

  it('should have role "img" when a title is provided', () => {
    const subject = TestUtils.renderIntoDocument(getTestInlineSVG({ title: 'testIconTitle' }));

    assert.ok(subject.role === 'img');
  });

  it('should not render title when no title prop is provided', () => {
    const subject = TestUtils.renderIntoDocument(getTestInlineSVG());
    let error = false;
    try {
      TestUtils.findRenderedDOMComponentWithTag(subject, 'title');
    } catch (e) {
      error = true;
    }

    assert.ok(error);
  });

  it('should render title when title prop is provided', () => {
    const subject = TestUtils.renderIntoDocument(getTestInlineSVG({ title: 'testIconTitle' }));
    const title = TestUtils.findRenderedDOMComponentWithTag(subject, 'title');

    assert.ok(ReactDOM.findDOMNode(title));
  });

  it('should not render desc when no desc prop is provided', () => {
    const subject = TestUtils.renderIntoDocument(getTestInlineSVG());
    let error = false;
    try {
      TestUtils.findRenderedDOMComponentWithTag(subject, 'desc');
    } catch (e) {
      error = true;
    }

    assert.ok(error);
  });

  it('should render desc when desc prop is provided', () => {
    const subject = TestUtils.renderIntoDocument(getTestInlineSVG({ desc: 'testIconDesc' }));
    const desc = TestUtils.findRenderedDOMComponentWithTag(subject, 'desc');

    assert.ok(ReactDOM.findDOMNode(desc));
  });

  it('should produce null for "labelledBy" when no title or desc are provided', () => {
    const subject = TestUtils.renderIntoDocument(getTestInlineSVG());

    assert.ok(subject.labelledBy === null);
  });

  it('should properly join ids when both title and desc attributes are provided', () => {
    const subject = TestUtils.renderIntoDocument(getTestInlineSVG({ title: 'testIconTitle', desc: 'testIconDesc' }));
    const ids = subject.labelledBy.split(' ');

    assert.equal(ids.length, 2);
  });

  it('should set custom width and height properly', () => {
    const subject = TestUtils.renderIntoDocument(getTestInlineSVG({ width: '2.75em', height: '3.8em' }));

    assert.ok(subject.props.width === '2.75em');
    assert.ok(subject.props.height === '3.8em');
  });

  it('should set focusable to false by default', () => {
    const subject = TestUtils.renderIntoDocument(getTestInlineSVG());

    assert.equal(subject.props.focusable, false);
  });

  it('should allow focusable to be overridden', () => {
    const subject = TestUtils.renderIntoDocument(getTestInlineSVG({ focusable: true }));

    assert.equal(subject.props.focusable, true);
  });

  it('should allow passing in the svg src as a string', () => {
    const props = {
      children: null,
      src: `<svg><path d="M962" stroke="none" strokeWidth="1" fillRule="evenodd" /></svg>`
    };
    const subject = TestUtils.renderIntoDocument(getTestInlineSVG(props));

    assert.ok(subject);
  });
});

const getTestInlineSVG = (propOverrides = {}) => {
  const props = {
    title: null,
    desc: null,
    width: '1em',
    height: '1em',
    children: <path d="M962" stroke="none" strokeWidth="1" fillRule="evenodd" />,
    ...propOverrides
  };

  return (
    <InlineSVG {...props} />
  );
};
