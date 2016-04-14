Ext.define('MoviesDB.UI.view.dialog.Window', {
    extend: 'Ext.window.Window',
    requires: [
        'MoviesDB.UI.view.dialog.Form',
    ],
    alias: 'widget.movie-window',
    defaultFocus: 'Title',
    closeAction: 'destroy',
    modal: true,
    layout: 'fit',
    width: 400,
    height: 300,
    mode: 'view',
    bind: {
        title: '{title}'
    },
    initComponent: function () {
        var me = this;
        me.callParent(arguments);
        me.add(Ext.create('MoviesDB.UI.view.dialog.Form',{
            onClick: this.getButtonHandler(this.mode)           
        }));
    },
    getButtonHandler: function (mode) {
        switch (mode) {
            case 'view': return 'onClose';
            case 'add': return 'onUpdate';
            case 'edit': return 'onUpdate';
        }
    },
    constructor: function (cfg) {
        if (cfg) {
            Ext.apply(this, cfg);
        }
        this.callParent(arguments);
    }
});