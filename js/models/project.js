var app = app || {};

(function() {
    'use strict';

    app.Project = Backbone.Model.extend({

        defaults: {
            title: '',
            chinesetitle: '',
            image: '',
            description: '',
            keywords: '',
            demo: '',
            source: '',
            code: '',
            type: ''
        },

        dump: function() {
            console.log(JSON.stringify(this.toJSON()));
        }
    });

})();
