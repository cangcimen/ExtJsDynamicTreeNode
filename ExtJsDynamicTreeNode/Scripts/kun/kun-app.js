Ext.Loader.setConfig({
    enabled: true
});
KunApps = Ext.create('Ext.app.Application', {
    views: [
        'MainView'
    ],
    autoCreateViewport: true,
    appFolder: 'Scripts/kun',
    name: 'Kun',
    controllers: [
		'IndexController'
    ],
    launch: function () {
        // No Action For Lauch :D
    }
});