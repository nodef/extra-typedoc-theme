import {Application, DefaultTheme, Reflection} from "typedoc";




// Modify the default theme.
class ExtraTypedocTheme extends DefaultTheme {
  // Remove url suffix (function-1.html → function.html).
  static getUrl(reflection: Reflection, relative?: Reflection, separator?: string): string {
    var url = DefaultTheme.getUrl(reflection, relative, separator);
    return url.replace(/\-\d+(\.\w+)?/, "$1");
  }
}


// Define the theme.
export function load(app: Application) {
  app.renderer.defineTheme("extra-typedoc-theme", ExtraTypedocTheme);
}
