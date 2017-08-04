import React, { Component } from 'react';
import { Navbar, NavItem } from '../Navbar';
import styles from './main.css';

import demoData from 'build/data';

export default class Demo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentDemo: this.defaultDemo()
    };
  }

  updateDemo = () => {
    this.setCurrentDemo(window.location.hash.slice(1) || this.defaultDemo());
  };

  setCurrentDemo = name => {
    this.setState({ currentDemo: name });
  };

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
      return (
        <code>
           &lt;{glyph.name}[Variant] /&gt;
        </code>
      );
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
      return <img key={name + i} src={Variant.src} className={styles.glyphImg} />;
    } else if (type === 'React') {
      return <Variant key={name + i} width="4em" height="4em" className={styles.glyphImg} />;
    } else if (type === 'Font') {
      const { className } = Variant;

      const variantClassName = demoData.cssFiles[Variant.name][className];
      const iconClassName = demoData.cssFiles[Variant.name][`${className}-${name}`];
      const iconSize = demoData.cssFiles[Variant.name][`${className}-4x`];

      return (
        <span key={name + i} className={styles.iconFont}>
          <i className={`${variantClassName} ${iconClassName} ${iconSize}`} />
        </span>
      );
    }
  }

  renderReactInfo (data) {
    return (
      <div>
        <p className={styles.note}>
        A11y note: By default the role is set to <code>presentation</code>.
        However, when the <code>title</code> prop is set, the <code>role</code>
        attribute is set to <code>img</code>. Include the <code>desc</code> prop to further
        describe the image.
        </p>

        <p className={styles.note}>
        The <code>fill</code> is set to <code>currentColor</code> and the default <code>width</code> and
        <code>height</code> are set to <code>1em</code> so you can change the size and color of the icons via
        CSS <code>color</code> and <code>font-size</code> rules on the parent element.
        </p>
        <p>
          <strong>Variants: </strong>
          {
            data.variants.map(variant => <span key={variant}>{variant}, </span>)
          }
        </p>
      </div>
    );
  }

  renderDemo () {
    const { currentDemo } = this.state;
    return demoData.demos ? (
      <div>
        <h2>{ this.renderHeading(currentDemo, demoData.demos[currentDemo]) }</h2>
        { currentDemo === 'React' && this.renderReactInfo(demoData.demos['React']) }
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

  render () {
    return (
      <div>
        {this.renderNavbar()}
        <div className={styles.container}>
          {this.renderDemo()}
        </div>
      </div>
    );
  }
}
