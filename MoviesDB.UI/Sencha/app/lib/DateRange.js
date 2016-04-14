Ext.define('MoviesDB.UI.lib.DateRange', {
    extend: 'Ext.data.validator.Bound',
    alias: 'data.validator.daterange',

    type: 'daterange',

    config: {
        minOnlyMessage: 'Must be later than {0}',
        maxOnlyMessage: 'Must be earlier than {0}',
        bothMessage: 'Must be betwen {0} and {1}',
    },  
    configure: function() {
        var me = this,
            hasMin, hasMax,
            min, max;
            
        if (me.preventConfigure) {
            return;
        }
            
        min = me.getMin();
        max = me.getMax();
            
        hasMin = me.hasMin = min !== undefined;
        hasMax = me.hasMax = max !== undefined;
        
        if (hasMin && hasMax) {
            me._bothMsg = Ext.String.format(me.getBothMessage(), this.formatDate(min), this.formatDate(max));
        } else if (hasMin) {
            me._minMsg = Ext.String.format(me.getMinOnlyMessage(), this.formatDate(min));
        } else if (hasMax) {
            me._maxMsg = Ext.String.format(me.getMaxOnlyMessage(), this.formatDate(max));
        }     
    },
    formatDate:function(val){
        return Ext.util.Format.date(val,"d-m-Y")
    },
    getValue: function (value) {
        return Ext.Date.parse(value, "d-m-Y");
    },
    validateValue: function (value) {
        return true;
    }

});