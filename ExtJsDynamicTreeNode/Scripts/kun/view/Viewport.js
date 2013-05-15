Ext.define('Kun.view.Viewport', {
    extend: 'Kun.view.MainView',
    renderTo: Ext.getBody(),
    requires: [
        'Kun.view.MainView', 'Kun.view.TabPanelView', 'Kun.view.MenuPanel'
    ]
});