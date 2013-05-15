Ext.define('Kun.store.MenuTreeStore', {
    extend: 'Ext.data.TreeStore',
    autoLoad: false,
    autoSync: false,
	proxy: {
	    type: 'ajax',
	    url: 'Default/LoadTreeStore',
	    reader: {
	        type: 'json',
	        root: 'root',
	        successProperty: 'success'
	    }
	},
	root: {
	    expanded: true,
	    text: "My Root"
	}
});