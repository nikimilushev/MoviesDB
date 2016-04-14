/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('MoviesDB.UI.Application', {
    extend: 'Ext.app.Application',
    
    name: 'MoviesDB.UI',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        var me = this,
            body = Ext.getBody();

        body.appendChild({
            tag: 'iframe',
            id: 'iframe-helper',
            name: 'iframe-helper',
            cls: 'x-hidden'
        });
        body.appendChild({
            tag: 'form',
            target: 'iframe-helper',
            action: 'api/getfile',
            cls: 'x-hidden',
            id: 'download-form'
        });
    }
});
