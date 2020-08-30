// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
Ti.API.info(args);
$.vistaUntaria.backgroundColor = args.color;

$.labeTitle.text = args.argsWin2.propiedades.arg;
$.labelDescription.text = args.argsWin2.propiedades.argumento;

// alert(args);