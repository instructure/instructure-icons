const libraryName = 'InstructureIcons';
const demoAppSource = './src/demoApp/';
const source = './src/';
const destination = './__build__/';
const demoDestination = destination + 'demos/';

const svg = {
  source: source + 'sketch/**/*.sketch',
  destination: destination + 'svg/',
  demoDestination: demoDestination + 'svg/',
  sizes: [ // leave this out if you only want full size
    { name: 'Small', suffix: '_sm', size: 16, box: 18 },
    { name: 'Medium', suffix: '_md', size: 24, box: 26 },
    { name: 'Large', suffix: '_lg', size: 48, box: 50 }
  ]
};

const fonts = {
  source: svg.destination, // variant is added to path
  destination: destination + 'fonts/',
  demoDestination: demoDestination + 'fonts/',
  fontName: libraryName,
  className: 'icon',
  formats: ['woff2', 'woff', 'eot', 'ttf', 'svg']
};

const sprites = {
  source: svg.destination, // variant is added to path
  destination: destination + 'sprites/',
  demoDestination: demoDestination + 'sprites/'
};

const react = {
  source: svg.destination,
  destination: destination + 'src/',
  lib: destination + 'lib/',
  dist: destination + 'react/',
  demoDestination: demoDestination + 'react/',
  componentBaseName: 'Icon'
};

export default {
  demoAppSource,
  source,
  destination,
  libraryName,
  svg,
  fonts,
  sprites,
  react
};
