import React, { Component } from 'react';
import Modal, { ModalHeader, ModalBody, ModalFooter } from 'instructure-ui/lib/components/Modal';
import Heading from 'instructure-ui/lib/components/Heading';
import Typography from 'instructure-ui/lib/components/Typography';
import Link from 'instructure-ui/lib/components/Link';
import Button from 'instructure-ui/lib/components/Button';
import { LiveProvider, LiveEditor } from 'react-live';
import { Navbar, NavItem } from '../Navbar';
import styles from './main.css';

import demoData from 'build/data';

const reactDemoComponent = (name) => (`
import ${name} from 'instructure-icons/lib/${name}'

class MyIcon extends React.Component {
  render() {
    return <${name} />
  }
}
`).trim();

export default class Demo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentDemo: this.defaultDemo(),
      modal: {
        isOpen: false,
        name: ''
      }
    };
  }

  updateDemo = () => {
    this.setCurrentDemo(window.location.hash.slice(1) || this.defaultDemo());
  };

  setCurrentDemo = name => {
    this.setState({ currentDemo: name });
  };

  applicationElement = () => [document.getElementById('app')]

  handleModalClose = () => {
    this.setState({
      modal: {
        isOpen: false,
        name: ''
      }
    });
  }

  handleModalOpen = (name, type, className = '', code = '') => () => {
    this.setState({
      modal: {
        isOpen: true,
        name,
        type,
        className,
        code
      }
    });
  }

  componentDidMount () {
    this.updateDemo();
    window.addEventListener('hashchange', this.updateDemo, false);
  }

  componentWillUnmount () {
    window.removeEventListener('hashchange', this.updateDemo, false);
  }

  defaultDemo () {
    return demoData.demos['React'] ? 'React' : Object.keys(demoData.demos)[0];
  }

  renderNavbar () {
    const version = process.env.VERSION;
    return (
      <Navbar header={demoData.libraryName} libraryVersion={version} headerHref={`#${this.defaultDemo()}`}>
        {
          Object.keys(demoData.demos).map(name =>
            <NavItem key={name} name={name} href={`#${name}`} />
          )
        }
      </Navbar>
    );
  }

  renderHeading (type, data) {
    if (type === 'SVG') {
      return data.size;
    } else if (type === 'React') {
      return 'React Components';
    } else if (type === 'Font') {
      return data.fontName;
    }
  }

  renderGlyphName (type, glyph) {
    if (type === 'SVG') {
      return glyph.name;
    } else if (type === 'React') {
      return glyph.name;
    } else if (type === 'Font') {
      return (
        <div>
          {
            glyph.variants.map(variant =>
              <span key={`${glyph.name}-${variant.className}`} className={styles.glyphCodepoint}>
                { variant.codepoint.toString(16).toUpperCase() }
              </span>
            )
          }
          <span className={styles.glyphName}>{ glyph.name }</span>
        </div>
      );
    }
  }

  renderVariant (type, name, Variant, i) {
    if (type === 'SVG') {
      return (
        <button
          type="button"
          key={name + i}
          className={styles.btnIcon}
          onClick={this.handleModalOpen(name, type, null, Variant.code)}
        >
          <img src={Variant.src} />
        </button>
      );
    } else if (type === 'React') {
      return (
        <button
          type="button"
          key={name + i}
          className={styles.btnIcon}
          onClick={this.handleModalOpen(Variant.name, type)}
        >
          <Variant
            width="4em"
            height="4em"
          />
        </button>
      );
    } else if (type === 'Font') {
      const { className } = Variant;

      const variantClassName = demoData.cssFiles[Variant.name][className];
      const iconClassName = demoData.cssFiles[Variant.name][`${className}-${name}`];
      const iconSize = demoData.cssFiles[Variant.name][`${className}-4x`];

      return (
        <button
          type="button"
          key={name + i}
          className={styles.btnIcon}
          onClick={this.handleModalOpen(name, type, className)}
        >
          <i className={`${variantClassName} ${iconClassName} ${iconSize}`} />
        </button>
      );
    }
  }

  renderDemo () {
    const { currentDemo } = this.state;
    return demoData.demos ? (
      <div>
        <Heading level="h2" color="primary" margin="small">
          { this.renderHeading(currentDemo, demoData.demos[currentDemo]) }
        </Heading>
        {
          currentDemo === 'React' &&
          <Typography color="secondary" lineHeight="double">
            See <Link href="http://instructure.github.io/instructure-ui/#SVGIcon" target="_blank">SVGIcon</Link>
            &nbsp;component for props and examples.
          </Typography>
        }
        <div className={styles.grid}>
          {
            demoData.demos[currentDemo].glyphs.map(glyph => {
              return (
                <div className={styles.cell} key={`${glyph.name}-glyph`}>
                  <div className={styles.example}>
                    { glyph.variants.map((variant, i) => this.renderVariant(currentDemo, glyph.name, variant, i)) }
                  </div>
                  <div className={styles.glyphName}>
                    { this.renderGlyphName(currentDemo, glyph) }
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    ) : <h2>Error loading data</h2>;
  }

  renderModalContent () {
    const { name, type, className, code } = this.state.modal;
    let demoCode;
    if (type === 'React') {
      demoCode = reactDemoComponent(name);
    } else if (type === 'Font') {
      demoCode = `<i className="${className} ${className}-${name} ${className}-4x" aria-hidden="true"></i>`;
    } else if (type === 'SVG') {
      demoCode = code;
    }
    return (
      <LiveProvider
        code={demoCode} noInline>
        <LiveEditor style={{overflowX: 'scroll'}} />
      </LiveProvider>
    );
  }

  renderModal () {
    const { modal } = this.state;
    return (
      <Modal
        open={modal.isOpen}
        onDismiss={this.handleModalClose}
        label={`Modal Dialog: ${modal.name}`}
        size="medium"
        shouldCloseOnOverlayClick
        closeButtonLabel="Close"
        applicationElement={this.applicationElement}
      >
        <ModalHeader>
          <Heading color="brand">{modal.name}</Heading>
        </ModalHeader>
        <ModalBody>
          {this.renderModalContent()}
        </ModalBody>
        <ModalFooter>
          <Button onClick={this.handleModalClose} variant="primary">Close</Button>
        </ModalFooter>
      </Modal>
    );
  }

  render () {
    return (
      <div>
        {this.renderNavbar()}
        <div className={styles.container}>
          {this.renderDemo()}
        </div>
        {this.renderModal()}
      </div>
    );
  }
}
