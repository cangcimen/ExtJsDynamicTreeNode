Ext.define('Kun.view.TabPanelView', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.tabpanelview',
    activeTab: 0,
    closeable: true,
    region: 'center',
    items: [
        {
            xtype: 'panel',
            title: 'Welcome',
			layout : 'fit',
		    cls : 'x-panel-body' ,
		    closable: true
        },
        {
            xtype: 'panel',
            title: 'Release Notes',
            layout: 'fit',
             closable : true ,
            items: [{
                id: 'areRelaseNotes',
                xtype: 'textarea',
                readOnly: true 
               
            }]
        }
    ]
});