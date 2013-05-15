
Ext.define('Kun.controller.IndexController', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'menupanel',
        selector: 'menupanel'
    }
        , {
            ref: 'MainView',
            selector: 'mainview'
        }
    ],
    views: [
        'MainView', 'TabPanelView'
    ],
    stores: ['MenuTreeStore'],
    init: function (apps) {
        var treepanel = Ext.widget('menupanel');
        treepanel.getStore().load({
            scope: this,
            callback: function (a, b, c) {
            }
        });
       
    }
});
