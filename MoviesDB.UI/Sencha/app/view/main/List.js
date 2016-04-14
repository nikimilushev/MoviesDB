Ext.define('MoviesDB.UI.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.util.*',
        'MoviesDB.UI.store.Movies',
        'MoviesDB.UI.view.dialog.Window',
        'Ext.toolbar.Paging'
    ],
    title: 'Movies List',
    columns: [{
            width: 90,
            dataIndex: 'edit',
            renderer: function () {
                return '<a href="#" >Edit</a>';
            }
        }, {
            width: 90,
            dataIndex: 'details',
            renderer: function () {
                return '<a href="#" >Details</a>';
            }
        }, {
            text: 'ID',
            dataIndex: 'Id'
        },{
            text: 'Title',
            dataIndex: 'Title',
            flex: 1
        },{
            text: 'Director',
            dataIndex: 'Director',
            flex: 1
        },{
            text: 'Date released',
            dataIndex: 'ReleaseDate',
            flex: 1,
            xtype: 'datecolumn',
            format: 'd-m-Y'
        }
    ],
    initComponent: function () {
        var store = Ext.create('MoviesDB.UI.store.Movies');
        Ext.apply(this, {
            store: store,
            bbar: Ext.create('Ext.PagingToolbar', {
                store: store,
                displayInfo: true,
            }),
        });
        this.callParent(arguments);
    },
    listeners: {
        cellclick: 'cellclick'
    }
});
