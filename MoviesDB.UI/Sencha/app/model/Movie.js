Ext.define('MoviesDB.UI.model.Movie', {
    extend: 'Ext.data.Model',
    alias: 'model.movie',
    requires: [
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],
    idProperty: 'Id',
    fields: [
        'Id', 
        { name: 'Title' },
        { name: 'Director' },
        {
            name: 'ReleaseDate', type: 'date', submitFormat: 'Y-m-d'
        }
    ],
    validators: [
        { type: 'length', field: 'Title', max: 200 },
        { type: 'presence', field: 'Title' },
        { type: 'length', field: 'Director', max:100 },
        { type: 'daterange', field: 'ReleaseDate', max: new Date()}
    ],
    proxy: {
        type: 'rest',
        url: 'api/movies',
        reader: {
            type: 'json',
            rootProperty: 'Items',
            totalProperty: 'TotalCount'
        },
        writer: {
            type: 'json',
            rootProperty: '',
            dateFormat: 'Y-m-d'
        }
    }
});