Ext.define('MoviesDB.UI.store.Movie', {
    extend: 'Ext.data.Store',
    //autoLoad: {start: 0, limit: 3},
    autoSync: true,
    alias: 'store.movie',
    fields: [
        'Id', 'Title', 'Director', 'ReleaseDate'
    ],
    pageSize: 3,
    proxy: {
        type: 'rest',
        url: 'api/movies',
        reader: {
            type: 'json',
            rootProperty: 'Items',
            totalProperty: 'TotalCount'
        }
    },
    constructor: function () {
        var me = this;
        //TODO move to its own class!!
        function getAjax(url) {
            return new Ext.Promise(function (resolve, reject) {
                Ext.Ajax.request({
                    url: url,
                    success: function (response) {
                        resolve(response.responseText);
                    },
                    failure: function (response) {
                        reject(response.status);
                    }
                });
            });
        }
        getAjax('api/storesettings').then(function (content) {
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
