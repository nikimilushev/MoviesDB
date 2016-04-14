Ext.define('MoviesDB.UI.store.Movies', {
    extend: 'Ext.data.Store',
    autoSync: true,
    requires: [        
        'MoviesDB.UI.lib.Ajax',
        'MoviesDB.UI.model.Movie'
    ],
    alias: 'store.movies',    
    pageSize: 3,
    model: 'MoviesDB.UI.model.Movie',
    constructor: function () {
        var me = this;

        var ajax = Ext.create('MoviesDB.UI.lib.Ajax');
        
        ajax.getAjax('api/storesettings').then(function (content) {
            var itemsPerPage = content;
            Ext.apply(me, {
                pageSize: itemsPerPage
            });
            me.load({
                params: {
                    start: 0,
                    limit: itemsPerPage
                }
            });
        });
        me.callParent();
    }
});
