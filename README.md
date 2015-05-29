# meteor-svginjector
Fast, caching, dynamic inline SVG DOM injection library ~ packaged for Meteor

Loads in the SVGInjector library from iconic

* https://github.com/iconic/SVGInjector

#### Example

**html**

    <img class="svg" src="/svg/logo.svg" alt="logo"/>
    
**js**

    loadSVG = function() {
      var mySVGsToInject = document.querySelectorAll('.svg');
      var injectorOptions = {
        evalScripts: 'once',
        pngFallback: 'svg/fallback'
      };
      SVGInjector(mySVGsToInject, injectorOptions);
    };
    loadSVG()
