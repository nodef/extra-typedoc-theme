import {Application, DefaultTheme, Reflection, DeclarationReflection} from "typedoc";


// Preserve static methods of DefaultTheme.
const getUrlDefault = DefaultTheme.getUrl;




// Check if symbol is external.
function isExternalSymbol(reflection: DeclarationReflection): boolean {
  return !reflection.sources
    || reflection.sources.length===0
    || reflection.sources[0].fileName.startsWith("node_modules");
}


// Modify the default theme.
class ExtraTypedocTheme extends DefaultTheme {
  // Remove url suffix (function-1.html → function.html).
  static getUrl(reflection: Reflection, relative?: Reflection, separator?: string): string {
    var def = getUrlDefault(reflection, relative, separator);
    var mod = def.replace(/\-\d+(\.\w+)?$/, "$1");
    return isExternalSymbol(reflection as DeclarationReflection)? def : mod;
  }
}


// Define the theme.
export function load(app: Application) {
  app.renderer.defineTheme("extra-typedoc-theme", ExtraTypedocTheme);
  DefaultTheme.getUrl = ExtraTypedocTheme.getUrl;
}
