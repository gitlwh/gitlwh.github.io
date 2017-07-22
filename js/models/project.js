var app = app || {};

(function() {
    'use strict';

    app.Project = Backbone.Model.extend({

        defaults: {
            title: '',
            image: '',
            description: '',
            keywords: '',
            demo: '',
            source: ''
        },

        dump: function() {
            console.log(JSON.stringify(this.toJSON()));
        }
    });

})();
