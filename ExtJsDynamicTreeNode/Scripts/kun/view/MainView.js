Ext.define('Kun.view.MainView', {
    extend: 'Ext.container.Viewport',

    layout: {
        type: 'border'
    },

    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    id: 'westPanel',
                    width: 220,
                    layout: {
                        type: 'fit'
                    },
                    title: 'Menu',
                    titleCollapse: false,
                    collapsible: true,
                    split: true,
                    region: 'west',
                    items: [{
                        xtype: 'menupanel'
                    }]
                },
                {
                    xtype: 'tabpanelview'
                }, {
                    xtype: 'toolbar',
                    height: 59,
                    ui: 'sencha',
                    region: 'north',
                    layout: 'column',
                    items: [{
                        xtype: 'component',
                        cls: 'x-logo',
                        flex: 1,
                        html: 'KUN.NET'
                    }, {
                        xtype: 'component',
                        padding: '20 10 10 5',
                        cls: 'k-logout',
                        width: '120',
                        flex: 1,
                        html: '<a id="lnklogout" href="Logout">Logout</a>'
                    }, {
                        padding: '20 0 10 10',
                        xtype: 'component',
                        cls: 'k-logout',
                        width: 120,
                        flex: 1,
                        style: {
                            foalt: 'right',
                            textAlign: 'right'
                        },
                        html: '<a href="">Change Password</a>'
                    }]
                }
            ]
        });

        me.callParent(arguments);
    }

});