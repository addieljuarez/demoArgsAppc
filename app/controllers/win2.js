// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;



var url = 'https://gist.githubusercontent.com/addieljuarez/80f0b6f39ec98e8e8533eb445158f642/raw/7435b40d4da1b1e92a5bce47a4e1d80ca8b081da/demo.json';
var cliente = Ti.Network.createHTTPClient({
    onload: function(){
        Ti.API.info(this.responseText);
        var jsonObj = JSON.parse(this.responseText);


        for(var i=0; i<jsonObj.length; i++){
            var row = Ti.UI.createView({
                top: 20,
                height: 70,
                width: Ti.UI.FILL,
                borderColor: 'black',
                backgroundColor: 'red',
                numero: i,
                propiedades: jsonObj[i]
            });
            $.scrollMain.add(row);

            var titleRow = Ti.UI.createLabel({
                height: Ti.UI.SIZE,
                left: 20,
                color: 'black',
                font: {
                    fontSize: 20,
                },
                text: jsonObj[i].arg,
                touchEnabled: false,
                
            });
            row.add(titleRow);

            var imgRow = Ti.UI.createImageView({
                height: 50,
                width: 50,
                borderColor: 'black',
                right: 50,
                borderRadius: 20,
                image: jsonObj[i].imagen,
                touchEnabled: false,
            });
            row.add(imgRow);

            row.addEventListener('click', function(e){
                // Ti.API.info(e);
                // alert('hola: ' + JSON.stringify(e.source.propiedades));

                var params = {
                    propiedades: e.source.propiedades,
                    titulo: 'detalles',
                    numero: 5,
                };

                var win3 = Alloy.createController('win3', params).getView();
                args.openWindow(win3);
                // win3.open();
            });


        }

       
    },
    onerror: function(e){
        alert('entro al on error: ' + e.error);
    },
    timeout: 5000
});

cliente.open('GET', url);
cliente.send();