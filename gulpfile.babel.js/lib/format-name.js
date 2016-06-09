export const capitalizeFirstLetter = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const toCamelCase = function (string) {
  return string.replace(/([-:]\w)/g, function($1) { return $1.toUpperCase().replace('-','').replace(':', '') })
}

export default function formatName (name) {
  return capitalizeFirstLetter(toCamelCase(name))
}
