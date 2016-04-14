Ext.define('MoviesDB.UI.view.dialog.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.movie-form',
    reference: 'form',
    requires: [
        'Ext.form.field.Text',
        'Ext.form.field.Date',
        'MoviesDB.UI.lib.DateRange'
    ],
    defaults: {
        xtype: 'textfield',
        anchor: '100%'
    },
    bodyPadding: 10,
    modelValidation: true,
    items: [{
        fieldLabel: 'Title',
        bind: {
            value: '{theMovie.Title}',
            readOnly: '{readOnly}'
        }
    }, {
        fieldLabel: 'Director',
        bind: {
            value: '{theMovie.Director}',
            readOnly: '{readOnly}'
        }
    }, {
        fieldLabel: 'Release Date',
        xtype: 'datefield',
        format: 'd-m-Y',
        bind: {
            value: '{theMovie.ReleaseDate}',
            readOnly: '{readOnly}'
        }
    }],    
    buttons: [{
        bind: {
            text: '{buttonText}'
        }
    }],
    constructor: function (cfg) {
        this.callParent(arguments);
        this.down('button').handler = cfg.onClick;
    }
});