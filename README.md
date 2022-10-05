TypeDoc theme for extra-* packages.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-typedoc-theme),
📜 [Files](https://unpkg.com/extra-typedoc-theme/).

[TypeDoc] is a documentation generator for TypeScript projects. TypeDoc adds
*suffix* to filenames of generated HTML documentation by default when symbols only
*differ by case*. For example, you may have a function called `orderValidity()`
and a type called `OrderValidity`. This is done to avoid the case when a theme
puts all the generated files in the *same directory* on a *case-insensitive file*
*system*. However, the default theme places the functions and types in *different*
*directories*, and thus it should **not** be an issue. This package is a TypeDoc theme
which removes URL suffixes (`function-1.html` → `function.html`) in order to
enable **simple linking** to generated HTML documentation.

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[TypeDoc]: https://www.npmjs.com/package/typedoc

<br>

```bash
## Install as dev-dependency to you project.
$ npm install --save-dev extra-typedoc-theme

## Generate docs through typedoc while using this theme.
$ typedoc --plugin extra-typedoc-theme "src/index.ts" --out ".docs"
```

<br>
<br>


[![](https://img.youtube.com/vi/kQZ2nA2GpXw/maxresdefault.jpg)](https://www.youtube.com/watch?v=kQZ2nA2GpXw)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
