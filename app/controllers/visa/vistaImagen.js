// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;


Ti.API.info(args);

$.vistaImagen.backgroundColor = args.color;

$.imagen.image = args.argsWin2.propiedades.imagen;