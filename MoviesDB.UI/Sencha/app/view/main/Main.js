/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 * 
 */
Ext.define('MoviesDB.UI.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MoviesDB.UI.view.main.MainController',
        'MoviesDB.UI.view.main.MainModel',
        'MoviesDB.UI.view.main.List'
    ],

    controller: 'main',

    viewModel: 'main',

    session: true,

    dialog: null,

    items: [{
        xtype: 'panel',
        items:[{
            xtype: 'mainlist'
        }],
        bbar: [{
            xtype: 'button',
            text: 'Add New',
            handler: 'onAddRecord'
        },'->',{
            xtype: 'button',
            text: 'Export To File',
            handler: function () {
                var downloadForm = Ext.get('download-form');
                downloadForm.dom.submit();
            }
        }]
    }]
    
});
