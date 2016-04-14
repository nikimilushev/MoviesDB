Ext.define('MoviesDB.UI.lib.Ajax', {
    getAjax: function (url) {
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
});
