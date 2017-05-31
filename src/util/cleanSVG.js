// remove outer svg elements
export default function cleanSVG (src) {
  const pattern = /<svg[^>]*>((.|[\n\r])*)<\/svg>/;
  const matches = pattern.exec(src);

  return camelizeAttrs(matches[1]);
}

function camelizeAttrs (svg) {
  /* eslint-disable max-len */
  const pattern = /(fill-rule|clip-path|fill-opacity|font-family|font-size|marker-end|marker-mid|marker-start|stop-color|stop-opacity|stroke-width|stroke-linecap|stroke-dasharray|stroke-opacity|text-anchor|xlink:href)=/g;
  /* eslint-enable max-len */

  return svg.replace(pattern, function (line, attr) {
    return toCamelCase(attr) + '=';
  });
}

function toCamelCase (string) {
  return string.replace(
    /([-:]\w)/g,
    function ($1) { return $1.toUpperCase().replace('-', '').replace(':', ''); }
  );
}
