

$.navigation.open();


$.buttonOpenWin2.addEventListener('click', function(e){
	
	var params = {
		navigation: $.navigation
	}
	var win2 = Alloy.createController('win2', $.navigation).getView();
	$.navigation.openWindow(win2);
});

