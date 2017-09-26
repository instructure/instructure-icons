# Instructure Icons

The official icon set for Instructure, Inc. products.

## Icon formats:

- Accessible React components for each icon/variant
- SVG files optimzied for the web with [configurable](gulpfile.babel.js/config.js) bounding boxes/margins
- Icon font (to support legacy UI code)

## Usage

```
npm install instructure-icons
```

To use the React components:

```javascript
import { IconAddLine } from 'instructure-icons'

function MyComponent () {
  return <IconAddLine />
}
```

## Contributing

The build scripts generate icon sets from the source Sketch files for multiple platforms (web, iOS, Android) and provide a local web application for testing the output. (see the [demo](http://instructure.github.io/instructure-icons) page)

### Requirements

- Node v5.10.1
- Mac OSX
- [Sketch](http://bohemiancoding.com/sketch/)

### Set Up

- In the console run `./install.sh` to install dependencies.
- In the console run `npm start` to start the [local server](http://localhost:3002) and watch for changes.

### How It Works

- In the .sketch files in `/src/sketch` there are 1920x1920 artboards for each icon set variant. The artboard name is the name of the icon (close, add, etc.) with a prefix of the variant, like `solid/close` and `line/close`.

- When you save in Sketch with the `npm start` script running, the artboards will be exported in SVG to the `./__build__` directory automatically via `gulp-sketch`, creating directories for each variant based on the artboard names.

- After exporting, the build will take the SVG files generated for each variant and resize, minify, and package them for various platforms (web, iOS, Android) as individual SVG files, SVG sprites, pdf documents and icon fonts. You can see the result in the `/__build__` directory.

### Adding and Modifying Icons

- Start with the [Sketch template](template.sketch) provided. Open the template file and then save it as a template (File > Save as Template...). The next time you want to make an icon it will be available in your template list (File > New From Template) in the Sketch app.

- Save new icon files in the `/src/sketch` directory.

- Run `npm start` to start the local server and watch for changes to the sketch files and generate the various formats.

### Guidelines for Drawing Icons

- Use dashes in the name of the .sketch files (e.g `calendar-month`). Use the same name for artboards, but prefix with the variant, like `solid/calendar-month` and `line/calendar-month`.

- Draw your icons on the 1920 x 1920 artboards that are set up for you in the Sketch template.

- Before you flatten shapes or vectorize strokes as described below, make a hidden copy of the original paths off to the side so that you can more easily come back and make changes later.

- Flatten your shapes (Layer > Paths > Flatten).

- Export strokes to vector (Layer > Convert to Outlines).

- Don’t use borders on vectors, especially not inside/outside borders which aren’t supported in SVG.

- Make sure none of the paths go outside of the artboard. If so, the glyph in the icon font will be misaligned. Draw inside the lines.

- Fill the space edge-to-edge as much as possible. The build process will add margins as needed.

### Testing Your Changes

There's a small web app for testing all the icons. You can see all the icons at once, in different sizes and formats.

If you ran `npm start`, you're already running the web app. Just visit [localhost:3002](http://localhost:3002).

### Release Process

1. To update the version number, run `npm run bump-patch` OR `npm run bump-minor` OR `npm run bump-major` depending on what type of release you'd like to do.
2. Merge the version bump commit to master.
3. Run `npm run release` to publish the release to npm.
4. Run `npm run deploy` to update the docs and examples on gh-pages.

### Inspiration

- Originally forked from Trello's [iconathon](https://github.com/trello/iconathon)
- [symbols-for-sketch](https://github.com/cognitom/symbols-for-sketch)
- [react-icons](https://github.com/gorangajic/react-icons)

### License

[MIT](LICENSE.md)
