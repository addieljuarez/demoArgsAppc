// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;


var params1 = {
    argsWin2: args,
    color: 'transparent',
} 


var params2 = {
    argsWin2: args,
    color: 'transparent',
} 

var vistaUnitaria = Alloy.createController('visa/vistaUntaria', params1).getView();

var vistaImage = Alloy.createController('visa/vistaImagen', params2).getView();

$.viewMain.add(vistaUnitaria);
$.viewMain.add(vistaImage);