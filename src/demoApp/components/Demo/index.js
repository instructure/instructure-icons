import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal, { ModalHeader, ModalBody, ModalFooter } from 'instructure-ui/lib/components/Modal';
import Heading from 'instructure-ui/lib/components/Heading';
import Typography from 'instructure-ui/lib/components/Typography';
import Link from 'instructure-ui/lib/components/Link';
import Button from 'instructure-ui/lib/components/Button';
import TextInput from 'instructure-ui/lib/components/TextInput';
import ScreenReaderContent from 'instructure-ui/lib/components/ScreenReaderContent';

import IconHeartSolid from 'instructure-icons/lib/Solid/IconHeartSolid';
import IconSearchSolid from 'instructure-icons/lib/Solid/IconSearchSolid';
import IconGithubSolid from 'instructure-icons/lib/Solid/IconGithubSolid';

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
      currentPage: props.defaultPage,
      modal: {
        isOpen: false,
        name: '',
        query: ''
      }
    };
  }
  static propTypes = {
    defaultPage: PropTypes.string
  }

  static defaultProps = {
    defaultPage: 'index'
  }

  updateDemo = () => {
    this.setCurrentPage(window.location.hash.slice(1) || this.props.defaultPage);
  };

  setCurrentPage = name => {
    this.setState({ currentPage: name });
  };

  applicationElement = () => [document.getElementById('app')]

  handleSearchChange = (e) => this.setState({query: e.target.value})

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

  renderNavbar () {
    const version = process.env.VERSION;
    return (
      <Navbar header={demoData.libraryName} libraryVersion={version} headerHref={`#${this.props.defaultPage}`}>
        <NavItem name="Docs" href={`#${this.props.defaultPage}`} />
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

  renderIcon (type, glyph) {
    return (
      <div className={styles.cell} key={`${glyph.name}-glyph`}>
        <div className={styles.example}>
          { glyph.variants.map((variant, i) => this.renderVariant(type, glyph.name, variant, i)) }
        </div>
        <div className={styles.glyphName}>
          { this.renderGlyphName(type, glyph) }
        </div>
      </div>
    );
  }

  renderDemo () {
    const { currentPage } = this.state;
    return demoData.demos[currentPage] ? (
      <div className={styles.demoContainer}>
        <Heading level="h2" color="primary" margin="small">
          { this.renderHeading(currentPage, demoData.demos[currentPage]) }
        </Heading>
        {
          currentPage === 'React' &&
          <Typography color="secondary" lineHeight="double">
            See <Link href="http://instructure.github.io/instructure-ui/#SVGIcon" target="_blank">SVGIcon</Link>
            &nbsp;component for props and examples.
          </Typography>
        }
        <div className={styles.grid}>
          {
            demoData.demos[currentPage].glyphs.map(glyph => this.renderIcon(currentPage, glyph))
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

  renderHeader () {
    const icon = () => <IconSearchSolid />;
    return (
      <div className={styles.header}>
        <h2>WE <IconHeartSolid /> ICONS</h2>
        <TextInput
          placeholder="Search"
          defaultValue={this.state.query}
          onChange={this.handleSearchChange}
          label={<ScreenReaderContent>Search Documentation</ScreenReaderContent>}
          size="large"
          icon={icon}
        />
      </div>
    );
  }

  renderSearchResults () {
    const { demos } = demoData;

    return (
      <div className={styles.demoContainer}>
        {
          Object.keys(demos).map(type => {
            return (
              <div key={type}>
                <Heading level="h2" color="primary" margin="small">
                  { type }
                </Heading>
                <div className={styles.grid}>
                  {
                    demos[type].glyphs.filter(glyph => new RegExp(this.state.query, 'i').test(glyph.name))
                    .map(glyph => this.renderIcon(type, glyph))
                  }
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }

  renderPage () {
    const { currentPage, query } = this.state;
    const readMe = process.env.README;
    return currentPage === 'index' ? (
      <div>
        {this.renderHeader()}
        { query ? this.renderSearchResults()
          : <div className={styles.homepageContainer} dangerouslySetInnerHTML={{__html: readMe}} />
        }
      </div>)
    : this.renderDemo();
  }

  render () {
    const author = process.env.AUTHOR;
    const repository = process.env.REPOSITORY;
    return (
      <div>
        {this.renderNavbar()}
        <div className={styles.container}>
          {this.renderPage()}
        </div>
        <footer>
          Made with <IconHeartSolid /> by {author}.&nbsp;
          <a href={repository} className={styles.githubLink} target="_blank">
            <IconGithubSolid />
          </a>
        </footer>
        {this.renderModal()}
      </div>
    );
  }
}
