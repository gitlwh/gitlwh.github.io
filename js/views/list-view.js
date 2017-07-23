var app = app || {};

(function($) {
    'use strict';

    app.ListView = Backbone.View.extend({
        el: '.projects',
        events: {
            'click #fe-btn': 'clickedFEBtn',
            'click #fs-btn': 'clickedFSBtn',
            'click #aw-btn': 'clickedAWBtn',
            'click #og-btn': 'clickedORBtn',
            'click #mw-btn': 'clickedMWBtn',
            'click #ce-btn': 'clickedCEBtn'
        },

        initialize: function(feProjects, fsProjects, awards, organizations,mediaworks,certificates) {
            this.feProjects = feProjects;
            this.fsProjects = fsProjects;
            this.awards = awards;
            this.organizations = organizations;
            this.mediaworks = mediaworks;
            this.certificates = certificates;
            this.collection = new app.ProjectList(this.feProjects);
            this.render();
        },

        // render list by rendering each project in its collection
        render: function() {
            this.collection.each(function(item) {
                this.renderProject(item);
            }, this);
            this.animateProjects();
        },

        // render a project by creating a ProjectView and appending the
        // element it renders to the list' element
        renderProject: function(item, projElement) {
            var projectView = new app.ProjectView({
                model: item
            });
            this.$el.append(projectView.render().el);
        },

        // 'this' is handling DOM element
        clickedFEBtn: function(event) {
            // Removes existing articles.
            $('article').remove();
            this.collection.set(this.feProjects);
            this.render();
        },

        // 'this' is handling DOM element
        clickedFSBtn: function(event) {
            // Removes existing articles.
            $('article').remove();
            this.collection.set(this.fsProjects);
            this.render();
        },

        clickedAWBtn: function(event) {
            // Removes existing articles.
            $('article').remove();
            this.collection.set(this.awards);
            this.render();
        },
        clickedORBtn: function(event) {
            // Removes existing articles.
            $('article').remove();
            this.collection.set(this.organizations);
            this.render();
        },
        clickedMWBtn: function(event) {
            // Removes existing articles.
            $('article').remove();
            this.collection.set(this.mediaworks);
            this.render();
        },
        clickedCEBtn: function(event) {
            // Removes existing articles.
            $('article').remove();
            this.collection.set(this.certificates);
            this.render();
        },

        animateProjects: function() {
            // Animate the projects when a render() is called.
            $('.card').hide().first().show("fast", function showNext() {
                $(this).next("article").show("fast", showNext);
            });
        }
    });

})(jQuery);
