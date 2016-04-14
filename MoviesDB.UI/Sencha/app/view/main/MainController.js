/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 */
Ext.define('MoviesDB.UI.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    dialog: null,

    cellclick: function (view, cell, cellIndex, record, row, rowIndex, e) {
        var linkClicked = (e.target.tagName == 'A');
        var clickedDataIndex =
            view.panel.headerCt.getHeaderAtIndex(cellIndex).dataIndex;

        if (linkClicked && clickedDataIndex == 'edit') {            
            this.onEditRecord(view, record);
        }
        if (linkClicked && clickedDataIndex == 'details') {
            this.onViewRecord(view, record);
        }
    },    
    onEditRecord: function (view, record) {
        this.action({
            mode: 'edit',
            buttonText: 'Save',
            record: record
        });
    },
    onViewRecord: function (view, record) {
        this.action({
            mode: 'view',
            buttonText: 'Close',
            record: record
        });
    },
    onAddRecord: function () {
        this.action({
            mode: 'add',
            buttonText: 'Add',
            record: null
        });
    },
    action: function (cfg) {
        var view = this.getView();
        this.dialog = view.add(Ext.create('MoviesDB.UI.view.dialog.Window', {
            mode: cfg.mode,
            viewModel: {
                data: {
                    title: cfg.record ? 'Edit Movie' : 'Add New',
                    buttonText: cfg.buttonText,
                    readOnly: cfg.mode == 'view' 
                },
                // If we are passed a record, a copy of it will be created in the newly spawned session.
                // Otherwise, create a new phantom customer in the child.
                links: {
                    theMovie: cfg.record || {
                        type: 'MoviesDB.UI.model.Movie',
                        create: true
                    }
                }
            }
        }));
        this.dialog.show();
    },
    onUpdate: function (btn, ev) {
        var form = this.lookupReference('form');
        if (!form.isValid()) {
            return;
        }

        if (form.isDirty()) {
            this.dialog.getViewModel().data.theMovie.save();
            this.getView().down('grid').getStore().load();
        }

        this.dialog = Ext.destroy(this.dialog);
    },
    onClose: function (btn, ev) {        
        this.dialog = Ext.destroy(this.dialog);
    }
});
