Package.describe({
  name: 'johnantoni:meteor-svginjector',
  version: '0.0.2',
  summary: 'Fast, caching, dynamic inline SVG DOM injection library ~ packaged for Meteor',
  git: 'https://github.com/johnantoni/meteor-svginjector.git',
  documentation: 'README.md'
});

Package.on_use(function(api) {
  api.add_files([
    'SVGInjector/svg-injector.js'
  ], ['client']);
});
