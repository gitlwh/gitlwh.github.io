var app = app || {};

(function() {
    'use strict';

    app.Contact = Backbone.Model.extend({

        defaults: {
            url: '',
            ion: ''
        },

        dump: function() {
            console.log(JSON.stringify(this.toJSON()));
        }
    });

})();
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

var app = app || {};

(function() {
    'use strict';

    app.ContactList = Backbone.Collection.extend({
        model: app.Contact
    });

})();
var app = app || {};

(function() {
    'use strict';

    app.ProjectList = Backbone.Collection.extend({
        model: app.Project
    });

})();

var app = app || {};

(function($) {
    'use strict';

    app.ContactListView = Backbone.View.extend({
        el: '.contact-ul',

        initialize: function(contacts) {
            this.collection = new app.ContactList(contacts);
            this.render();
        },

        // render list by rendering each contact in its collection
        render: function() {
            this.collection.each(function(item) {
                this.renderContact(item);
            }, this);
        },

        // render a project by creating a ContactView and appending the
        // element it renders to the list' element
        renderContact: function(item, contactElement) {
            var contactView = new app.ContactView({
                model: item
            });
            this.$el.append(contactView.render().el);
        },
    });

})(jQuery);

var app = app || {};

(function($) {
    'use strict';

    app.ContactView = Backbone.View.extend({
        tagName: 'li',
        className: 'menu-item',
        template: _.template($('#contact-template').html()),

        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });

})(jQuery);

var app = app || {};

(function($) {
    'use strict';

    app.ListView = Backbone.View.extend({
        el: '.projects',
        events: {
            'click #fs-btn': 'clickedFSBtn',
            'click #fe-btn': 'clickedFEBtn',
            'click #da-btn': 'clickedDABtn',
            'click #op-btn': 'clickedOPBtn',
            'click #pp-btn': 'clickedPPBtn',
            'click #aw-btn': 'clickedAWBtn',
            'click #og-btn': 'clickedORBtn',
            'click #mw-btn': 'clickedMWBtn',
            'click #ce-btn': 'clickedCEBtn',
            'click #mv-btn': 'clickedMVBtn'
        },

        initialize: function(fsProjects, feProjects, daProjects, opProjects, ppProjects, awards, organizations,mediaworks,certificates,movies) {
            this.fsProjects = fsProjects;
            this.feProjects = feProjects;
            this.daProjects = daProjects;
            this.opProjects = opProjects;
            this.ppProjects = ppProjects;
            this.awards = awards;
            this.organizations = organizations;
            this.mediaworks = mediaworks;
            this.certificates = certificates;
            this.collection = new app.ProjectList(this.fsProjects);
            this.movies = movies;
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

        render2: function() {
            this.collection.each(function(item) {
                this.renderProject2(item);
            }, this);
            this.animateProjects();
        },

        // render a project by creating a ProjectView and appending the
        // element it renders to the list' element
        renderProject2: function(item, projElement) {
            var projectView = new app.ProjectView({
                model: item,
                className: 'card col-sm-6 col-md-2 text-center smaller'
            });
            this.$el.append(projectView.render().el);
        },

        // 'this' is handling DOM element
        clickedFSBtn: function(event) {
            // Removes existing articles.
            $('article').remove();
            this.collection.set(this.fsProjects);
            this.render();
        },

        // 'this' is handling DOM element
        clickedFEBtn: function(event) {
            // Removes existing articles.
            $('article').remove();
            this.collection.set(this.feProjects);
            this.render();
        },

        clickedDABtn: function(event) {
            // Removes existing articles.
            $('article').remove();
            this.collection.set(this.daProjects);
            this.render();
        },

        clickedOPBtn: function(event) {
            // Removes existing articles.
            $('article').remove();
            this.collection.set(this.opProjects);
            this.render();
        },

        clickedPPBtn: function(event) {
            // Removes existing articles.
            $('article').remove();
            this.collection.set(this.ppProjects);
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
        clickedMVBtn: function(event) {
            // Removes existing articles.
            $('article').remove();
            this.collection.set(this.movies);
            this.render2();
        },

        animateProjects: function() {
            // Animate the projects when a render() is called.
            $('.card').hide().first().show("fast", function showNext() {
                $(this).next("article").show("fast", showNext);
            });
        }
    });

})(jQuery);

var app = app || {};

(function($) {
    'use strict';

    app.ProjectView = Backbone.View.extend({
        tagName: 'article',
        className: 'card col-sm-6 col-md-4 text-center',
        template: _.template($('#project-template').html()),

        render: function() {
            this.$el.html(this.template(this.model.attributes));

            return this;
        }
    });

})(jQuery);

var app = app || {};

$(function() {
	'use strict';

	var fullStackProjects = [{
		title: 'Vidaminds official website and product demostration platform (under development)',
		image: 'dist/images/vidaminds.jpg',
		description: 'This is official website for Vidaminds. Inc. I write it in Django. It is to introduce the service, team and contact method of company and demostrate the NLP data of Vidaminds, Inc.',
		keywords: 'Django, Gunicorn, Nginx, Echarts, AWS EC2',
		demo: 'http://www.vidaminds.com/'
	},{
		title: 'Survey website',
		image: 'dist/images/Survey.jpeg',
		description: 'This is a website enabling different user to sign up, log in, configure profile, build up survey with five kinds of questions. As a project during intern, the source code is unavaliable here!',
		keywords: 'JavaScript, CSS, HTML, PHP, MySQL, jQuery, Bootstrap, AJAX, Image cropper, Jqcloud, Bars square',
		demo: 'http://survey.dev.ksand.com/'
	},{
		title: 'Form hooker wordpress plugin',
		image: 'dist/images/WordPress.png',
		description: 'This is a project including a wordpress plugin which can get content of wordpress submit form from Contact form 7 and Visual form builder and post to frontend and a frontend website which can help to manage users, clients and read all post content. This is a backend project and it would be installed on all website managed by KSAND corp.',
		keywords: 'Wordpress plugin, PHP, JavaScript, CSS, HTML, MySQL, Date Range Picker, Contact form 7, Visual form builder',
		demo: "http://dev.ksand.com/contact-us/"
	},{
		title: 'GenoNova official website (under development)',
		image: 'dist/images/Genonova.png',
		description: 'This is official website for GenoNova. Inc. I write it in Django. It is to introduce the company and provide data demostration and download tools.',
		keywords: 'Django, Gunicorn, Nginx, Echarts, AWS EC2',
		demo: 'http://www.yidiandata.com/'
	},{
		title: 'Password Manager',
		image: 'dist/images/passwordManager.jpeg',
		description: 'This is a website enabling different user to log in, configure profile, store and search passwords, built on framework of Codeigniter. As a project during intern, the source code is unavaliable here! The website is running on inner server, the demo is unavaliable as well!',
		keywords:'Codeigniter, PHP, JavaScript, HTML, CSS, AngularJS, jQuery, MySQL',
		source: 'https://github.com/gitlwh/Passwordmanager'
	},{
		title: 'Okta login API Implementation',
		image: 'dist/images/OKTA.jpg',
		description: 'An simple Implementation of Okta client management API, with function of register, login, change password and show profile. The whole projects is divided into client implemented with ReactJS and Redux and API implemented by ExpressJS.',
		keywords: 'Okta, ReactJS, Redux, ExpressJS',
		source: 'https://github.com/gitlwh/MembershipSample'
	},{
		title: 'Lehigh survey',
		image: 'dist/images/lehighsurvey.jpeg',
		description: 'This is a website app enabling different user to log in with google account and release survey and answer questions.',
		keywords:'ExpressJS, MongoDB, Memcached, Google Node authentication, AWS',
		source: 'https://github.com/gitlwh/Survey'
	},{
		title: 'Restaurant recommendation website',
		image: 'dist/images/myRecommendation.png',
		description: 'A django website which shows infomation about restaurant and dishes and the rate given from user.',
		keywords: 'Django, Heroku, SQLite, Gunicorn, Whitenoise, WSGI',
		source: 'https://github.com/gitlwh/myrecommendations'
	}];
	var frontEndProjects = [{
		title: 'Cross Bug Game',
		image: 'dist/images/crossBug.jpg',
		description: 'A simple webpage game. You need to control the princess to get the key and enter the castle.',
		keywords: 'JavaScript, CSS, HTML',
		demo: 'https://gitlwh.github.io/crossBug/',
		source: 'https://github.com/gitlwh/crossBug',
		type: ''
	},{
		title: 'Event Planner',
		image: 'dist/images/eventPlanner.jpeg',
		description: 'This is an event planner which can build a record about the place, people, time, note of things you are going to do.',
		keywords:'JavaScript, AngularJS, Gulp, jQuery, Google Map, Autocomplete, SCSS',
		demo: 'https://gitlwh.github.io/Event-planner/',
		source: 'https://github.com/gitlwh/Event-planner'
	},{
		title: 'Movie viewer',
		image: 'dist/images/movieViewer.jpg',
		description: 'A responsive React app that loading data from The Movie Database (TMDb) API, enabling you to view detail about the movie you are interested',
		keywords: 'React, Typeahead.js, SASS, Browserify, Babel, Gulp, imagemin',
		source: 'https://github.com/gitlwh/Movie_viewer',
		demo: 'https://gitlwh.github.io/Movie_viewer/'
	},{
		title: 'Implementation of 2CHAINZ website',
		image: 'dist/images/2CHAINZ.jpeg',
		description: 'Build the 2CHAINZ website based on an website design image. A test for an interview.',
		keywords: 'HTML, CSS, JavaScript, Bootstrap, Gulp',
		source: 'https://github.com/gitlwh/MembershipSample',
		demo: 'https://gitlwh.github.io/2chainz/'
	}];
	var DataandAIProjects = [{
		title: 'Neural network in Twitter sentimental analysis',
		image: 'dist/images/twitter-sentiment.jpg',
		description: 'Exploration on best neural network structure in twitter sentimental analysis task.',
		keywords: 'Python, LSTM, Convolutional NN, keras, Attention, sentimental analysis',
		source: 'https://github.com/gitlwh/Deep_learning/tree/master/FinalProject_wel615_WeihengLi'
	},{
		title: 'Implementation of fully convolutional network',
		image: 'dist/images/fullyConvolutionalNetwork.jpg',
		description: 'Implementing FCN on MS COCO to do segmentation objects and ISIC dataset to classify maliganant and benign Melanoma. FCN is based on VGG16.',
		keywords: 'Python, Fully convolutional network, Tensorflow, keras, VGG, matplotlib',
		source: 'https://github.com/gitlwh/Deep_learning/tree/master/hw3'
	},{
		title: 'Loyal Customer Prediction',
		image: 'dist/images/loyalCustomer.jpg',
		description: 'The challenge of this competition was to predict which shoppers that responded to a rebate coupon on a specific period, would become repeat buyers of that product. This is code to generate my submission to the Kaggle competition - Loyal Customer Prediction.',
		keywords: 'Kaggle, top5%, Python, Numpy, Scipy, Pandas, Xgboost, Sklearn, Vowpal Wabbit',
		demo: 'https://inclass.kaggle.com/c/loyal-customer-prediction',
		source: 'https://github.com/gitlwh/Loyal-Customer-Prediction'
	},{
		title: 'Botnet Detector',
		image: 'dist/images/botnetDetector.jpg',
		description: 'A tool used to detect botnet based on existing P2P botnet packet dataset and health packet dataset. Using machine learning to differentiate botnet trace out of normal trace.',
		keywords:'Python, Tshark, Numpy, Sklearn',
		source: 'https://github.com/gitlwh/Botnet-Detector'
	},{
		title: 'k Means clustering demonstrator',
		image: 'dist/images/kMeansDemonstration.jpeg',
		description: 'A Matlab application that performs K Means clustering. This app show as a API where you can generate some random points and add some points manually. You can also perform k-means clustering and mark points with different color.',
		keywords: 'Matlab, API, K Means clustering',
		source: 'https://github.com/gitlwh/Advanced_Programming_Techniques/tree/master/hw3'
	}]
	var otherProjects = [{
		title: 'User Level Threading Library',
		image: 'dist/images/userLevelThreadingLibrary.jpg',
		description: 'A user level threading library with function of create, wait, join, exit, etc.',
		keywords:'C/C++',
		source: 'https://github.com/gitlwh/User-Level-Threading-Library'
	},{
		title: 'FUSE Filesystem',
		image: 'dist/images/FUSEFilesystem.jpg',
		keywords: 'C/C++, FUSE',
		description: 'A file system with the FUSE Userspace filesystem module.',
		source: 'https://github.com/gitlwh/FUSE-Filesystem'
	},{
		title: 'File Server',
		image: 'dist/images/fileServer.jpg',
		description: 'This is an server which enables user to upload and download file in multiple secure methods.',
		keywords:'C/C++, RSA, Openssl, md5, Socket',
		source: 'https://github.com/gitlwh/File-server'
	},{
		title: 'Mini HTTP Server',
		image: 'dist/images/MiniHTTPServer.png',
		description: 'A simple http server which can only implement GET request. Implementing a log to record everything happening. It can send file type and last modified time in the header of response.',
		keywords: 'Java, HTTP server, response header',
		source: 'https://github.com/gitlwh/Advanced_Programming_Techniques/tree/master/MiniHTTPServer-wel615'
	}];
	
	var paperAndPatents = [
	{
		title: 'An accurate power-sharing control method based on circulating-current power model for voltage-source-inverter parallel system',
		image: 'dist/images/paper.jpeg',
		description: 'Published in 2015 IEEE Applied Power Electronics Conference and Exposition (APEC). This paper analyzes the voltage-source-inverter parallel system as a multi-input & multi-output system, and proposes the circulating-current mathematical model, the steady-state model and small-signal model of parallel system. Then the phasor models of the circulating-current and the circulating-current power are proposed. Subsequently, the mathematical model of traditional droop control is built and analyzed based on the circulating-current power model. According to the analysis of droop control, this paper proposes an accurate parallel control strategy (ω-Pcir and V-Qcir control), which can eliminate the circulating-current power and the bias of output voltage frequency and amplitude. Finally, simulation and experiment result are presented, which validates the performance of the proposed method.',
		keywords:'Electrical Electronic, Voltage-source Inverter, Parallel system, Droop control, Circulating-current',
		demo: 'files/paper.pdf',
		code: ' '
	},{
		title: '[CN]Multiple Valve Regulation of the Boiler Feed Water System',
		image: 'dist/images/BoilerFeedWaterSystem.jpeg',
		description: 'This Multiple Valve Regulation of the Boiler Feed Water System can manage the liguid in boiler by power of gravity and heat rather than normal pump. So the transfer of liquid only need to overcome the friction between pipe and liquid, which reduce the power of pump greatly and improve the efficiency of boiler power system.',
		keywords:'Energy, Boiler, Multiple valve, Feed water system',
		demo: 'files/CN201410060004.pdf',
		code: 'CN201410060004'
	},{
		title: '[CN]A No-pump Thermo Jet and Refrigeration Circulation Method and Device',
		image: 'dist/images/refrigerationCirculation.jpeg',
		description: 'This No-pump Thermo Jet and Refrigeration Circulation Method and Device is a application of improved Rankine cycle in refrigeration cycle. This cycle can manage the liguid in boiler by power of gravity and heat rather than normal pump. So the transfer of liquid only need to overcome the friction between pipe and liquid, which reduce the power of pump greatly and improve the efficiency of boiler power system.',
		keywords:'Energy, Circulation, No-pump',
		demo: 'files/CN201410330600.pdf',
		code: 'CN201410330600'
	},{
		title: '[CN]A No-pump Organic Rankine Circulation Power Generation Method and Device',
		image: 'dist/images/rankineCirculation.jpeg',
		description: 'This No-pump Organic Rankine Circulation Power Generation Method and Device can take away pump from normal rankine cycle and save the energy in power system.',
		keywords:'Energy, Rankine Circulation, No-pump',
		demo: 'files/CN201410331353.pdf',
		code: 'CN201410331353'
	},{
		title: '[CN]Multilayer Coating',
		image: 'dist/images/multilayerCoating.jpeg',
		description: 'Multilayer Coating can refresh the air and kill the virus and bacteria in the air lasting for long time utilizing the nanometer metallic oxide and silver grain.',
		keywords:'Material, Coating, Nano level metallic, sterilization',
		demo: 'files/CN201320814007.pdf',
		code: 'CN201320814007'
	},{
		title: '[CN]Multi-function Pendant',
		image: 'dist/images/multiFunctionPendant.jpeg',
		description: 'This Multi-function Pendant is composed of decorated coat, metal skeleton and circuit element, which has the function of air fan, light, acoustics, USB charger, etc.',
		keywords:'Machinery, Electronic',
		demo: 'files/CN201320125266.pdf',
		code: 'CN201320125266'
	},{
		title: '[CN]Bicycle Multi-function Power System',
		image: 'dist/images/bicycleMultiFunction.jpeg',
		description: 'This Bicycle Multi-function Power System generates electrical energy from bicycle, enabling the bicycle to have the function of USB charging, power bank, GPS system, self alarming, etc.',
		keywords:'Machinery, Electronic',
		demo: 'files/CN201320003025.pdf',
		code: 'CN201320003025'
	}];

	var awards = [
	{
		title: '2013-2014 Zhejiang Unversity first class scholarship for research and innovation',
		description: 'In honer of outstanding performance founded by Zhejiang University'
	},{
		title: 'Runner-up in 2013 China Robot Competition and Robocup Open',
		description: 'Rules: http://roborescue.sourceforge.net/web/'
	},{
		title: 'The 5th Place in 17th Robocup World Competition Rescue Simulation League',
		description: 'Rules: http://roborescue.sourceforge.net/web/'
	},{
		title: 'The first place in 2012 Zhejiang University business idea competition',
		description: 'A competition held by Zhejiang University to select best Startup idea.'
	},{
		title: 'The Second class prize in 2013 Zhejiang University Industrial Design competition',
		description: 'A competition held by Zhejiang University to select best Industrial Design.'
	},{
		title: '2011 Hangzhou International half Marathon',
		description: 'Finish with result of 1h54m1s.'
	},{
		title: '2014 Hangzhou International Marathon',
		description: 'Finish with result of 5h16m46s.'
	},{
		title: 'Third place in 2014 Zhejiang University Swimming competition men 200m medley swimming',
		description: 'Mix of four kind of swimming strokes 50m per stroke.'
	},{
		title: 'Second class prize in 2014 Zhejiang provice business plan competition',
		description: 'A competition held by Zhejiang provice to select best business plan.'
	},{
		title: 'Second class prize in 2012 Zhejiang University Physics Tournament',
		description: 'A competition held by Zhejiang University to do experiments and debate about certain physical problem.'
	}];

	var organizations = [{
		title: 'Zhejiang University Lantian student union',
		description: 'In the sports department, organized Sport Storm Basketball competition as the person in charge, also play role as referee during competition. Also played important role in activities held by other department such as new year carnival.'
	},{
		title: 'Zhejiang University culture promotion team',
		description: 'Introducd Zhejiang University history to important visitors. In the publicity department, made layer, poster, bookmark, badge, etc to advertise activities held by this team. Also, as a person in charge, hold many important and popular activities.'
	},{
		title: 'Rescue Simulation Group - ZJUbase',
		description: 'A team led by Zhejiang University Institute of Cyber-Systems and Control for Rescue Simulation strategy research. My job is to improving strategy in program simulating the environment after one earthquake, with several agents playing different rule in it. Police force should clear the block. Fire brigade should exterminate the spreading fire. Ambulance team should rescue the injured normal agents. Multiple criterions are used to evaluate the control strategy of all the agents. All codes are written in JAVA.'
	}];

	var mediaworks = [{
		image: 'dist/images/cover.jpg',
		description: '[Photoshop] Cover for culture promotion team handbook.',
		demo: 'dist/images/cover.jpg'
	},{
		image: 'dist/images/badge.jpg',
		description: '[Photoshop] Badge for culture promotion team seventh anniversary.',
		demo: 'dist/images/badge.jpg'
	},{
		image: 'dist/images/Memorial.bmp',
		description: '[Photoshop] Memorial mail for Zhejiang University campuses travel.',
		demo: 'dist/images/Memorial.bmp'
	},{
		image: 'dist/images/Memorial2.jpg',
		description: '[Photoshop] Memorial mail for Zhejiang University campuses travel.',
		demo: 'dist/images/Memorial2.jpg'
	},{
		image: 'dist/images/head.png',
		description: '[Photoshop] A profile image showing a bird burning in the sun and struggling to survive.',
		demo: 'dist/images/head.png'
	},{
		image: 'dist/images/fun.jpeg',
		description: '[Photoshop, Rhino] Works for Zhejiang University Industrial Design competition',
		demo: 'dist/images/fun.jpeg'
	},{
		image: 'dist/images/flashlight.jpeg',
		description: '[Photoshop, Rhino] Works for Zhejiang University Industrial Design competition',
		demo: 'dist/images/flashlight.jpeg'
	},{
		image: 'dist/images/chair.jpg',
		description: '[Rhino] Works for Zhejiang University Industrial Design competition.',
		demo: 'dist/images/chair.jpg'
	},{
		image: 'dist/images/Microcinema.jpeg',
		description: '[Adobe Premiere Pro] A 5-min Microcinema taken by Nokia N8 for a Phone Microcinema competition.',
		demo:"https://www.youtube.com/watch?v=iF8GV96w8eo"
	},{
		image: 'dist/images/chair2.jpg',
		description: '[Idea] A chair which looks elegant and can help people get up easily with spring resilience.',
		demo: 'dist/images/chair2.jpg'
	},{
		image: 'dist/images/crutch.jpg',
		description: '[Idea] A crutch which enables injured people (like wrenching ankle) to put their foot on so that they can get better faster',
		demo:'dist/images/crutch.jpg'
	},{
		image: 'dist/images/dustpan.jpg',
		description: '[Idea] A dustpan which can hold dust in case dust may run out when collecting following dust.',
		demo:'dist/images/dustpan.jpg'
	}];



	var certificates = [{
		title: '[CN]National third class tennis referee',
		description: 'Certificate for referee in tennis match.'
	},{
		title: '[CN]National third class psychological consultant',
		description: 'Certificate for professional psychological consultant.'
	}];

	var movies = [{
		image: 'dist/images/movies/A_Quiet_Place.jpeg',
		title: "A Quiet Place",
		chinesetitle: '寂静之地',
		type: '2'
	},{
		image: 'dist/images/movies/Tomb_Raider.jpeg',
		title: "Tomb Raider",
		chinesetitle: '古墓丽影：源起之战',
		type: '2'
	},{
		image: 'dist/images/movies/Ready_Player_One.jpeg',
		title: "Ready Player One",
		chinesetitle: '头号玩家',
		type: '2'
	},{
		image: 'dist/images/movies/Star_Wars_The_Last_Jedi.jpeg',
		title: "Star Wars: The Last Jedi",
		chinesetitle: '星球大战8：最后的绝地武士',
		type: '2'
	},{
		image: 'dist/images/movies/Guilty_of_Mind.jpeg',
		title: "Guilty of Mind",
		chinesetitle: '心理罪',
		type: '2'
	},{
		image: 'dist/images/movies/Wolf_Warrior_2.jpg',
		title: "Wolf Warrior 2",
		chinesetitle: '战狼2',
		type: '2'
	},{
		image: 'dist/images/movies/Blood_Diamond.jpeg',
		title: "Blood Diamond",
		chinesetitle: '血钻',
		type: '2'
	},{
		image: 'dist/images/movies/Princess_Mononoke.webp',
		title: "Princess Mononoke",
		chinesetitle: '幽灵公主',
		type: '2'
	},{
		image: 'dist/images/movies/The_Eagle_Shooting_Heroes.jpeg',
		title: "The Eagle Shooting Heroes",
		chinesetitle: '东成西就',
		type: '2'
	},{
		image: 'dist/images/movies/Ghost_in_the_Shell_Stand_Alone_Complex_Solid_State_Society.jpeg',
		title: "Ghost in the Shell: Stand Alone Complex - Solid State Society",
		chinesetitle: '攻壳机动队SSS',
		type: '2'
	},{
		image: 'dist/images/movies/Final_Fantasy_VII_Advent_Children.jpeg',
		title: 'Final Fantasy VII: Advent Children',
		chinesetitle: '最终幻想7：圣子降临',
		type: '2'
	},{
		image: 'dist/images/movies/Ghost_in_the_Shell_2_Innocence.jpg',
		title: 'Ghost in the Shell 2: Innocence',
		chinesetitle: '攻壳机动队2：无罪',
		type: '2'
	},{
		image: 'dist/images/movies/Futurama_Bender_s_Big_Score.jpg',
		title: "Futurama: Bender's Big Score",
		chinesetitle: '飞出个未来大电影1：班德大行动',
		type: '2'

	},{
		image: 'dist/images/movies/Futurama_The_Beast_with_a_Billion_Backs.jpg',
		title: 'Futurama: The Beast with a Billion Backs',
		chinesetitle: "飞出个未来大电影2：万背之兽",
		type: '2'
	},{
		image: 'dist/images/movies/Futurama_Bender_s_Game.webp',
		title: "Futurama: Bender's Game",
		chinesetitle: "飞出个未来大电影3：班德的游戏",
		type: '2'
	},{
		image: 'dist/images/movies/Futurama_Into_the_Wild_Green_Yonder.webp',
		title: "Futurama: Into the Wild Green Yonder",
		chinesetitle: "飞出个未来大电影4：绿色狂想",
		type: '2'
	},{
		image: 'dist/images/movies/King_of_Comedy.jpg',
		title: 'King of Comedy',
		chinesetitle: "喜剧之王",
		type: '2'
	},{
		image: 'dist/images/movies/Justice_League_The_Flashpoint_Paradox.jpg',
		title: 'Justice League: The Flashpoint Paradox',
		chinesetitle: "正义联盟：闪点悖论",
		type: '2'
	},{
		image: 'dist/images/movies/Victoria.jpeg',
		title: 'Victoria',
		chinesetitle: "维多利亚",
		type: '2'
	},{
		image: 'dist/images/movies/Howl_s_Moving_Castle.jpg',
		title: "Howl's Moving Castle",
		chinesetitle: "哈尔的移动城堡",
		type: '2'
	},{
		image: 'dist/images/movies/Saving_Private_Ryan.webp',
		title: 'Saving Private Ryan',
		chinesetitle: "拯救大兵瑞恩",
		type: '2'
	},{
		image: 'dist/images/movies/Swallowtail.jpg',
		title: 'Swallowtail',
		chinesetitle: "燕尾蝶",
		type: '2'
	},{
		image: 'dist/images/movies/The_Invisible_Guest.jpg',
		title: 'The Invisible Guest',
		chinesetitle: "看不见的客人",
		type: '2'
	},{
		image: 'dist/images/movies/Fireworks.jpeg',
		title: 'Fireworks',
		chinesetitle: "花火",
		type: '2'
	},{
		image: 'dist/images/movies/Mad_Max_Fury_Road.jpeg',
		title: 'Mad Max: Fury Road',
		chinesetitle: "疯狂的麦克斯4：狂暴之路",
		type: '2'
	},{
		image: 'dist/images/movies/Grave_of_the_Fireflies.jpeg',
		title: 'Grave of the Fireflies',
		chinesetitle: "萤火虫之墓",
		type: '2'
	},{
		image: 'dist/images/movies/Apocalypto.jpeg',
		title: 'Apocalypto',
		chinesetitle: "启示",
		type: '2'
	},{
		image: 'dist/images/movies/Swordsman_II.jpeg',
		title: 'Swordsman II',
		chinesetitle: "笑傲江湖2：东方不败",
		type: '2'
	},{
		image: 'dist/images/movies/Lost_in_Translation.jpeg',
		title: 'Lost in Translation',
		chinesetitle: "迷失东京",
		type: '2'
	},{
		image: 'dist/images/movies/Snowpiercer.jpeg',
		title: 'Snowpiercer',
		chinesetitle: "雪国列车",
		type: '2'
	},{
		image: 'dist/images/movies/Spectral.webp',
		title: 'Spectral',
		chinesetitle: "幽冥",
		type: '2'
	},{
		image: 'dist/images/movies/Kill_Bill_Volume_1.jpeg',
		title: 'Kill Bill: Volume 1',
		chinesetitle: "杀死比尔",
		type: '2'
	},{
		image: 'dist/images/movies/Kill_Bill_Volume_2.jpeg',
		title: 'Kill Bill: Volume 2',
		chinesetitle: "杀死比尔2",
		type: '2'
	},{
		image: 'dist/images/movies/Despicable_Me_2.jpeg',
		title: 'Despicable Me 2',
		chinesetitle: "神偷奶爸2",
		type: '2'
	},{
		image: 'dist/images/movies/Wonder_Woman.jpeg',
		title: 'Wonder Woman',
		chinesetitle: "神奇女侠",
		type: '2'
	},{
		image: 'dist/images/movies/Pirates_of_the_Caribbean_Dead_Men_Tell_No_Tales.jpeg',
		title: 'Pirates of the Caribbean: Dead Men Tell No Tales',
		chinesetitle: "加勒比海盗5：死无对证",
		type: '2'
	},{
		image: 'dist/images/movies/Pirates_of_the_Caribbean_On_Stranger_Tides.jpeg',
		title: 'Pirates of the Caribbean: On Stranger Tides',
		chinesetitle: "加勒比海盗4：惊涛怪浪",
		type: '2'
	},{
		image: 'dist/images/movies/Pirates_of_the_Caribbean_At_World_s_End.jpeg',
		title: "Pirates of the Caribbean: At World's End",
		chinesetitle: "加勒比海盗3：世界的尽头",
		type: '2'
	},{
		image: 'dist/images/movies/Pirates_of_the_Caribbean_Dead_Man_s_Chest.webp',
		title: "Pirates of the Caribbean: Dead Man's Chest",
		chinesetitle: "加勒比海盗2：聚魂棺",
		type: '2'
	},{
		image: 'dist/images/movies/Pirates_of_the_Caribbean_The_Curse_of_the_Black_Pearl.webp',
		title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
		chinesetitle: "加勒比海盗",
		type: '2'
	},{
		image: 'dist/images/movies/Guardians_of_the_Galaxy_Vol_2.jpeg',
		title: 'Guardians of the Galaxy Vol. 2',
		chinesetitle: "银河护卫队2",
		type: '2'
	},{
		image: 'dist/images/movies/Transformers_The_Last_Knight.jpeg',
		title: 'Transformers: The Last Knight',
		chinesetitle: "变形金刚5：最后的骑士",
		type: '2'
	},{
		image: 'dist/images/movies/Life.jpeg',
		title: 'Life',
		chinesetitle: "异星觉醒",
		type: '2'
	},{
		image: 'dist/images/movies/The_Blue_Room.jpeg',
		title: "The Blue Room",
		chinesetitle: "蓝色房间",
		type: '2'
	},{
		image: 'dist/images/movies/Possession.jpeg',
		title: "Possession",
		chinesetitle: "着魔",
		type: '2'
	},{
		image: 'dist/images/movies/Let_the_Right_One_In.jpeg',
		title: "Let the Right One In",
		chinesetitle: "生人勿进",
		type: '2'
	},{
		image: 'dist/images/movies/The_Thing.jpeg',
		title: "The Thing",
		chinesetitle: "怪形",
		type: '2'
	},{
		image: 'dist/images/movies/Pulse.jpeg',
		title: "Pulse",
		chinesetitle: "回路",
		type: '2'
	},{
		image: 'dist/images/movies/The_Signal.jpeg',
		title: "The Signal",
		chinesetitle: "信号",
		type: '2'
	},{
		image: 'dist/images/movies/ARQ.jpeg',
		title: "ARQ",
		chinesetitle: "超时空传输",
		type: '2'
	},{
		image: 'dist/images/movies/Time_Lapse.webp',
		title: "Time Lapse",
		chinesetitle: "定时拍摄",
		type: '2'
	},{
		image: 'dist/images/movies/Synchronicity.jpeg',
		title: "Synchronicity",
		chinesetitle: "隧道尽头",
		type: '2'
	},{
		image: 'dist/images/movies/At_the_End_of_the_Tunnel.jpeg',
		title: "At the End of the Tunnel",
		chinesetitle: "隧道尽头",
		type: '2'
	},{
		image: 'dist/images/movies/Project_Almanac.jpeg',
		title: "Project Almanac",
		chinesetitle: "年鉴计划",
		type: '2'
	},{
		image: 'dist/images/movies/Hurok.webp',
		title: "Hurok",
		chinesetitle: "逃离循环",
		type: '2'
	},{
		image: 'dist/images/movies/Resident_Evil_The_Final_Chapter.jpeg',
		title: "Resident Evil: The Final Chapter",
		chinesetitle: "生化危机：终章",
		type: '2'
	},{
		image: 'dist/images/movies/Deep_Rising.jpeg',
		title: "Deep Rising",
		chinesetitle: "极度深寒",
		type: '2'
	},{
		image: 'dist/images/movies/The_Tenant.jpeg',
		title: "The Tenant",
		chinesetitle: "怪房客",
		type: '2'
	},{
		image: 'dist/images/movies/The_Curse.jpeg',
		title: "The Curse",
		chinesetitle: "灵异咒",
		type: '2'
	},{
		image: 'dist/images/movies/Silk.jpeg',
		title: "Silk",
		chinesetitle: "诡丝",
		type: '2'
	},{
		image: 'dist/images/movies/What_We_Do_in_the_Shadows.jpeg',
		title: "What We Do in the Shadows",
		chinesetitle: "吸血鬼生活",
		type: '2'
	},{
		image: 'dist/images/movies/Dream_Home.jpeg',
		title: "Dream Home",
		chinesetitle: "维多利亚一号",
		type: '2'
	},{
		image: 'dist/images/movies/Dorm.webp',
		title: "Dorm",
		chinesetitle: "鬼宿舍",
		type: '2'
	},{
		image: 'dist/images/movies/Metropolis.jpeg',
		title: "Metropolis",
		chinesetitle: "大都会",
		type: '2'
	},{
		image: 'dist/images/movies/Interview_with_the_Vampire.jpeg',
		title: "Interview with the Vampire",
		chinesetitle: "夜访吸血鬼",
		type: '2'
	},{
		image: 'dist/images/movies/Lights_Out.webp',
		title: "Lights Out",
		chinesetitle: "关灯后",
		type: '2'
	},{
		image: 'dist/images/movies/Rosemary_s_Baby.jpeg',
		title: "Rosemary's Baby",
		chinesetitle: "罗斯玛丽的婴儿",
		type: '2'
	},{
		image: 'dist/images/movies/Case_Closed_The_Phantom_of_Baker_Street.jpeg',
		title: "Case Closed: The Phantom of Baker Street",
		chinesetitle: "名侦探柯南：贝克街的亡灵",
		type: '2'
	},{
		image: 'dist/images/movies/Epitaph.jpeg',
		title: "Epitaph",
		chinesetitle: "奇谈",
		type: '2'
	},{
		image: 'dist/images/movies/Dead_Snow_Red_vs_Dead.jpeg',
		title: "Dead Snow: Red vs. Dead",
		chinesetitle: "死亡之雪2",
		type: '2'
	},{
		image: 'dist/images/movies/Housebound.webp',
		title: "Housebound",
		chinesetitle: "足不出户",
		type: '2'
	},{
		image: 'dist/images/movies/The_Revenant.jpeg',
		title: "The Revenant",
		chinesetitle: "亡灵",
		type: '2'
	},{
		image: 'dist/images/movies/Poirot_Hallowe_en_Party.webp',
		title: "Poirot: Hallowe'en Party",
		chinesetitle: "万圣节前夜的谋杀案",
		type: '2'
	},{
		image: 'dist/images/movies/Your_Name.jpeg',
		title: "Your Name",
		chinesetitle: "你的名字",
		type: '2'
	},{
		image: 'dist/images/movies/The_Handmaiden.jpeg',
		title: "The Handmaiden",
		chinesetitle: "小姐",
		type: '2'
	},{
		image: 'dist/images/movies/The_Possessed.webp',
		title: "The Possessed",
		chinesetitle: "中邪",
		type: '2'
	},{
		image: 'dist/images/movies/The_Conjuring_2.jpeg',
		title: "The Conjuring 2",
		chinesetitle: "招魂2",
		type: '2'
	},{
		image: 'dist/images/movies/Under_the_Shadow.jpeg',
		title: "Under the Shadow",
		chinesetitle: "阴影之下",
		type: '2'
	},{
		image: 'dist/images/movies/Big_Fish.webp',
		title: "Big Fish",
		chinesetitle: "大鱼",
		type: '2'
	},{
		image: 'dist/images/movies/The_Wailing.jpeg',
		title: "The Wailing",
		chinesetitle: "哭声",
		type: '2'
	},{
		image: 'dist/images/movies/Ouija_Origin_of_Evil.jpeg',
		title: "Ouija: Origin of Evil",
		chinesetitle: "死亡占卜2：恶灵始源",
		type: '2'
	},{
		image: 'dist/images/movies/Akira.jpeg',
		title: "Akira",
		chinesetitle: "阿基拉",
		type: '2'
	},{
		image: 'dist/images/movies/The_Autopsy_of_Jane_Doe.jpeg',
		title: "The Autopsy of Jane Doe",
		chinesetitle: "无名女尸",
		type: '2'
	},{
		image: 'dist/images/movies/Love_Letter.jpeg',
		title: "Love Letter",
		chinesetitle: "情书",
		type: '2'
	},{
		image: 'dist/images/movies/Short_Peace.jpeg',
		title: "Short Peace",
		chinesetitle: "短暂和平",
		type: '2'
	},{
		image: 'dist/images/movies/Kytice.webp',
		title: "Kytice",
		chinesetitle: "野花",
		type: '2'
	},{
		image: 'dist/images/movies/The_Animatrix.jpeg',
		title: "The Animatrix",
		chinesetitle: "黑客帝国动画版",
		type: '2'
	},{
		image: 'dist/images/movies/Perfect_Blue.jpeg',
		title: "Perfect Blue",
		chinesetitle: "未麻的部屋",
		type: '2'
	},{
		image: 'dist/images/movies/The_Girl_Who_Leapt_Through_Time.jpeg',
		title: "The Girl Who Leapt Through Time",
		chinesetitle: "穿越时空的少女",
		type: '2'
	},{
		image: 'dist/images/movies/Memories_of_Matsuko.jpeg',
		title: "Memories of Matsuko",
		chinesetitle: "被嫌弃的松子的一生",
		type: '2'
	},{
		image: 'dist/images/movies/The_Coffin_in_the_Mountain.jpeg',
		title: "The Coffin in the Mountain",
		chinesetitle: "心迷宫",
		type: '2'
	},{
		image: 'dist/images/movies/Crash.jpeg',
		title: "Crash",
		chinesetitle: "撞车",
		type: '2'
	},{
		image: 'dist/images/movies/Fantastic_Beasts_and_Where_to_Find_Them.jpeg',
		title: "Fantastic Beasts and Where to Find Them",
		chinesetitle: "神奇动物在哪里",
		type: '2'
	},{
		image: 'dist/images/movies/Rear_Window.jpeg',
		title: "Rear Window",
		chinesetitle: "后窗",
		type: '2'
	},{
		image: 'dist/images/movies/Memories.jpeg',
		title: "Memories",
		chinesetitle: "回忆三部曲",
		type: '2'
	},{
		image: 'dist/images/movies/Rashomon.jpeg',
		title: "Rashomon",
		chinesetitle: "罗生门",
		type: '2'
	},{
		image: 'dist/images/movies/Carlito_s_Way.jpeg',
		title: "Carlito's Way",
		chinesetitle: "情枭的黎明",
		type: '2'
	},{
		image: 'dist/images/movies/Neo_Tokyo.jpeg',
		title: "Neo Tokyo",
		chinesetitle: "迷宫物语",
		type: '2'
	},{
		image: 'dist/images/movies/Zoo.jpeg',
		title: "Zoo",
		chinesetitle: "继续活下去的五个故事",
		type: '2'
	},{
		image: 'dist/images/movies/Train_To_Busan.jpeg',
		title: "Train To Busan",
		chinesetitle: "釜山行",
		type: '2'
	},{
		image: 'dist/images/movies/Malèna.jpeg',
		title: "Malèna",
		chinesetitle: "西西里的美丽传说",
		type: '2'
	},{
		image: 'dist/images/movies/Dial_M_for_Murder.jpeg',
		title: "Dial M for Murder",
		chinesetitle: "电话谋杀案",
		type: '2'
	},{
		image: 'dist/images/movies/Brain_Dead.jpg',
		title: "Brain Dead",
		chinesetitle: "是谁让我脑死了",
		type: '2'
	},{
		image: 'dist/images/movies/Batman_v_Superman_Dawn_of_Justice.jpeg',
		title: "Batman v Superman: Dawn of Justice",
		chinesetitle: "蝙蝠侠大战超人：正义黎明",
		type: '2'
	},{
		image: 'dist/images/movies/Warcraft.jpeg',
		title: "Warcraft",
		chinesetitle: "魔兽",
		type: '2'
	},{
		image: 'dist/images/movies/Crazy_Stone.jpeg',
		title: "Crazy Stone",
		chinesetitle: "疯狂的石头",
		type: '2'
	},{
		image: 'dist/images/movies/One_Flew_Over_the_Cuckoo_s_Nest.jpeg',
		title: "One Flew Over the Cuckoo's Nest",
		chinesetitle: "飞越疯人院",
		type: '2'
	},{
		image: 'dist/images/movies/Thelma_Louise.jpeg',
		title: "Thelma & Louise",
		chinesetitle: "末路狂花",
		type: '2'
	},{
		image: 'dist/images/movies/Zee-Oui.jpg',
		title: "Zee-Oui",
		chinesetitle: "食人狂魔",
		type: '2'
	},{
		image: 'dist/images/movies/Forrest_Gump.jpeg',
		title: "Forrest Gump",
		chinesetitle: "阿甘正传",
		type: '2'
	},{
		image: 'dist/images/movies/The_Uninvited.jpeg',
		title: "The Uninvited",
		chinesetitle: "四人餐桌",
		type: '2'
	},{
		image: 'dist/images/movies/The_Killing.webp',
		title: "The Killing",
		chinesetitle: "杀手",
		type: '2'
	},{
		image: 'dist/images/movies/Face.jpeg',
		title: "Face",
		chinesetitle: "凶相",
		type: '2'
	},{
		image: 'dist/images/movies/A_Chinese_Odyssey_Part_One_Pandora_s_Box.webp',
		title: "A Chinese Odyssey Part One - Pandora's Box",
		chinesetitle: "大话西游之月光宝盒",
		type: '2'
	},{
		image: 'dist/images/movies/A_Chinese_Odyssey_Part_Two_Cinderella.webp',
		title: "A Chinese Odyssey Part Two - Cinderella",
		chinesetitle: "大话西游之大圣娶亲",
		type: '2'
	},{
		image: 'dist/images/movies/Captain_America_Civil_War.jpeg',
		title: "Captain America: Civil War",
		chinesetitle: "美国队长3",
		type: '2'
	},{
		image: 'dist/images/movies/Monsters_Inc.jpeg',
		title: "Monsters, Inc.",
		chinesetitle: "怪兽电力公司",
		type: '2'
	},{
		image: 'dist/images/movies/The_Possession.jpeg',
		title: "The Possession",
		chinesetitle: "死魂盒",
		type: '2'
	},{
		image: 'dist/images/movies/Livide.webp',
		title: "Livide",
		chinesetitle: "死色",
		type: '2'
	},{
		image: 'dist/images/movies/The_Pact.jpeg',
		title: "The Pact",
		chinesetitle: "死亡约定",
		type: '2'
	},{
		image: 'dist/images/movies/Shutter.jpeg',
		title: "Shutter",
		chinesetitle: "鬼影",
		type: '2'
	},{
		image: 'dist/images/movies/Alice_in_Wonderland.webp',
		title: "Alice in Wonderland",
		chinesetitle: "爱丽丝梦游仙境",
		type: '2'
	},{
		image: 'dist/images/movies/Cello.jpeg',
		title: "Cello",
		chinesetitle: "狼溪2",
		type: '2'
	},{
		image: 'dist/images/movies/The_Messengers.jpeg',
		title: "The Messengers",
		chinesetitle: "鬼使神差",
		type: '2'
	},{
		image: 'dist/images/movies/The_Victim.jpeg',
		title: "The Victim",
		chinesetitle: "吓死鬼",
		type: '2'
	},{
		image: 'dist/images/movies/Shaun_of_the_Dead.jpeg',
		title: "Shaun of the Dead",
		chinesetitle: "僵尸肖恩",
		type: '2'
	},{
		image: 'dist/images/movies/Paranormal_Activity.jpeg',
		title: "Paranormal Activity",
		chinesetitle: "灵动：鬼影实录",
		type: '2'
	},{
		image: 'dist/images/movies/Urban_Legend.jpeg',
		title: "Urban Legend",
		chinesetitle: "下一个就是你",
		type: '2'
	},{
		image: 'dist/images/movies/The_Ruins.jpeg',
		title: "The Ruins",
		chinesetitle: "恐怖废墟",
		type: '2'
	},{
		image: 'dist/images/movies/Horror_Stories.jpeg',
		title: "Horror Stories",
		chinesetitle: "恐怖故事",
		type: '2'
	},{
		image: 'dist/images/movies/Art_of_the_Devil.jpeg',
		title: "Art of the Devil",
		chinesetitle: "恶魔的艺术",
		type: '2'
	},{
		image: 'dist/images/movies/Art_of_the_Devil_2.jpeg',
		title: "Art of the Devil 2",
		chinesetitle: "恶魔的艺术2：邪降",
		type: '2'
	},{
		image: 'dist/images/movies/Art_of_the_Devil_3.jpeg',
		title: "Art of the Devil 3",
		chinesetitle: "恶魔的艺术3：鬼影随行",
		type: '2'
	},{
		image: 'dist/images/movies/Ghost_Ship.jpeg',
		title: "Ghost Ship",
		chinesetitle: "幽灵船",
		type: '2'
	},{
		image: 'dist/images/movies/To_Sir_with_Love.jpeg',
		title: "To Sir, with Love",
		chinesetitle: "老师的恩惠",
		type: '2'
	},{
		image: 'dist/images/movies/Trick_r_Treat.jpeg',
		title: "Trick 'r Treat",
		chinesetitle: "别惹小孩",
		type: '2'
	},{
		image: 'dist/images/movies/Mirror.jpg',
		title: "Mirror2",
		chinesetitle: "鬼镜",
		type: '2'
	},{
		image: 'dist/images/movies/Mirrors_2.jpeg',
		title: "Mirrors 2",
		chinesetitle: "鬼镜2",
		type: '2'
	},{
		image: 'dist/images/movies/GANTZ.webp',
		title: "GANTZ",
		chinesetitle: "杀戮都市",
		type: '2'
	},{
		image: 'dist/images/movies/Gantz_Perfect_Answer.jpeg',
		title: "Gantz: Perfect Answer",
		chinesetitle: "杀戮都市2",
		type: '2'
	},{
		image: 'dist/images/movies/Zootopia.jpeg',
		title: "Zootopia",
		chinesetitle: "疯狂动物城",
		type: '2'
	},{
		image: 'dist/images/movies/Alone.jpeg',
		title: "Alone",
		chinesetitle: "连体阴",
		type: '2'
	},{
		image: 'dist/images/movies/Ring.jpeg',
		title: "Ring",
		chinesetitle: "午夜凶铃",
		type: '2'
	},{
		image: 'dist/images/movies/Ring_2.jpeg',
		title: "Ring 2",
		chinesetitle: "午夜凶铃2之贞子缠身",
		type: '2'
	},{
		image: 'dist/images/movies/Ring_4_zhen_phase_to_light.webp',
		title: "Ring 0: Birthday",
		chinesetitle: "午夜凶铃3：贞相大白",
		type: '2'
	},{
		image: 'dist/images/movies/Rasen.jpeg',
		title: "Rasen",
		chinesetitle: "午夜凶铃：凶铃再现",
		type: '2'
	},{
		image: 'dist/images/movies/Forbidden_Floor.jpeg',
		title: "Forbidden Floor",
		chinesetitle: "突然有一天之第四层",
		type: '2'
	},{
		image: 'dist/images/movies/One_Missed_Call.jpeg',
		title: "One Missed Call",
		chinesetitle: "鬼来电",
		type: '2'
	},{
		image: 'dist/images/movies/One_Missed_Call_2.jpeg',
		title: "One Missed Call 2",
		chinesetitle: "鬼来电2",
		type: '2'
	},{
		image: 'dist/images/movies/One_Missed_Call_Final.jpeg',
		title: "One Missed Call: Final",
		chinesetitle: "鬼来电3",
		type: '2'
	},{
		image: 'dist/images/movies/Thirteen_Ghosts.jpeg',
		title: "Thirteen Ghosts",
		chinesetitle: "十三猛鬼",
		type: '2'
	},{
		image: 'dist/images/movies/The_Iceman.jpeg',
		title: "The Iceman",
		chinesetitle: "冰人",
		type: '2'
	},{
		image: 'dist/images/movies/White_Melody_of_Death.jpeg',
		title: "White: Melody of Death",
		chinesetitle: "白色：诅咒的旋律",
		type: '2'
	},{
		image: 'dist/images/movies/Star_Wars_The_Force_Awakens.jpeg',
		title: "Star Wars: The Force Awakens",
		chinesetitle: "星球大战7：原力觉醒",
		type: '2'
	},{
		image: 'dist/images/movies/Whispering_Corridors.jpeg',
		title: "Whispering Corridors",
		chinesetitle: "女高怪谈1：死亡教室",
		type: '2'
	},{
		image: 'dist/images/movies/Memento_Mori.jpeg',
		title: "Memento Mori",
		chinesetitle: "女高怪谈2：交换日记",
		type: '2'
	},{
		image: 'dist/images/movies/Wishing_Stairs.jpeg',
		title: "Wishing Stairs",
		chinesetitle: "女高怪谈3：狐狸阶梯",
		type: '2'
	},{
		image: 'dist/images/movies/Voice.jpeg',
		title: "Voice",
		chinesetitle: "女高怪谈4：声音",
		type: '2'
	},{
		image: 'dist/images/movies/A_Blood_Pledge.jpeg',
		title: "A Blood Pledge",
		chinesetitle: "女高怪谈5：结伴自杀",
		type: '2'
	},{
		image: 'dist/images/movies/Drag_Me_to_Hell.jpeg',
		title: "Drag Me to Hell",
		chinesetitle: "堕入地狱",
		type: '2'
	},{
		image: 'dist/images/movies/Afflicted.jpeg',
		title: "Afflicted",
		chinesetitle: "折磨",
		type: '2'
	},{
		image: 'dist/images/movies/The_Frozen_Ground.jpeg',
		title: "The Frozen Ground",
		chinesetitle: "冰封之地",
		type: '2'
	},{
		image: 'dist/images/movies/Chilling_Visions_5_Senses_of_Fear.jpeg',
		title: "Chilling Visions: 5 Senses of Fear",
		chinesetitle: "恐惧幻影",
		type: '2'
	},{
		image: 'dist/images/movies/3_A_M_3D.jpeg',
		title: "3 A.M. 3D",
		chinesetitle: "鬼三惊",
		type: '2'
	},{
		image: 'dist/images/movies/Vacancy.jpeg',
		title: "Vacancy",
		chinesetitle: "针孔旅馆",
		type: '2'
	},{
		image: 'dist/images/movies/Laddaland.jpeg',
		title: "Laddaland",
		chinesetitle: "怨鬼之家",
		type: '2'
	},{
		image: 'dist/images/movies/Blitz.jpeg',
		title: "Blitz",
		chinesetitle: "玩命追踪",
		type: '2'
	},{
		image: 'dist/images/movies/Haunter.jpeg',
		title: "Haunter",
		chinesetitle: "附身",
		type: '2'
	},{
		image: 'dist/images/movies/The_Echo.jpeg',
		title: "The Echo",
		chinesetitle: "夺命回声",
		type: '2'
	},{
		image: 'dist/images/movies/As_Above_So_Below.jpeg',
		title: "As Above, So Below",
		chinesetitle: "地下墓穴",
		type: '2'
	},{
		image: 'dist/images/movies/The_Babadook.jpeg',
		title: "The Babadook",
		chinesetitle: "鬼书",
		type: '2'
	},{
		image: 'dist/images/movies/V_H_S.jpeg',
		title: "V/H/S",
		chinesetitle: "致命录像带",
		type: '2'
	},{
		image: 'dist/images/movies/V_H_S_2.webp',
		title: "V/H/S/2",
		chinesetitle: "致命录像带2",
		type: '2'
	},{
		image: 'dist/images/movies/Oculus.jpeg',
		title: "Oculus",
		chinesetitle: "鬼遮眼",
		type: '2'
	},{
		image: 'dist/images/movies/Mindscape.jpeg',
		title: "Mindscape",
		chinesetitle: "思维空间",
		type: '2'
	},{
		image: 'dist/images/movies/The_Amityville_Horror.jpeg',
		title: "The Amityville Horror",
		chinesetitle: "鬼哭神嚎",
		type: '2'
	},{
		image: 'dist/images/movies/Thesis_On_A_Homicide.webp',
		title: "Thesis On A Homicide",
		chinesetitle: "谋杀论文",
		type: '2'
	},{
		image: 'dist/images/movies/Ugly.jpeg',
		title: "Ugly",
		chinesetitle: "丑恶",
		type: '2'
	},{
		image: 'dist/images/movies/You_re_Next.jpeg',
		title: "You're Next",
		chinesetitle: "你是下一个",
		type: '2'
	},{
		image: 'dist/images/movies/Forgotten.jpeg',
		title: "Forgotten",
		chinesetitle: "不准忘了我",
		type: '2'
	},{
		image: 'dist/images/movies/Thursday.jpeg',
		title: "Thursday",
		chinesetitle: "惊爆星期四",
		type: '2'
	},{
		image: 'dist/images/movies/Suspect_Zero.jpeg',
		title: "Suspect Zero",
		chinesetitle: "零号嫌疑犯",
		type: '2'
	},{
		image: 'dist/images/movies/Dream_House.jpeg',
		title: "Dream House",
		chinesetitle: "梦宅诡影",
		type: '2'
	},{
		image: 'dist/images/movies/Scream.jpeg',
		title: "Scream",
		chinesetitle: "惊声尖叫",
		type: '2'
	},{
		image: 'dist/images/movies/Scream_2.jpeg',
		title: "Scream 2",
		chinesetitle: "惊声尖叫2",
		type: '2'
	},{
		image: 'dist/images/movies/Scream_3.jpeg',
		title: "Scream 3",
		chinesetitle: "惊声尖叫3",
		type: '2'
	},{
		image: 'dist/images/movies/Scream_4.jpeg',
		title: "Scream 4",
		chinesetitle: "惊声尖叫4",
		type: '2'
	},{
		image: 'dist/images/movies/Scream_5.jpg',
		title: "Scream 5",
		chinesetitle: "惊声尖叫5",
		type: '2'
	},{
		image: 'dist/images/movies/Stay_Alive.jpeg',
		title: "Stay Alive",
		chinesetitle: "生存游戏",
		type: '2'
	},{
		image: 'dist/images/movies/The_Ward.webp',
		title: "The Ward",
		chinesetitle: "病院惊魂",
		type: '2'
	},{
		image: 'dist/images/movies/Side_Effects.jpeg',
		title: "Side Effects",
		chinesetitle: "副作用",
		type: '2'
	},{
		image: 'dist/images/movies/I_Know_What_You_Did_Last_Summer.jpeg',
		title: "I Know What You Did Last Summer",
		chinesetitle: "我知道你去年夏天干了什么",
		type: '2'
	},{
		image: 'dist/images/movies/I_Still_Know_What_You_Did_Last_Summer.jpeg',
		title: "I Still Know What You Did Last Summer",
		chinesetitle: "我仍然知道你去年夏天干了什么",
		type: '2'
	},{
		image: 'dist/images/movies/Big_Bad_Wolves.jpeg',
		title: "Big Bad Wolves",
		chinesetitle: "大坏狼",
		type: '2'
	},{
		image: 'dist/images/movies/Across_the_Hall.jpeg',
		title: "Across the Hall",
		chinesetitle: "恐怖旅馆",
		type: '2'
	},{
		image: 'dist/images/movies/Copycat.jpeg',
		title: "Copycat",
		chinesetitle: "凶手就在门外",
		type: '2'
	},{
		image: 'dist/images/movies/Cold_Prey.jpeg',
		title: "Cold Prey",
		chinesetitle: "雪山惊魂",
		type: '2'
	},{
		image: 'dist/images/movies/Cold_Prey_2.jpeg',
		title: "Cold Prey 2",
		chinesetitle: "雪山惊魂2",
		type: '2'
	},{
		image: 'dist/images/movies/Cold_Prey_3.jpeg',
		title: "Cold Prey 3",
		chinesetitle: "雪山惊魂3",
		type: '2'
	},{
		image: 'dist/images/movies/Scary_Movie_2.jpeg',
		title: "Scary Movie 2",
		chinesetitle: "惊声尖笑2",
		type: '2'
	},{
		image: 'dist/images/movies/The_Tall_Man.jpeg',
		title: "The Tall Man",
		chinesetitle: "高个夜魔",
		type: '2'
	},{
		image: 'dist/images/movies/Mesrine_Killer_Instinct.jpeg',
		title: "Mesrine Killer Instinct",
		chinesetitle: "头号公敌续集",
		type: '2'
	},{
		image: 'dist/images/movies/The_Dark_House.jpeg',
		title: "The Dark House",
		chinesetitle: "黑暗之家",
		type: '2'
	},{
		image: 'dist/images/movies/Serenity.jpeg',
		title: "Serenity",
		chinesetitle: "冲出宁静号",
		type: '2'
	},{
		image: 'dist/images/movies/Boy_Wonder.jpeg',
		title: "Boy Wonder",
		chinesetitle: "复仇少年",
		type: '2'
	},{
		image: 'dist/images/movies/Bedevilled.jpeg',
		title: "Bedevilled",
		chinesetitle: "金福南杀人事件始末",
		type: '2'
	},{
		image: 'dist/images/movies/Final_Destination.jpeg',
		title: "Final Destination",
		chinesetitle: "死神来了",
		type: '2'
	},{
		image: 'dist/images/movies/Final_Destination_2.jpeg',
		title: "Final Destination 2",
		chinesetitle: "死神来了2",
		type: '2'
	},{
		image: 'dist/images/movies/Final_Destination_3.jpeg',
		title: "Final Destination 3",
		chinesetitle: "死神来了3",
		type: '2'
	},{
		image: 'dist/images/movies/The_Final_Destination.jpeg',
		title: "The Final Destination",
		chinesetitle: "死神来了4",
		type: '2'
	},{
		image: 'dist/images/movies/Final_Destination_5.jpeg',
		title: "Final Destination 5",
		chinesetitle: "死神来了5",
		type: '2'
	},{
		image: 'dist/images/movies/In_the_House.jpeg',
		title: "In the House",
		chinesetitle: "登堂入室",
		type: '2'
	},{
		image: 'dist/images/movies/Twin_Spirit.webp',
		title: "Twin Spirit",
		chinesetitle: "双生灵",
		type: '2'
	},{
		image: 'dist/images/movies/Nightcrawler.jpeg',
		title: "Nightcrawler",
		chinesetitle: "夜行者",
		type: '2'
	},{
		image: 'dist/images/movies/Tell_No_One.jpeg',
		title: "Tell No One",
		chinesetitle: "不可告人",
		type: '2'
	},{
		image: 'dist/images/movies/Stonehearst_Asylum.jpeg',
		title: "Stonehearst Asylum",
		chinesetitle: "地狱医院",
		type: '2'
	},{
		image: 'dist/images/movies/Wild_Things.webp',
		title: "Wild Things",
		chinesetitle: "玩尽杀绝",
		type: '2'
	},{
		image: 'dist/images/movies/An_Inspector_Calls.webp',
		title: "An Inspector Calls",
		chinesetitle: "罪恶之家",
		type: '2'
	},{
		image: 'dist/images/movies/Who_Am_I.webp',
		title: "Who Am I",
		chinesetitle: "我是谁：没有绝对安全的系统",
		type: '2'
	},{
		image: 'dist/images/movies/Marshland.jpeg',
		title: "Marshland",
		chinesetitle: "沼泽地",
		type: '2'
	},{
		image: 'dist/images/movies/Silenced.jpeg',
		title: "Silenced",
		chinesetitle: "熔炉",
		type: '2'
	},{
		image: 'dist/images/movies/The_Hunger_Games.jpeg',
		title: "The Hunger Games",
		chinesetitle: "饥饿游戏",
		type: '2'
	},{
		image: 'dist/images/movies/The_Hunger_Games_Catching_Fire.jpeg',
		title: "The Hunger Games: Catching Fire",
		chinesetitle: "饥饿游戏2：星火燎原",
		type: '2'
	},{
		image: 'dist/images/movies/The_Hunger_Games_Mockingjay_Part_1.jpeg',
		title: "The Hunger Games: Mockingjay – Part 1",
		chinesetitle: "饥饿游戏3：嘲笑鸟(上) ",
		type: '2'
	},{
		image: 'dist/images/movies/The_Hunger_Games_Mockingjay_Part_2.jpeg',
		title: "The Hunger Games: Mockingjay – Part 2",
		chinesetitle: "饥饿游戏3：嘲笑鸟(下)",
		type: '2'
	},{
		image: 'dist/images/movies/A_Hard_Day.jpeg',
		title: "A Hard Day",
		chinesetitle: "走到尽头",
		type: '2'
	},{
		image: 'dist/images/movies/Impostor.webp',
		title: "Impostor",
		chinesetitle: "冒名顶替",
		type: '2'
	},{
		image: 'dist/images/movies/The_Terminator.jpeg',
		title: "The Terminator",
		chinesetitle: "终结者",
		type: '2'
	},{
		image: 'dist/images/movies/Terminator_2_Judgment_Day.jpeg',
		title: "Terminator 2: Judgment Day",
		chinesetitle: "终结者2：审判日",
		type: '2'
	},{
		image: 'dist/images/movies/Terminator_3_Rise_of_the_Machines.jpeg',
		title: "Terminator 3: Rise of the Machines",
		chinesetitle: "终结者3：机器的崛起",
		type: '2'
	},{
		image: 'dist/images/movies/Terminator_Salvation.jpeg',
		title: "Terminator Salvation",
		chinesetitle: "终结者2018",
		type: '2'
	},{
		image: 'dist/images/movies/Terminator_Genisys.jpeg',
		title: "Terminator Genisys",
		chinesetitle: "终结者：创世纪",
		type: '2'
	},{
		image: 'dist/images/movies/Red_Planet.jpeg',
		title: "Red Planet",
		chinesetitle: "红色星球",
		type: '2'
	},{
		image: 'dist/images/movies/Lost_in_Space.webp',
		title: "Lost in Space",
		chinesetitle: "迷失太空",
		type: '2'
	},{
		image: 'dist/images/movies/The_Quiet_Earth.jpeg',
		title: "The Quiet Earth",
		chinesetitle: "寂静的地球",
		type: '2'
	},{
		image: 'dist/images/movies/The_Core.webp',
		title: "The Core",
		chinesetitle: "地心抢险记",
		type: '2'
	},{
		image: 'dist/images/movies/Star_Trek_Into_Darkness.jpeg',
		title: "Star Trek Into Darkness",
		chinesetitle: "星际迷航：暗黑无界",
		type: '2'
	},{
		image: 'dist/images/movies/Lucy.jpeg',
		title: "Lucy",
		chinesetitle: "超体",
		type: '2'
	},{
		image: 'dist/images/movies/Pandorum.jpeg',
		title: "Pandorum",
		chinesetitle: "深空失忆",
		type: '2'
	},{
		image: 'dist/images/movies/Solaris.jpeg',
		title: "Solaris",
		chinesetitle: "飞向太空",
		type: '2'
	},{
		image: 'dist/images/movies/Europa_Report.jpeg',
		title: "Europa Report",
		chinesetitle: "欧罗巴报告",
		type: '2'
	},{
		image: 'dist/images/movies/Event_Horizon.jpeg',
		title: "Event Horizon",
		chinesetitle: "黑洞表面",
		type: '2'
	},{
		image: 'dist/images/movies/Cargo.jpeg',
		title: "Cargo",
		chinesetitle: "太空运输",
		type: '2'
	},{
		image: 'dist/images/movies/Sanctum.webp',
		title: "Sanctum",
		chinesetitle: "夺命深渊",
		type: '2'
	},{
		image: 'dist/images/movies/The_Maze_Runner.jpeg',
		title: "The Maze Runner",
		chinesetitle: "移动迷宫",
		type: '2'
	},{
		image: 'dist/images/movies/Maze_Runner_The_Scorch_Trials.jpeg',
		title: "Maze Runner: The Scorch Trials",
		chinesetitle: "移动迷宫2",
		type: '2'
	},{
		image: 'dist/images/movies/Mission_to_Mars.jpeg',
		title: "Mission to Mars",
		chinesetitle: "火星任务",
		type: '2'
	},{
		image: 'dist/images/movies/Freddy_vs_Jason.jpg',
		title: "Freddy vs. Jason",
		chinesetitle: "佛莱迪大战杰森之开膛破肚",
		type: '2'
	},{
		image: 'dist/images/movies/Tag.jpeg',
		title: "Tag",
		chinesetitle: "真实魔鬼游戏",
		type: '2'
	},{
		image: 'dist/images/movies/Death_on_the_Nile.jpeg',
		title: "Death on the Nile",
		chinesetitle: "尼罗河上的惨案",
		type: '2'
	},{
		image: 'dist/images/movies/Killer_Toon.jpeg',
		title: "Killer Toon",
		chinesetitle: "杀人漫画",
		type: '2'
	},{
		image: 'dist/images/movies/Lost_Highway.jpeg',
		title: "Lost Highway",
		chinesetitle: "妖夜荒踪",
		type: '2'
	},{
		image: 'dist/images/movies/Silent_Witness.jpeg',
		title: "Silent Witness",
		chinesetitle: "全民目击",
		type: '2'
	},{
		image: 'dist/images/movies/Atonement.jpeg',
		title: "Atonement",
		chinesetitle: "赎罪",
		type: '2'
	},{
		image: 'dist/images/movies/Prisoners.jpeg',
		title: "Prisoners",
		chinesetitle: "囚徒",
		type: '2'
	},{
		image: 'dist/images/movies/Golden_Slumber.webp',
		title: "Golden Slumber",
		chinesetitle: "金色梦乡",
		type: '2'
	},{
		image: 'dist/images/movies/Mission_Impossible.jpeg',
		title: "Mission: Impossible",
		chinesetitle: "碟中諜",
		type: '2'
	},{
		image: 'dist/images/movies/Mission_Impossible_2.jpeg',
		title: "Mission: Impossible 2",
		chinesetitle: "碟中谍2",
		type: '2'
	},{
		image: 'dist/images/movies/Mission_Impossible_III.jpeg',
		title: "Mission: Impossible III",
		chinesetitle: "碟中谍3",
		type: '2'
	},{
		image: 'dist/images/movies/Mission_Impossible_Ghost_Protocol.jpeg',
		title: "Mission: Impossible – Ghost Protocol",
		chinesetitle: "碟中谍4",
		type: '2'
	},{
		image: 'dist/images/movies/The_Adventures_of_Tintin_The_Secret_of_the_Unicorn.jpeg',
		title: "The Adventures of Tintin: The Secret of the Unicorn",
		chinesetitle: "丁丁历险记",
		type: '2'
	},{
		image: 'dist/images/movies/The_Bourne_Identity.jpeg',
		title: "The Bourne Identity",
		chinesetitle: "谍影重重",
		type: '2'
	},{
		image: 'dist/images/movies/The_Bourne_Supremacy.jpeg',
		title: "The Bourne Supremacy",
		chinesetitle: "谍影重重2",
		type: '2'
	},{
		image: 'dist/images/movies/The_Bourne_Ultimatum.jpeg',
		title: "The Bourne Ultimatum",
		chinesetitle: "谍影重重3",
		type: '2'
	},{
		image: 'dist/images/movies/The_Bourne_Legacy.jpeg',
		title: "The Bourne Legacy",
		chinesetitle: "谍影重重4",
		type: '2'
	},{
		image: 'dist/images/movies/Jason_Bourne.jpeg',
		title: "Jason Bourne",
		chinesetitle: '谍影重重5',
		type: '2'
	},{
		image: 'dist/images/movies/Zombieland.jpeg',
		title: "Zombieland",
		chinesetitle: "丧尸乐园",
		type: '2'
	},{
		image: 'dist/images/movies/Cold_Fish.jpeg',
		title: "Cold Fish",
		chinesetitle: "冰冷热带鱼",
		type: '2'
	},{
		image: 'dist/images/movies/Noah.jpeg',
		title: "Noah",
		chinesetitle: "诺亚方舟：创世之旅",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Z_Resurrection_F.jpeg',
		title: "Dragon Ball Z: Resurrection 'F'",
		chinesetitle: "龙珠Z：复活的弗利萨",
		type: '2'
	},{
		image: 'dist/images/movies/The_Best_Offer.jpeg',
		title: "The Best Offer",
		chinesetitle: "最佳出价",
		type: '2'
	},{
		image: 'dist/images/movies/Teenage_Mutant_Ninja_Turtles.jpeg',
		title: "Teenage Mutant Ninja Turtles",
		chinesetitle: "忍者神龟：变种时代",
		type: '2'
	},{
		image: 'dist/images/movies/Monsters_University.jpeg',
		title: "Monsters University",
		chinesetitle: "怪兽大学",
		type: '2'
	},{
		image: 'dist/images/movies/Enemy.jpeg',
		title: "Enemy",
		chinesetitle: "宿敌",
		type: '2'
	},{
		image: 'dist/images/movies/Black_Coal_Thin_Ice.jpeg',
		title: "Black Coal, Thin Ice",
		chinesetitle: "白日焰火",
		type: '2'
	},{
		image: 'dist/images/movies/Rigor_Mortis.jpeg',
		title: "Rigor Mortis",
		chinesetitle: "僵尸",
		type: '2'
	},{
		image: 'dist/images/movies/Parasyte_Part_1.jpeg',
		title: "Parasyte: Part 1",
		chinesetitle: "寄生兽",
		type: '2'
	},{
		image: 'dist/images/movies/Two_Moons.webp',
		title: "Two Moons",
		chinesetitle: "两个月亮",
		type: '2'
	},{
		image: 'dist/images/movies/Mama.jpeg',
		title: "Mama",
		chinesetitle: "妈妈",
		type: '2'
	},{
		image: 'dist/images/movies/Monkey_King_Hero_is_Back.jpeg',
		title: "Monkey King: Hero is Back",
		chinesetitle: "大圣归来",
		type: '2'
	},{
		image: 'dist/images/movies/Forever_Young.jpeg',
		title: "Forever Young",
		chinesetitle: "栀子花开",
		type: '2'
	},{
		image: 'dist/images/movies/Monster_Hunt.jpeg',
		title: "Monster Hunt",
		chinesetitle: "捉妖记",
		type: '2'
	},{
		image: 'dist/images/movies/3D_Sex_and_Zen_Extreme_Ecstasy.jpeg',
		title: "3D Sex and Zen: Extreme Ecstasy",
		chinesetitle: "3D肉蒲团之极乐宝鉴",
		type: '2'
	},{
		image: 'dist/images/movies/Jurassic_Park.jpeg',
		title: "Jurassic Park",
		chinesetitle: "侏罗纪公园",
		type: '2'
	},{
		image: 'dist/images/movies/3D_Sex_and_Zen_Extreme_Ecstasy.jpeg',
		title: "The Lost World: Jurassic Park",
		chinesetitle: "侏罗纪公园2：失落的世界",
		type: '2'
	},{
		image: 'dist/images/movies/Jurassic_Park_III.jpeg',
		title: "Jurassic Park III",
		chinesetitle: "侏罗纪公园3",
		type: '2'
	},{
		image: 'dist/images/movies/The_Jacket.jpeg',
		title: "The Jacket",
		chinesetitle: "灵幻夹克",
		type: '2'
	},{
		image: 'dist/images/movies/Existenz.jpeg',
		title: "Existenz",
		chinesetitle: "感官游戏",
		type: '2'
	},{
		image: 'dist/images/movies/Thesis.jpeg',
		title: "Thesis",
		chinesetitle: "死亡论文",
		type: '2'
	},{
		image: 'dist/images/movies/Citadel.webp',
		title: "Citadel",
		chinesetitle: "避难所",
		type: '2'
	},{
		image: 'dist/images/movies/K-PAX.jpeg',
		title: "K-PAX",
		chinesetitle: "K星异客",
		type: '2'
	},{
		image: 'dist/images/movies/The_Number_23.jpeg',
		title: "The Number 23",
		chinesetitle: "灵数23",
		type: '2'
	},{
		image: 'dist/images/movies/Sinister.jpeg',
		title: "Sinister",
		chinesetitle: "险恶",
		type: '2'
	},{
		image: 'dist/images/movies/Coma.jpg',
		title: "Coma",
		chinesetitle: "昏迷",
		type: '2'
	},{
		image: 'dist/images/movies/Julia_s_Eyes.jpeg',
		title: "Julia's Eyes",
		chinesetitle: "茱莉娅的眼睛",
		type: '2'
	},{
		image: 'dist/images/movies/Rose_Red.jpeg',
		title: "Rose Red",
		chinesetitle: "血色玫瑰",
		type: '2'
	},{
		image: 'dist/images/movies/Half_Light.jpeg',
		title: "Half Light",
		chinesetitle: "神秘群岛",
		type: '2'
	},{
		image: 'dist/images/movies/Planet_Terror.jpeg',
		title: "Planet Terror",
		chinesetitle: "恐怖星球",
		type: '2'
	},{
		image: 'dist/images/movies/The_Devotion_of_Suspect_X.jpeg',
		title: "The Devotion of Suspect X",
		chinesetitle: "嫌疑人X的献身",
		type: '2'
	},{
		image: 'dist/images/movies/Arlington_Road.jpeg',
		title: "Arlington Road",
		chinesetitle: "无懈可击",
		type: '2'
	},{
		image: 'dist/images/movies/The_Green_Mile.jpeg',
		title: "The Green Mile",
		chinesetitle: "绿里奇迹",
		type: '2'
	},{
		image: 'dist/images/movies/Premonition.webp',
		title: "Premonition",
		chinesetitle: "预言",
		type: '2'
	},{
		image: 'dist/images/movies/L_A_Confidential.webp',
		title: "L.A. Confidential",
		chinesetitle: "洛城机密",
		type: '2'
	},{
		image: 'dist/images/movies/The_Negotiator.jpeg',
		title: "The Negotiator",
		chinesetitle: "王牌对王牌",
		type: '2'
	},{
		image: 'dist/images/movies/The_Haunting_in_Connecticut.jpeg',
		title: "The Haunting in Connecticut",
		chinesetitle: "太平间闹鬼事件",
		type: '2'
	},{
		image: 'dist/images/movies/Unknown.jpeg',
		title: "Unknown",
		chinesetitle: "不明身份",
		type: '2'
	},{
		image: 'dist/images/movies/Splice.jpeg',
		title: "Splice",
		chinesetitle: "人兽杂交",
		type: '2'
	},{
		image: 'dist/images/movies/Dogville.jpeg',
		title: "Dogville",
		chinesetitle: "狗镇",
		type: '2'
	},{
		image: 'dist/images/movies/Unbreakable.jpeg',
		title: "Unbreakable",
		chinesetitle: "不死劫",
		type: '2'
	},{
		image: 'dist/images/movies/The_Crimson_Rivers.jpeg',
		title: "The Crimson Rivers",
		chinesetitle: "暗流",
		type: '2'
	},{
		image: 'dist/images/movies/Salvage.jpeg',
		title: "Salvage",
		chinesetitle: "毛骨悚然",
		type: '2'
	},{
		image: 'dist/images/movies/The_Village.jpeg',
		title: "The Village",
		chinesetitle: "神秘村",
		type: '2'
	},{
		image: 'dist/images/movies/Dead_Buried.webp',
		title: "Dead & Buried",
		chinesetitle: "盖棺了结",
		type: '2'
	},{
		image: 'dist/images/movies/Jacob_s_Ladder.webp',
		title: "Jacob's Ladder",
		chinesetitle: "异世浮生",
		type: '2'
	},{
		image: 'dist/images/movies/Session_9.webp',
		title: "Session 9",
		chinesetitle: "9号谋杀案",
		type: '2'
	},{
		image: 'dist/images/movies/Case_39.jpeg',
		title: "Case 39",
		chinesetitle: "第39号案件",
		type: '2'
	},{
		image: 'dist/images/movies/Frequency.jpeg',
		title: "Frequency",
		chinesetitle: "9号谋杀案",
		type: '2'
	},{
		image: 'dist/images/movies/Session_9.webp',
		title: "Session 9",
		chinesetitle: "黑洞频率",
		type: '2'
	},{
		image: 'dist/images/movies/Headhunters.jpeg',
		title: "Headhunters",
		chinesetitle: "猎头游戏",
		type: '2'
	},{
		image: 'dist/images/movies/In_the_Mouth_of_Madness.jpeg',
		title: "In the Mouth of Madness",
		chinesetitle: "战栗黑洞",
		type: '2'
	},{
		image: 'dist/images/movies/The_I_Inside.webp',
		title: "The I Inside",
		chinesetitle: "雾气蒙蒙",
		type: '2'
	},{
		image: 'dist/images/movies/Mute_Witness.jpeg',
		title: "Mute Witness",
		chinesetitle: "无声言证",
		type: '2'
	},{
		image: 'dist/images/movies/The_Girl_with_the_Dragon_Tattoo.jpeg',
		title: "The Girl with the Dragon Tattoo",
		chinesetitle: "龙纹身的女孩",
		type: '2'
	},{
		image: 'dist/images/movies/Frayed.webp',
		title: "Frayed",
		chinesetitle: "旧日噩梦",
		type: '2'
	},{
		image: 'dist/images/movies/The_Body.jpeg',
		title: "The Body",
		chinesetitle: "女尸谜案",
		type: '2'
	},{
		image: 'dist/images/movies/The_Awakening.jpeg',
		title: "The Awakening",
		chinesetitle: "觉醒",
		type: '2'
	},{
		image: 'dist/images/movies/The_Hidden_Face.jpeg',
		title: "The Hidden Face",
		chinesetitle: "黑暗面",
		type: '2'
	},{
		image: 'dist/images/movies/Creepshow.jpeg',
		title: "Creepshow",
		chinesetitle: "鬼作秀",
		type: '2'
	},{
		image: 'dist/images/movies/Creepshow_2.jpeg',
		title: "Creepshow 2",
		chinesetitle: "鬼作秀2",
		type: '2'
	},{
		image: 'dist/images/movies/Enter_Nowhere.webp',
		title: "Enter Nowhere",
		chinesetitle: "鬼打墙",
		type: '2'
	},{
		image: 'dist/images/movies/Her.jpeg',
		title: "Her",
		chinesetitle: "她",
		type: '2'
	},{
		image: 'dist/images/movies/The_Caller.webp',
		title: "The Caller",
		chinesetitle: "超时空来电",
		type: '2'
	},{
		image: 'dist/images/movies/Panic_Room.jpeg',
		title: "Panic Room",
		chinesetitle: "战栗空间",
		type: '2'
	},{
		image: 'dist/images/movies/Death_Race.jpeg',
		title: "Death Race",
		chinesetitle: "死亡飞车",
		type: '2'
	},{
		image: 'dist/images/movies/Death_Race_2.jpeg',
		title: "Death Race 2",
		chinesetitle: "死亡飞车2",
		type: '2'
	},{
		image: 'dist/images/movies/Death_Race_3_Inferno.jpeg',
		title: "Death Race 3: Inferno",
		chinesetitle: "死亡飞车3：地狱烈焰",
		type: '2'
	},{
		image: 'dist/images/movies/Phobia_2.jpeg',
		title: "Phobia 2",
		chinesetitle: "鬼乱5",
		type: '2'
	},{
		image: 'dist/images/movies/Sleep_Tight.jpeg',
		title: "Sleep Tight",
		chinesetitle: "当你熟睡",
		type: '2'
	},{
		image: 'dist/images/movies/The_Descent.jpeg',
		title: "The Descent",
		chinesetitle: "黑暗侵袭",
		type: '2'
	},{
		image: 'dist/images/movies/The_Descent_Part_2.webp',
		title: "The Descent: Part 2",
		chinesetitle: "黑暗侵袭2",
		type: '2'
	},{
		image: 'dist/images/movies/Looper.jpeg',
		title: "Looper",
		chinesetitle: "环形使者",
		type: '2'
	},{
		image: 'dist/images/movies/The_Curious_Case_of_Benjamin_Button.webp',
		title: "The Curious Case of Benjamin Button",
		chinesetitle: "本杰明·巴顿奇事",
		type: '2'
	},{
		image: 'dist/images/movies/Gone_Girl.jpeg',
		title: "Gone Girl",
		chinesetitle: "消失的爱人",
		type: '2'
	},{
		image: 'dist/images/movies/District_9.jpeg',
		title: "District 9",
		chinesetitle: "第九区",
		type: '2'
	},{
		image: 'dist/images/movies/The_Life_of_David_Gale.jpeg',
		title: "The Life of David Gale",
		chinesetitle: "大卫·戈尔的一生",
		type: '2'
	},{
		image: 'dist/images/movies/Ender_s_Game.jpeg',
		title: "Ender's Game",
		chinesetitle: "安德的游戏",
		type: '2'
	},{
		image: 'dist/images/movies/Coherence.jpeg',
		title: "Coherence",
		chinesetitle: "彗星来的那一夜",
		type: '2'
	},{
		image: 'dist/images/movies/Oblivion.jpeg',
		title: "Oblivion",
		chinesetitle: "遗落战境",
		type: '2'
	},{
		image: 'dist/images/movies/Insidious.jpeg',
		title: "Insidious",
		chinesetitle: "潜伏",
		type: '2'
	},{
		image: 'dist/images/movies/Insidious_Chapter_2.jpeg',
		title: "Insidious: Chapter 2",
		chinesetitle: "潜伏2",
		type: '2'
	},{
		image: 'dist/images/movies/Total_Recall.jpeg',
		title: "Total Recall",
		chinesetitle: "全面回忆",
		type: '2'
	},{
		image: 'dist/images/movies/Minority_Report.webp',
		title: "Minority Report",
		chinesetitle: "少数派报告",
		type: '2'
	},{
		image: 'dist/images/movies/Hansel_and_Gretel.jpeg',
		title: "Hansel and Gretel",
		chinesetitle: "韩塞尔与葛雷特",
		type: '2'
	},{
		image: 'dist/images/movies/Switch.jpeg',
		title: "Switch",
		chinesetitle: "天机·富春山居图",
		type: '2'
	},{
		image: 'dist/images/movies/The_Founding_of_a_Republic.jpeg',
		title: "The Founding of a Republic",
		chinesetitle: "建国大业",
		type: '2'
	},{
		image: 'dist/images/movies/Bunshinsaba.jpeg',
		title: "Bunshinsaba",
		chinesetitle: "笔仙",
		type: '2'
	},{
		image: 'dist/images/movies/Coming_Soon.jpeg',
		title: "Coming Soon",
		chinesetitle: "厉鬼将映",
		type: '2'
	},{
		image: 'dist/images/movies/Ju_on_The_Grudge.jpeg',
		title: "Ju-on: The Grudge",
		chinesetitle: "咒怨",
		type: '2'
	},{
		image: 'dist/images/movies/Ju_on_The_Grudge_2.jpeg',
		title: "Ju-on: The Grudge 2",
		chinesetitle: "咒怨2",
		type: '2'
	},{
		image: 'dist/images/movies/The_Grudge.jpeg',
		title: "The Grudge",
		chinesetitle: "咒怨(美版)",
		type: '2'
	},{
		image: 'dist/images/movies/The_Doll_Master.webp',
		title: "The Doll Master",
		chinesetitle: "人形师",
		type: '2'
	},{
		image: 'dist/images/movies/Death_Bell.jpeg',
		title: "Death Bell",
		chinesetitle: "考死：血之期中考试",
		type: '2'
	},{
		image: 'dist/images/movies/Death_Bell_2_Bloody_Camp.jpeg',
		title: "Death Bell 2: Bloody Camp",
		chinesetitle: "考死2",
		type: '2'
	},{
		image: 'dist/images/movies/Sorority_Row.jpeg',
		title: "Sorority Row",
		chinesetitle: "姐妹联谊会惊魂",
		type: '2'
	},{
		image: 'dist/images/movies/Pan_s_Labyrinth.jpeg',
		title: "Pan's Labyrinth",
		chinesetitle: "潘神的迷宫",
		type: '2'
	},{
		image: 'dist/images/movies/Dead_End.webp',
		title: "Dead End",
		chinesetitle: "死路",
		type: '2'
	},{
		image: 'dist/images/movies/The_Hills_Have_Eyes.jpeg',
		title: "The Hills Have Eyes",
		chinesetitle: "隔山有眼",
		type: '2'
	},{
		image: 'dist/images/movies/Ju_on_White_Ghost.jpeg',
		title: "The Human Centipede (First Sequence)",
		chinesetitle: "咒怨：白老妇",
		type: '2'
	},{
		image: 'dist/images/movies/The_Double.webp',
		title: "The Double",
		chinesetitle: "双重人格",
		type: '2'
	},{
		image: 'dist/images/movies/The_Human_Centipede_First_Sequence.jpeg',
		title: "The Human Centipede (First Sequence)",
		chinesetitle: "人体蜈蚣",
		type: '2'
	},{
		image: 'dist/images/movies/Saw.jpeg',
		title: "Saw",
		chinesetitle: "电锯惊魂",
		type: '2'
	},{
		image: 'dist/images/movies/Saw_II.jpeg',
		title: "Saw II",
		chinesetitle: "电锯惊魂2",
		type: '2'
	},{
		image: 'dist/images/movies/Saw_III.jpeg',
		title: "Saw III",
		chinesetitle: "电锯惊魂3",
		type: '2'
	},{
		image: 'dist/images/movies/Saw_IV.jpeg',
		title: "Saw IV",
		chinesetitle: "电锯惊魂4",
		type: '2'
	},{
		image: 'dist/images/movies/Saw_V.jpeg',
		title: "Saw V",
		chinesetitle: "电锯惊魂5",
		type: '2'
	},{
		image: 'dist/images/movies/Saw_VI.jpeg',
		title: "Saw VI",
		chinesetitle: "电锯惊魂6",
		type: '2'
	},{
		image: 'dist/images/movies/Saw_VII.jpeg',
		title: "Saw VII",
		chinesetitle: "电锯惊魂7",
		type: '2'
	},{
		image: 'dist/images/movies/Braindead.webp',
		title: "Braindead",
		chinesetitle: "群尸玩过界",
		type: '2'
	},{
		image: 'dist/images/movies/Following.jpeg',
		title: "Following",
		chinesetitle: "追随",
		type: '2'
	},{
		image: 'dist/images/movies/Nausicaä_of_the_Valley_of_the_Wind.jpeg',
		title: "Nausicaä of the Valley of the Wind",
		chinesetitle: "风之谷",
		type: '2'
	},{
		image: 'dist/images/movies/4bia.jpeg',
		title: "4bia",
		chinesetitle: "死神的十字路口",
		type: '2'
	},{
		image: 'dist/images/movies/Face_Off.jpeg',
		title: "Face/Off",
		chinesetitle: "变脸",
		type: '2'
	},{
		image: 'dist/images/movies/A_Tale_of_Two_Sisters.jpeg',
		title: "A Tale of Two Sisters",
		chinesetitle: "鬼魅",
		type: '2'
	},{
		image: 'dist/images/movies/The_Amazing_Spider_Man.jpeg',
		title: "The Amazing Spider-Man",
		chinesetitle: "超凡蜘蛛侠",
		type: '2'
	},{
		image: 'dist/images/movies/The_Amazing_Spider_Man_2.jpeg',
		title: "The Amazing Spider-Man 2",
		chinesetitle: "超凡蜘蛛侠2",
		type: '2'
	},{
		image: 'dist/images/movies/Big_Hero_6.jpeg',
		title: "Big Hero 6",
		chinesetitle: "超能陆战队",
		type: '2'
	},{
		image: 'dist/images/movies/The_Terror_Live.jpeg',
		title: "The Terror Live",
		chinesetitle: "恐怖直播",
		type: '2'
	},{
		image: 'dist/images/movies/The_Fast_and_the_Furious.jpeg',
		title: "The Fast and the Furious",
		chinesetitle: "速度与激情",
		type: '2'
	},{
		image: 'dist/images/movies/2_Fast_2_Furious.jpeg',
		title: "2 Fast 2 Furious",
		chinesetitle: "速度与激情2",
		type: '2'
	},{
		image: 'dist/images/movies/The_Fast_and_the_Furious_Tokyo_Drift.jpeg',
		title: "The Fast and the Furious: Tokyo Drift",
		chinesetitle: "速度与激情3",
		type: '2'
	},{
		image: 'dist/images/movies/Fast_Furious.jpeg',
		title: "Fast & Furious",
		chinesetitle: "速度与激情4",
		type: '2'
	},{
		image: 'dist/images/movies/Fast_Five.jpeg',
		title: "Fast Five",
		chinesetitle: "速度与激情5",
		type: '2'
	},{
		image: 'dist/images/movies/Fast_Furious_6.jpeg',
		title: "Fast & Furious 6",
		chinesetitle: "速度与激情6",
		type: '2'
	},{
		image: 'dist/images/movies/Furious_7.jpeg',
		title: "Furious 7",
		chinesetitle: "速度与激情7",
		type: '2'
	},{
		image: 'dist/images/movies/Guardians_of_the_Galaxy.jpeg',
		title: "Guardians of the Galaxy",
		chinesetitle: "银河护卫队",
		type: '2'
	},{
		image: 'dist/images/movies/X_Men_First_Class.jpeg',
		title: "X-Men: First Class",
		chinesetitle: "X战警：第一战",
		type: '2'
	},{
		image: 'dist/images/movies/X_Men_Origins_Wolverine.jpeg',
		title: "X-Men Origins: Wolverine",
		chinesetitle: "金刚狼",
		type: '2'
	},{
		image: 'dist/images/movies/The_Wolverine.jpeg',
		title: "The Wolverine",
		chinesetitle: "金刚狼2",
		type: '2'
	},{
		image: 'dist/images/movies/X_Men_Days_of_Future_Past.jpeg',
		title: "X-Men: Days of Future Past",
		chinesetitle: "X战警：逆转未来",
		type: '2'
	},{
		image: 'dist/images/movies/X-Men.jpeg',
		title: "X-Men",
		chinesetitle: "x战警",
		type: '2'
	},{
		image: 'dist/images/movies/X2.jpeg',
		title: "X2",
		chinesetitle: "X戰警2",
		type: '2'
	},{
		image: 'dist/images/movies/X_Men_The_Last_Stand.jpeg',
		title: "X-Men: The Last Stand",
		chinesetitle: "X战警3：背水一战",
		type: '2'
	},{
		image: 'dist/images/movies/The_Snow_White_Murder_Case.jpeg',
		title: "The Snow White Murder Case",
		chinesetitle: "白雪公主杀人事件",
		type: '2'
	},{
		image: 'dist/images/movies/Gone_with_the_Bullets.jpeg',
		title: "Gone with the Bullets",
		chinesetitle: "一步之遥",
		type: '2'
	},{
		image: 'dist/images/movies/Paprika.jpeg',
		title: "Paprika",
		chinesetitle: "红辣椒",
		type: '2'
	},{
		image: 'dist/images/movies/The_Lives_of_Others.jpeg',
		title: "The Lives of Others",
		chinesetitle: "窃听风暴",
		type: '2'
	},{
		image: 'dist/images/movies/Kwaidan.jpeg',
		title: "Kwaidan",
		chinesetitle: "怪谈",
		type: '2'
	},{
		image: 'dist/images/movies/Hostel.jpg',
		title: "Hostel",
		chinesetitle: "人皮客栈",
		type: '2'
	},{
		image: 'dist/images/movies/Hostel_Part_II.jpeg',
		title: "Hostel: Part II",
		chinesetitle: "人皮客栈2",
		type: '2'
	},{
		image: 'dist/images/movies/Hostel_Part_III.jpg',
		title: "Hostel: Part III",
		chinesetitle: "人皮客栈3",
		type: '2'
	},{
		image: 'dist/images/movies/Wicker_Park.jpeg',
		title: "Wicker Park",
		chinesetitle: "谜情公寓",
		type: '2'
	},{
		image: 'dist/images/movies/You_Shoot_I_Shoot.jpeg',
		title: "You Shoot, I Shoot",
		chinesetitle: "买凶拍人",
		type: '2'
	},{
		image: 'dist/images/movies/Invasion_of_the_Body_Snatchers.webp',
		title: "Invasion of the Body Snatchers",
		chinesetitle: "人体异形",
		type: '2'
	},{
		image: 'dist/images/movies/Loft.jpeg',
		title: "Loft",
		chinesetitle: "阁楼",
		type: '2'
	},{
		image: 'dist/images/movies/Steamboy.jpeg',
		title: "Steamboy",
		chinesetitle: "蒸汽男孩",
		type: '2'
	},{
		image: 'dist/images/movies/Moon.jpeg',
		title: "Moon",
		chinesetitle: "月球",
		type: '2'
	},{
		image: 'dist/images/movies/Frequently_Asked_Questions_About_Time_Travel.jpeg',
		title: "Frequently Asked Questions About Time Travel",
		chinesetitle: "有关时间旅行的热门问题",
		type: '2'
	},{
		image: 'dist/images/movies/Ghost_in_the_Shell.jpeg',
		title: "Ghost in the Shell",
		chinesetitle: "攻壳机动队",
		type: '2'
	},{
		image: 'dist/images/movies/Inglourious_Basterds.jpeg',
		title: "Inglourious Basterds",
		chinesetitle: "无耻混蛋",
		type: '2'
	},{
		image: 'dist/images/movies/28_Weeks_Later.jpeg',
		title: "28 Weeks Later",
		chinesetitle: "惊变28周",
		type: '2'
	},{
		image: 'dist/images/movies/28_Days_Later.jpeg',
		title: "28 Days Later",
		chinesetitle: "惊变28天",
		type: '2'
	},{
		image: 'dist/images/movies/Unthinkable.jpeg',
		title: "Unthinkable",
		chinesetitle: "战略特勤组",
		type: '2'
	},{
		image: 'dist/images/movies/Fermat_s_Room.jpeg',
		title: "Fermat's Room",
		chinesetitle: "极限空间",
		type: '2'
	},{
		image: 'dist/images/movies/Changeling.jpeg',
		title: "Changeling",
		chinesetitle: "换子疑云",
		type: '2'
	},{
		image: 'dist/images/movies/Inside_Man.webp',
		title: "Inside Man",
		chinesetitle: "局内人",
		type: '2'
	},{
		image: 'dist/images/movies/The_Secret_in_Their_Eyes.jpeg',
		title: "The Secret in Their Eyes",
		chinesetitle: "谜一样的双眼",
		type: '2'
	},{
		image: 'dist/images/movies/There_Will_Be_Blood.jpeg',
		title: "There Will Be Blood",
		chinesetitle: "血色将至",
		type: '2'
	},{
		image: 'dist/images/movies/No_Country_for_Old_Men.jpeg',
		title: "No Country for Old Men",
		chinesetitle: "老无所依",
		type: '2'
	},{
		image: 'dist/images/movies/The_Hobbit_An_Unexpected_Journey.jpeg',
		title: "The Hobbit: An Unexpected Journey",
		chinesetitle: "霍比特人1：意外之旅",
		type: '2'
	},{
		image: 'dist/images/movies/The_Hobbit_The_Desolation_of_Smaug.jpeg',
		title: "The Hobbit: The Desolation of Smaug",
		chinesetitle: "霍比特人2：史矛革之战",
		type: '2'
	},{
		image: 'dist/images/movies/The_Hobbit_The_Battle_of_the_Five_Armies.jpeg',
		title: "The Hobbit: The Battle of the Five Armies",
		chinesetitle: "霍比特人3：五军之战",
		type: '2'
	},{
		image: 'dist/images/movies/The_Chaser.jpeg',
		title: "The Chaser",
		chinesetitle: "追击者",
		type: '2'
	},{
		image: 'dist/images/movies/In_Bruges.jpeg',
		title: "In Bruges",
		chinesetitle: "杀手没有假期",
		type: '2'
	},{
		image: 'dist/images/movies/Frost_Nixon.jpeg',
		title: "Frost/Nixon",
		chinesetitle: "对话尼克松",
		type: '2'
	},{
		image: 'dist/images/movies/Timecrimes.jpeg',
		title: "Timecrimes",
		chinesetitle: "时空罪恶",
		type: '2'
	},{
		image: 'dist/images/movies/Time_Traveller_The_Girl_Who_Leapt_Through_Time.jpeg',
		title: "Time Traveller: The Girl Who Leapt Through Time",
		chinesetitle: "穿越时空的少女",
		type: '2'
	},{
		image: 'dist/images/movies/Interstellar.jpeg',
		title: "Interstellar",
		chinesetitle: "星际穿越",
		type: '2'
	},{
		image: 'dist/images/movies/The_Man_from_Earth.jpeg',
		title: "The Man from Earth",
		chinesetitle: "这个男人来自地球",
		type: '2'
	},{
		image: 'dist/images/movies/Fracture.webp',
		title: "Fracture",
		chinesetitle: "破绽",
		type: '2'
	},{
		image: 'dist/images/movies/Babel.jpeg',
		title: "Babel",
		chinesetitle: "通天塔",
		type: '2'
	},{
		image: 'dist/images/movies/PTU.jpeg',
		title: "PTU",
		chinesetitle: "机动部队",
		type: '2'
	},{
		image: 'dist/images/movies/Amélie.jpeg',
		title: "Amélie",
		chinesetitle: "天使爱美丽",
		type: '2'
	},{
		image: 'dist/images/movies/E_T_the_Extra-Terrestrial.jpeg',
		title: "E.T. the Extra-Terrestrial",
		chinesetitle: "E.T.外星人",
		type: '2'
	},{
		image: 'dist/images/movies/Alien.webp',
		title: "Alien",
		chinesetitle: "异形",
		type: '2'
	},{
		image: 'dist/images/movies/Aliens.jpeg',
		title: "Aliens",
		chinesetitle: "异形2",
		type: '2'
	},{
		image: 'dist/images/movies/Alien_3.jpeg',
		title: "Alien 3",
		chinesetitle: "异形3",
		type: '2'
	},{
		image: 'dist/images/movies/Alien_Resurrection.jpeg',
		title: "Alien: Resurrection",
		chinesetitle: "异形4",
		type: '2'
	},{
		image: 'dist/images/movies/Alien_vs_Predator.webp',
		title: "AVP: Alien vs. Predator",
		chinesetitle: "异形大战铁血战士",
		type: '2'
	},{
		image: 'dist/images/movies/AVPR_Aliens_vs_Predator_Requiem.jpeg',
		title: "AVPR: Aliens vs Predator - Requiem",
		chinesetitle: "异形大战铁血战士2",
		type: '2'
	},{
		image: 'dist/images/movies/Roman_Holiday.jpeg',
		title: "Roman Holiday",
		chinesetitle: "罗马假日",
		type: '2'
	},{
		image: 'dist/images/movies/Sexmission.jpeg',
		title: "Sexmission",
		chinesetitle: "铁幕性史",
		type: '2'
	},{
		image: 'dist/images/movies/American_Pie.jpeg',
		title: "American Pie",
		chinesetitle: "美国派",
		type: '2'
	},{
		image: 'dist/images/movies/American_Pie_2.jpeg',
		title: "American Pie 2",
		chinesetitle: "美国派2",
		type: '2'
	},{
		image: 'dist/images/movies/American_Wedding.jpeg',
		title: "American Wedding",
		chinesetitle: "美国派3：美国婚礼",
		type: '2'
	},{
		image: 'dist/images/movies/Borat_Cultural_Learnings_of_America_for_Make_Benefit_Glorious_Nation_of_Kazakhstan.webp',
		title: "Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan",
		chinesetitle: "波拉特",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_The_Path_to_Power.jpeg',
		title: "Dragon Ball: The Path to Power",
		chinesetitle: "龙珠剧场版：迈向最强之道",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Z_The_History_of_Trunks.webp',
		title: "Dragon Ball Z: The History of Trunks",
		chinesetitle: "龙珠Z特别篇：绝望的反抗!! 仅存的超战士悟饭和特兰克斯",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Z_Super_Saiyan_Son_Goku.jpg',
		title: "Dragon Ball Z: Super Saiyan Son Goku",
		chinesetitle: "龙珠Z剧场版4：超级赛亚人孙悟空",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Z_The_Return_of_Cooler.jpeg',
		title: "Dragon Ball Z: The Return of Cooler",
		chinesetitle: "激突!!100亿能量战士们",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Z_Broly_Second_Coming.jpeg',
		title: "Dragon Ball Z: Broly – Second Coming",
		chinesetitle: "龙珠Z剧场版10：两人面临危机! 超战士难以成眠",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Z_The_Tree_of_Might.jpeg',
		title: "Dragon Ball Z: The Tree of Might",
		chinesetitle: "龙珠Z剧场版3：地球超级大决战",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Z_the_Movie_The_World_s_Strongest.jpeg',
		title: "Dragon Ball Z the Movie: The World's Strongest",
		chinesetitle: "龙珠Z剧场版2：世界最強的高手",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Z_Fusion_Reborn.jpeg',
		title: "Dragon Ball Z: Fusion Reborn",
		chinesetitle: "龙珠Z剧场版12：复活的融合!! 悟空和贝吉塔",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Z_Bio_Broly.jpeg',
		title: "Dragon Ball Z: Bio-Brolys",
		chinesetitle: "龙珠Z剧场版11：击倒超战士!! 胜利是属于我的",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Z_Cooler_s_Revenge.jpeg',
		title: "Dragon Ball Z: Cooler's Revenge",
		chinesetitle: "龙珠Z剧场版5：最强对最强",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Mystical_Adventure.jpeg',
		title: "Dragon Ball: Mystical Adventure",
		chinesetitle: "龙珠剧场版：摩诃不可思议大冒险",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Z_Bojack_Unbound.webp',
		title: "Dragon Ball Z: Bojack Unbound",
		chinesetitle: "龙珠Z剧场版9：银河面临危机!! 身手不凡的高手!!",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Z_Super_Android_13!.webp',
		title: "Dragon Ball Z: Super Android 13!",
		chinesetitle: "龙珠Z剧场版7：极限之战!! 三大超级赛亚人",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Z_Broly_The_Legendary_Super_Saiyan.webp',
		title: "Dragon Ball Z: Broly – The Legendary Super Saiyan",
		chinesetitle: "龙珠Z剧场版8：燃烧吧!!热战·烈战·超激战",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Yo!_Son_Goku_and_His_Friends_Return!!.webp',
		title: "Dragon Ball: Yo! Son Goku and His Friends Return!!",
		chinesetitle: "归来！悟空和他的朋友们",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Z_Bardock_The_Father_of_Goku.jpg',
		title: "Dragon Ball Z: Bardock – The Father of Goku",
		chinesetitle: "龙珠Z特别篇 一个人的最终决战 挑战弗利萨的Z战士 孙悟空之父",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Z_Wrath_of_the_Dragon.jpeg',
		title: "Dragon Ball Z: Wrath of the Dragon",
		chinesetitle: "龙珠Z剧场版13：龙拳爆发!! 悟空舍我其谁",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_GT_A_Hero_s_Legacy.jpeg',
		title: "Dragon Ball GT: A Hero's Legacy",
		chinesetitle: "龙珠GT特别篇：悟空外传! 勇气的证明四星珠!",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Z_Dead_Zone.jpeg',
		title: "Dragon Ball Z: Dead Zone",
		chinesetitle: "龙珠Z剧场版4：把悟饭还给来！！卡里克二世",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Plan_to_Eradicate_the_Super_Saiyans.jpeg',
		title: "Dragon Ball: Plan to Eradicate the Super Saiyans",
		chinesetitle: "龙珠：超级赛亚人灭绝计划",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Sleeping_Princess_in_Devil_s_Castle.webp',
		title: "Dragon Ball: Sleeping Princess in Devil's Castle",
		chinesetitle: "龙珠剧场版：魔神城内的睡美人",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Curse_of_the_Blood_Rubies.jpeg',
		title: "Dragon Ball: Curse of the Blood Rubies",
		chinesetitle: "龙珠剧场版：神龙传说",
		type: '2'
	},{
		image: 'dist/images/movies/The_Interview.jpeg',
		title: "The Interview",
		chinesetitle: "采访",
		type: '2'
	},{
		image: 'dist/images/movies/Predestination.jpeg',
		title: "Predestination",
		chinesetitle: "前目的地",
		type: '2'
	},{
		image: 'dist/images/movies/God_of_War.webp',
		title: "God of War",
		chinesetitle: "关公大战外星人",
		type: '2'
	},{
		image: 'dist/images/movies/The_Northerners.jpeg',
		title: "The Northerners",
		chinesetitle: "北方小镇奇谈",
		type: '2'
	},{
		image: 'dist/images/movies/Halloween.webp',
		title: "Halloween",
		chinesetitle: "月光光心慌慌",
		type: '2'
	},{
		image: 'dist/images/movies/Les_Misérables.jpeg',
		title: "Les Misérables",
		chinesetitle: "悲惨世界",
		type: '2'
	},{
		image: 'dist/images/movies/The_Talented_Mr_Ripley.jpeg',
		title: "The Talented Mr. Ripley",
		chinesetitle: "天才瑞普利",
		type: '2'
	},{
		image: 'dist/images/movies/Runaway_Jury.jpeg',
		title: "Runaway Jury",
		chinesetitle: "失控的陪审团",
		type: '2'
	},{
		image: 'dist/images/movies/Open_Your_Eyes.jpeg',
		title: "Open Your Eyes",
		chinesetitle: "睁开你的双眼",
		type: '2'
	},{
		image: 'dist/images/movies/Out_of_Sight.jpeg',
		title: "Out of Sight",
		chinesetitle: "战略高手",
		type: '2'
	},{
		image: 'dist/images/movies/After_the_Sunset.jpeg',
		title: "After the Sunset",
		chinesetitle: "日落之后",
		type: '2'
	},{
		image: 'dist/images/movies/A_Man_Escaped.jpeg',
		title: "A Man Escaped",
		chinesetitle: "死囚越狱",
		type: '2'
	},{
		image: 'dist/images/movies/Psycho.jpeg',
		title: "Psycho",
		chinesetitle: "惊魂记",
		type: '2'
	},{
		image: 'dist/images/movies/Argo.jpeg',
		title: "Argo",
		chinesetitle: "逃离德黑兰",
		type: '2'
	},{
		image: 'dist/images/movies/Lock_Stock_and_Two_Smoking_Barrels.jpeg',
		title: "Lock, Stock and Two Smoking Barrels",
		chinesetitle: "两杆大烟枪",
		type: '2'
	},{
		image: 'dist/images/movies/Anthony_Zimmer.jpeg',
		title: "Anthony Zimmer",
		chinesetitle: "逃之夭夭",
		type: '2'
	},{
		image: 'dist/images/movies/The_End_of_Evangelion.jpeg',
		title: "The End of Evangelion",
		chinesetitle: "新世纪福音战士剧场版：Air/真心为你",
		type: '2'
	},{
		image: 'dist/images/movies/Neon_Genesis_Evangelion_Death_Rebirth.jpeg',
		title: "Neon Genesis Evangelion: Death & Rebirth",
		chinesetitle: "新世纪福音战士剧场版：死与新生",
		type: '2'
	},{
		image: 'dist/images/movies/Evangelion_1_0_You_Are_Not_Alone.jpeg',
		title: "Evangelion: 1.0 You Are (Not) Alone",
		chinesetitle: "福音战士新剧场版：序",
		type: '2'
	},{
		image: 'dist/images/movies/Evangelion_2_0_You_Can_Not_Advance.jpeg',
		title: "Evangelion: 2.0 You Can (Not) Advance",
		chinesetitle: "福音战士新剧场版：破",
		type: '2'
	},{
		image: 'dist/images/movies/Evangelion_3_0_You_Can_Not_Redo.jpeg',
		title: "Evangelion: 3.0 You Can (Not) Redo",
		chinesetitle: "福音战士新剧场版：Q",
		type: '2'
	},{
		image: 'dist/images/movies/The_Great_Hypnotist.jpeg',
		title: "The Great Hypnotist",
		chinesetitle: "催眠大师",
		type: '2'
	},{
		image: 'dist/images/movies/The_Godfather.jpeg',
		title: "The Godfather",
		chinesetitle: "教父",
		type: '2'
	},{
		image: 'dist/images/movies/The_Godfather_Part_II.jpeg',
		title: "The Godfather Part II",
		chinesetitle: "教父2",
		type: '2'
	},{
		image: 'dist/images/movies/The_Godfather_Part_III.jpeg',
		title: "The Godfather Part III",
		chinesetitle: "教父3",
		type: '2'
	},{
		image: 'dist/images/movies/Secret.webp',
		title: "Secret",
		chinesetitle: "不能说的秘密",
		type: '2'
	},{
		image: 'dist/images/movies/Dr_Mabuse_the_Gambler.jpeg',
		title: "Dr. Mabuse the Gambler",
		chinesetitle: "玩家马布斯博士",
		type: '2'
	},{
		image: 'dist/images/movies/The_Unknown.jpeg',
		title: "The Unknown",
		chinesetitle: "未知者",
		type: '2'
	},{
		image: 'dist/images/movies/Maléfique.jpeg',
		title: "Maléfique",
		chinesetitle: "圣歌",
		type: '2'
	},{
		image: 'dist/images/movies/Eden_Lake.jpeg',
		title: "Eden Lake",
		chinesetitle: "伊甸湖",
		type: '2'
	},{
		image: 'dist/images/movies/The_Uninvited2.jpeg',
		title: "The Uninvited",
		chinesetitle: "不请自来",
		type: '2'
	},{
		image: 'dist/images/movies/The_Cabin_in_the_Woods.jpeg',
		title: "The Cabin in the Woods",
		chinesetitle: "林中小屋",
		type: '2'
	},{
		image: 'dist/images/movies/Scent_of_a_Woman.jpeg',
		title: "Scent of a Woman",
		chinesetitle: "闻香识女人",
		type: '2'
	},{
		image: 'dist/images/movies/Star_Wars_Episode_I_The_Phantom_Menace.jpeg',
		title: "Star Wars: Episode I – The Phantom Menace",
		chinesetitle: "星球大战前传1：幽灵的威胁",
		type: '2'
	},{
		image: 'dist/images/movies/Star_Wars_Episode_II_Attack_of_the_Clones.jpeg',
		title: "Star Wars: Episode II – Attack of the Clones",
		chinesetitle: "星球大战前传2：克隆人的进攻",
		type: '2'
	},{
		image: 'dist/images/movies/Star_Wars_Episode_III_Revenge_of_the_Sith.jpeg',
		title: "Star Wars: Episode III – Revenge of the Sith",
		chinesetitle: "星球大战前传3：西斯的复仇",
		type: '2'
	},{
		image: 'dist/images/movies/Star_Wars_Episode_I_The_Phantom_Menace.jpeg',
		title: "Star Wars",
		chinesetitle: "星球大战",
		type: '2'
	},{
		image: 'dist/images/movies/The_Empire_Strikes_Back.jpeg',
		title: "The Empire Strikes Back",
		chinesetitle: "星球大战2：帝国反击战",
		type: '2'
	},{
		image: 'dist/images/movies/Return_of_the_Jedi.jpeg',
		title: "Return of the Jedi",
		chinesetitle: "星球大战3：绝地归来",
		type: '2'
	},{
		image: 'dist/images/movies/Witness_for_the_Prosecution.jpeg',
		title: "Witness for the Prosecution",
		chinesetitle: "控方证人",
		type: '2'
	},{
		image: 'dist/images/movies/The_Wolf_of_Wall_Street.jpeg',
		title: "The Wolf of Wall Street",
		chinesetitle: "华尔街之狼",
		type: '2'
	},{
		image: 'dist/images/movies/Let_the_Bullets_Fly.jpeg',
		title: "Let_the_Bullets_Fly.jpeg",
		chinesetitle: "让子弹飞",
		type: '2'
	},{
		image: 'dist/images/movies/Devils_on_the_Doorstep.jpeg',
		title: "Devils on the Doorstep",
		chinesetitle: "鬼子来了",
		type: '2'
	},{
		image: 'dist/images/movies/12_Angry_Men.jpeg',
		title: "12 Angry Men",
		chinesetitle: "十二怒汉",
		type: '2'
	},{
		image: 'dist/images/movies/Men_in_Black_3.jpeg',
		title: "Men in Black 3",
		chinesetitle: "黑衣人3",
		type: '2'
	},{
		image: 'dist/images/movies/The_Grandmaster.jpeg',
		title: "The Grandmaster",
		chinesetitle: "一代宗师",
		type: '2'
	},{
		image: 'dist/images/movies/Gravity.jpeg',
		title: "Gravity",
		chinesetitle: "地心引力",
		type: '2'
	},{
		image: 'dist/images/movies/REC.jpeg',
		title: "REC",
		chinesetitle: "死亡录像",
		type: '2'
	},{
		image: 'dist/images/movies/REC_2.jpeg',
		title: "REC 2",
		chinesetitle: "死亡录像2",
		type: '2'
	},{
		image: 'dist/images/movies/V_for_Vendetta.jpeg',
		title: "V for Vendetta",
		chinesetitle: "v字仇杀队",
		type: '2'
	},{
		image: 'dist/images/movies/Django_Unchained.jpeg',
		title: "Django Unchained",
		chinesetitle: "被解救的姜戈",
		type: '2'
	},{
		image: 'dist/images/movies/Dawn_of_the_Dead.jpeg',
		title: "Dawn of the Dead",
		chinesetitle: "活死人黎明",
		type: '2'
	},{
		image: 'dist/images/movies/12_Years_a_Slave.jpeg',
		title: "12 Years a Slave",
		chinesetitle: "为奴十二年",
		type: '2'
	},{
		image: 'dist/images/movies/Frozen.jpeg',
		title: "Frozen",
		chinesetitle: "冰雪奇缘",
		type: '2'
	},{
		image: 'dist/images/movies/Catch_Me_If_You_Can.jpeg',
		title: "Catch Me If You Can",
		chinesetitle: "逍遥法外",
		type: '2'
	},{
		image: 'dist/images/movies/Cinema_Paradiso.webp',
		title: "Cinema Paradiso",
		chinesetitle: "天堂电影院",
		type: '2'
	},{
		image: 'dist/images/movies/Devil.jpeg',
		title: "Devil",
		chinesetitle: "电梯里的恶魔",
		type: '2'
	},{
		image: 'dist/images/movies/Buried.jpeg',
		title: "Buried",
		chinesetitle: "活埋",
		type: '2'
	},{
		image: 'dist/images/movies/The_Incite_Mill.jpeg',
		title: "The Incite Mill",
		chinesetitle: "算计：七天的死亡游戏",
		type: '2'
	},{
		image: 'dist/images/movies/Angels_Demons.jpeg',
		title: "Angels & Demons",
		chinesetitle: "天使与魔鬼",
		type: '2'
	},{
		image: 'dist/images/movies/The_Experiment.jpeg',
		title: "The Experiment",
		chinesetitle: "死亡实验",
		type: '2'
	},{
		image: 'dist/images/movies/Castle_in_the_Sky.jpeg',
		title: "Castle in the Sky",
		chinesetitle: "天空之城",
		type: '2'
	},{
		image: 'dist/images/movies/The_Monkey_King.jpeg',
		title: "The Monkey King",
		chinesetitle: "西游记之大闹天宫",
		type: '2'
	},{
		image: 'dist/images/movies/From_Vegas_to_Macau.jpeg',
		title: "From Vegas to Macau",
		chinesetitle: "澳门风云",
		type: '2'
	},{
		image: 'dist/images/movies/From_Vegas_to_Macau_II.jpeg',
		title: "From Vegas to Macau II",
		chinesetitle: "澳门风云2",
		type: '2'
	},{
		image: 'dist/images/movies/The_Next_Three_Days.jpeg',
		title: "The Next Three Days",
		chinesetitle: "危情三日",
		type: '2'
	},{
		image: 'dist/images/movies/Vanilla_Sky.webp',
		title: "Vanilla Sky",
		chinesetitle: "香草的天空",
		type: '2'
	},{
		image: 'dist/images/movies/Seven_Pounds.jpeg',
		title: "Seven Pounds",
		chinesetitle: "七磅",
		type: '2'
	},{
		image: 'dist/images/movies/Memories_of_Murder.jpeg',
		title: "Memories of Murder",
		chinesetitle: "杀人回忆",
		type: '2'
	},{
		image: 'dist/images/movies/Perfect_Stranger.webp',
		title: "Perfect Stranger",
		chinesetitle: "完美陌生人",
		type: '2'
	},{
		image: 'dist/images/movies/Mind_Game.jpeg',
		title: "Mind Game",
		chinesetitle: "心理游戏",
		type: '2'
	},{
		image: 'dist/images/movies/Once_Upon_a_Time_in_America.jpeg',
		title: "Once Upon a Time in America",
		chinesetitle: "美国往事",
		type: '2'
	},{
		image: 'dist/images/movies/My_Neighbor_Totoro.jpeg',
		title: "My Neighbor Totoro",
		chinesetitle: "龙猫",
		type: '2'
	},{
		image: 'dist/images/movies/Confessions.jpeg',
		title: "Confessions",
		chinesetitle: "告白",
		type: '2'
	},{
		image: 'dist/images/movies/Gone_with_the_Wind.jpeg',
		title: "Gone with the Wind",
		chinesetitle: "乱世佳人",
		type: '2'
	},{
		image: 'dist/images/movies/The_Time_Traveler_s_Wife.jpeg',
		title: "The Time Traveler's Wife",
		chinesetitle: "时间旅行者的妻子",
		type: '2'
	},{
		image: 'dist/images/movies/City_of_God.jpeg',
		title: "City of God",
		chinesetitle: "上帝之城",
		type: '2'
	},{
		image: 'dist/images/movies/The_Conjuring.jpeg',
		title: "The Conjuring",
		chinesetitle: "招魂",
		type: '2'
	},{
		image: 'dist/images/movies/WALL-E.jpeg',
		title: "WALL-E",
		chinesetitle: "机器人总动员",
		type: '2'
	},{
		image: 'dist/images/movies/Hide_and_Seek.webp',
		title: "Hide and Seek",
		chinesetitle: "捉迷藏",
		type: '2'
	},{
		image: 'dist/images/movies/The_Illusionist.jpeg',
		title: "The Illusionist",
		chinesetitle: "魔术师",
		type: '2'
	},{
		image: 'dist/images/movies/Déjà_Vu.jpeg',
		title: "Déjà Vu",
		chinesetitle: "时空线索",
		type: '2'
	},{
		image: 'dist/images/movies/Darkness_Falls.jpeg',
		title: "Darkness Falls",
		chinesetitle: "暗夜鬼叫声",
		type: '2'
	},{
		image: 'dist/images/movies/Exam.jpeg',
		title: "Exam",
		chinesetitle: "终极面试",
		type: '2'
	},{
		image: 'dist/images/movies/The_Great_Gatsby.jpeg',
		title: "The Great Gatsby",
		chinesetitle: "了不起的盖茨比",
		type: '2'
	},{
		image: 'dist/images/movies/Sleepy_Hollow.jpeg',
		title: "Sleepy Hollow",
		chinesetitle: "断头谷",
		type: '2'
	},{
		image: 'dist/images/movies/Farewell_My_Concubine.jpeg',
		title: "Farewell My Concubine",
		chinesetitle: "霸王別姬",
		type: '2'
	},{
		image: 'dist/images/movies/Blue_Velvet.jpeg',
		title: "Blue Velvet",
		chinesetitle: "蓝丝绒",
		type: '2'
	},{
		image: 'dist/images/movies/The_One.jpeg',
		title: "The One",
		chinesetitle: "救世主",
		type: '2'
	},{
		image: 'dist/images/movies/The_Usual_Suspects.jpeg',
		title: "The Usual Suspects",
		chinesetitle: "非常嫌疑犯",
		type: '2'
	},{
		image: 'dist/images/movies/Misery.jpeg',
		title: "Misery",
		chinesetitle: "危情十日",
		type: '2'
	},{
		image: 'dist/images/movies/Brokeback_Mountain.jpeg',
		title: "Brokeback Mountain",
		chinesetitle: "断背山",
		type: '2'
	},{
		image: 'dist/images/movies/Anna_Karenina.jpeg',
		title: "Anna Karenina",
		chinesetitle: "安娜·卡列尼娜",
		type: '2'
	},{
		image: 'dist/images/movies/Kisaragi.jpeg',
		title: "Kisaragi",
		chinesetitle: "如月疑云",
		type: '2'
	},{
		image: 'dist/images/movies/Perfume_The_Story_of_a_Murderer.jpeg',
		title: "Perfume: The Story of a Murderer",
		chinesetitle: "香水",
		type: '2'
	},{
		image: 'dist/images/movies/Oldboy.jpeg',
		title: "Oldboy",
		chinesetitle: "老男孩",
		type: '2'
	},{
		image: 'dist/images/movies/I_Am_Legend.jpeg',
		title: "I Am Legend",
		chinesetitle: "我是传奇",
		type: '2'
	},{
		image: 'dist/images/movies/World_War_Z.jpeg',
		title: "World War Z",
		chinesetitle: "僵尸世界大战",
		type: '2'
	},{
		image: 'dist/images/movies/Match_Point.webp',
		title: "Match Point",
		chinesetitle: "赛末点",
		type: '2'
	},{
		image: 'dist/images/movies/Wreck_It_Ralph.jpeg',
		title: "Wreck-It Ralph",
		chinesetitle: "无敌破坏王",
		type: '2'
	},{
		image: 'dist/images/movies/Hanako-san.webp',
		title: "School Mystery",
		chinesetitle: "鬼娃娃花子",
		type: '2'
	},{
		image: 'dist/images/movies/Hanako-san2.webp',
		title: "Hanako-san",
		chinesetitle: "厕所里的花子",
		type: '2'
	},{
		image: 'dist/images/movies/Hard_Candy.jpeg',
		title: "Hard Candy",
		chinesetitle: "水果硬糖",
		type: '2'
	},{
		image: 'dist/images/movies/Pulp_Fiction.jpeg',
		title: "Pulp Fiction",
		chinesetitle: "低俗小说",
		type: '2'
	},{
		image: 'dist/images/movies/Dragon_Ball_Z_Battle_of_Gods.jpeg',
		title: "Dragon Ball Z: Battle of Gods",
		chinesetitle: "龙珠Z：神与神",
		type: '2'
	},{
		image: 'dist/images/movies/The_Shining.jpeg',
		title: "The Shining",
		chinesetitle: "闪灵",
		type: '2'
	},{
		image: 'dist/images/movies/Cry_Wolf.jpeg',
		title: "Cry Wolf",
		chinesetitle: "豺狼计划",
		type: '2'
	},{
		image: 'dist/images/movies/The_Texas_Chainsaw_Massacre.jpeg',
		title: "The Texas Chainsaw Massacre",
		chinesetitle: "德州电锯杀人狂",
		type: '2'
	},{
		image: 'dist/images/movies/Collateral.webp',
		title: "Collateral",
		chinesetitle: "借刀杀人",
		type: '2'
	},{
		image: 'dist/images/movies/The_Da_Vinci_Code.jpeg',
		title: "The Da Vinci Code",
		chinesetitle: "达·芬奇密码",
		type: '2'
	},{
		image: 'dist/images/movies/The_Ninth_Gate.jpeg',
		title: "The Ninth Gate",
		chinesetitle: "第九道门",
		type: '2'
	},{
		image: 'dist/images/movies/The_Message.jpeg',
		title: "The Message",
		chinesetitle: "风声",
		type: '2'
	},{
		image: 'dist/images/movies/Pacific_Rim.jpeg',
		title: "Pacific Rim",
		chinesetitle: "环太平洋",
		type: '2'
	},{
		image: 'dist/images/movies/House_of_9.jpeg',
		title: "House of 9",
		chinesetitle: "九人禁闭室",
		type: '2'
	},{
		image: 'dist/images/movies/After_Life.jpeg',
		title: "After.Life",
		chinesetitle: "身后事",
		type: '2'
	},{
		image: 'dist/images/movies/From_Hell.webp',
		title: "From Hell",
		chinesetitle: "来自地狱",
		type: '2'
	},{
		image: 'dist/images/movies/The_Piano_Teacher.jpeg',
		title: "The Piano Teacher",
		chinesetitle: "钢琴教师",
		type: '2'
	},{
		image: 'dist/images/movies/Phone_Booth.jpeg',
		title: "Phone Booth",
		chinesetitle: "狙击电话亭",
		type: '2'
	},{
		image: 'dist/images/movies/Ocean_s_Eleven.jpeg',
		title: "Ocean's Eleven",
		chinesetitle: "十一罗汉",
		type: '2'
	},{
		image: 'dist/images/movies/Dark_Country.jpeg',
		title: "Dark Country",
		chinesetitle: "黑暗乡村",
		type: '2'
	},{
		image: 'dist/images/movies/13_Beloved.jpeg',
		title: "13 Beloved",
		chinesetitle: "13 骇人游戏",
		type: '2'
	},{
		image: 'dist/images/movies/The_Mechanic.jpeg',
		title: "The Mechanic",
		chinesetitle: "机械师",
		type: '2'
	},{
		image: 'dist/images/movies/A_Clockwork_Orange.jpeg',
		title: "A Clockwork Orange",
		chinesetitle: "发条橙",
		type: '2'
	},{
		image: 'dist/images/movies/Blade_Runner.jpeg',
		title: "Blade Runner",
		chinesetitle: "银翼杀手",
		type: '2'
	},{
		image: 'dist/images/movies/Rainbow_Eyes.jpeg',
		title: "Rainbow Eyes",
		chinesetitle: "假面",
		type: '2'
	},{
		image: 'dist/images/movies/Last_Year_at_Marienbad.jpeg',
		title: "Last Year at Marienbad",
		chinesetitle: "去年在马里昂巴德",
		type: '2'
	},{
		image: 'dist/images/movies/El_Topo.jpeg',
		title: "El Topo",
		chinesetitle: "鼹鼠",
		type: '2'
	},{
		image: 'dist/images/movies/Murder_on_the_Orient_Express.jpeg',
		title: "Murder on the Orient Express",
		chinesetitle: "东方快车谋杀案",
		type: '2'
	},{
		image: 'dist/images/movies/The_Artist.jpeg',
		title: "The Artist",
		chinesetitle: "艺术家",
		type: '2'
	},{
		image: 'dist/images/movies/3_Idiots.jpeg',
		title: "3 Idiots",
		chinesetitle: "三傻大闹宝莱坞",
		type: '2'
	},{
		image: 'dist/images/movies/Prometheus.jpeg',
		title: "Prometheus",
		chinesetitle: "普罗米修斯",
		type: '2'
	},{
		image: 'dist/images/movies/Mr_Nobody.jpeg',
		title: "Mr. Nobody",
		chinesetitle: "无姓之人",
		type: '2'
	},{
		image: 'dist/images/movies/Orphan.jpeg',
		title: "Orphan",
		chinesetitle: "孤儿怨",
		type: '2'
	},{
		image: 'dist/images/movies/The_Seventh_Seal.jpeg',
		title: "The Seventh Seal",
		chinesetitle: "第七封印",
		type: '2'
	},{
		image: 'dist/images/movies/A_Perfect_Getaway.jpeg',
		title: "A Perfect Getaway",
		chinesetitle: "完美逃亡",
		type: '2'
	},{
		image: 'dist/images/movies/Fear(s)_of_the_Dark.jpeg',
		title: "Fear(s) of the Dark",
		chinesetitle: "暗夜恐惧",
		type: '2'
	},{
		image: 'dist/images/movies/Léon_The_Professional.jpeg',
		title: "Léon: The Professional",
		chinesetitle: "这个杀手不太冷",
		type: '2'
	},{
		image: 'dist/images/movies/Martyrs.jpeg',
		title: "Martyrs",
		chinesetitle: "殉难者",
		type: '2'
	},{
		image: 'dist/images/movies/Eagle_Eye.jpeg',
		title: "Eagle Eye",
		chinesetitle: "鹰眼",
		type: '2'
	},{
		image: 'dist/images/movies/The_Avengers.jpeg',
		title: "The Avengers",
		chinesetitle: "复仇者联盟",
		type: '2'
	},{
		image: 'dist/images/movies/Jane_Eyre.jpeg',
		title: "Jane Eyre",
		chinesetitle: "简爱",
		type: '2'
	},{
		image: 'dist/images/movies/Unknown2.jpeg',
		title: "Unknown",
		chinesetitle: "玩命记忆",
		type: '2'
	},{
		image: 'dist/images/movies/The_Departed.jpeg',
		title: "The Departed",
		chinesetitle: "无间道风云",
		type: '2'
	},{
		image: 'dist/images/movies/Infernal_Affairs.jpeg',
		title: "Infernal Affairs",
		chinesetitle: "无间道",
		type: '2'
	},{
		image: 'dist/images/movies/The_Hurt_Locker.webp',
		title: "The Hurt Locker",
		chinesetitle: "拆弹部队",
		type: '2'
	},{
		image: 'dist/images/movies/Brazil.jpeg',
		title: "Brazil",
		chinesetitle: "妙想天开",
		type: '2'
	},{
		image: 'dist/images/movies/Inland_Empire.jpeg',
		title: "Inland Empire",
		chinesetitle: "内陆帝国",
		type: '2'
	},{
		image: 'dist/images/movies/Pi.jpeg',
		title: "Pi",
		chinesetitle: "死亡密码",
		type: '2'
	},{
		image: 'dist/images/movies/The_Cell.jpeg',
		title: "The Cell",
		chinesetitle: "入侵脑细胞",
		type: '2'
	},{
		image: 'dist/images/movies/The_Orphanage.jpeg',
		title: "The Orphanage",
		chinesetitle: "孤堡惊情",
		type: '2'
	},{
		image: 'dist/images/movies/Mindhunters.jpeg',
		title: "Mindhunters",
		chinesetitle: "八面埋伏",
		type: '2'
	},{
		image: 'dist/images/movies/Dead_Silence.jpeg',
		title: "Dead Silence",
		chinesetitle: "死寂",
		type: '2'
	},{
		image: 'dist/images/movies/The_Others.jpeg',
		title: "The Others",
		chinesetitle: "小岛惊魂",
		type: '2'
	},{
		image: 'dist/images/movies/CZ12.jpeg',
		title: "CZ12",
		chinesetitle: "十二生肖",
		type: '2'
	},{
		image: 'dist/images/movies/The_Machinist.webp',
		title: "The Machinist",
		chinesetitle: "机械师",
		type: '2'
	},{
		image: 'dist/images/movies/The_Game.jpeg',
		title: "The Game",
		chinesetitle: "心理游戏",
		type: '2'
	},{
		image: 'dist/images/movies/1408.jpeg',
		title: "1408",
		chinesetitle: "幻影凶间",
		type: '2'
	},{
		image: 'dist/images/movies/2001_A_Space_Odyssey.jpeg',
		title: "2001: A Space Odyssey",
		chinesetitle: "2001太空漫游",
		type: '2'
	},{
		image: 'dist/images/movies/Up.webp',
		title: "Up",
		chinesetitle: "飞屋环游记",
		type: '2'
	},{
		image: 'dist/images/movies/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring.jpeg',
		title: "The Lord of the Rings: The Fellowship of the Ring",
		chinesetitle: "指环王1：魔戒再现",
		type: '2'
	},{
		image: 'dist/images/movies/The_Lord_of_the_Rings_The_Two_Towers.jpeg',
		title: "The Lord of the Rings: The Two Towers",
		chinesetitle: "指环王2：双塔奇兵",
		type: '2'
	},{
		image: 'dist/images/movies/The_Lord_of_the_Rings_The_Return_of_the_King.jpg',
		title: "The Lord of the Rings: The Return of the King",
		chinesetitle: "指环王3：王者无敌",
		type: '2'
	},{
		image: 'dist/images/movies/Cloud_Atlas.jpeg',
		title: "Cloud Atlas",
		chinesetitle: "云图",
		type: '2'
	},{
		image: 'dist/images/movies/Basic_Instinct.jpeg',
		title: "Basic Instinct",
		chinesetitle: "本能",
		type: '2'
	},{
		image: 'dist/images/movies/Five_Minutes_of_Heaven.jpeg',
		title: "Five Minutes of Heaven",
		chinesetitle: "天堂五分钟",
		type: '2'
	},{
		image: 'dist/images/movies/Source_Code.jpeg',
		title: "Source Code",
		chinesetitle: "源代码",
		type: '2'
	},{
		image: 'dist/images/movies/Life_of_Pi.jpeg',
		title: "Life of Pi",
		chinesetitle: "少年Pi的奇幻漂流",
		type: '2'
	},{
		image: 'dist/images/movies/The_Devil_s_Advocate.jpeg',
		title: "The Devil's Advocate",
		chinesetitle: "魔鬼代言人",
		type: '2'
	},{
		image: 'dist/images/movies/The_Mist.jpeg',
		title: "The Mist",
		chinesetitle: "迷雾",
		type: '2'
	},{
		image: 'dist/images/movies/The_Legend_of_1900.jpeg',
		title: "The Legend of 1900",
		chinesetitle: "海上钢琴师",
		type: '2'
	},{
		image: 'dist/images/movies/Pride_Prejudice.jpeg',
		title: "Pride & Prejudice",
		chinesetitle: "傲慢与偏见",
		type: '2'
	},{
		image: 'dist/images/movies/Matchstick_Men.jpeg',
		title: "Matchstick Men",
		chinesetitle: "火柴人",
		type: '2'
	},{
		image: 'dist/images/movies/Schindler_s_List.jpeg',
		title: "Schindler's List",
		chinesetitle: "辛德勒的名单",
		type: '2'
	},{
		image: 'dist/images/movies/Resident_Evil.jpeg',
		title: "Resident Evil",
		chinesetitle: "生化危机",
		type: '2'
	},{
		image: 'dist/images/movies/Resident_Evil_Apocalypse.jpeg',
		title: "Resident Evil: Apocalypse",
		chinesetitle: "生化危机2：启示录",
		type: '2'
	},{
		image: 'dist/images/movies/Resident_Evil_Extinction.jpeg',
		title: "Resident Evil: Extinction",
		chinesetitle: "生化危机3：灭绝",
		type: '2'
	},{
		image: 'dist/images/movies/Resident_Evil_4.jpeg',
		title: "Resident Evil 4",
		chinesetitle: "生化危机4：战神再生",
		type: '2'
	},{
		image: 'dist/images/movies/Resident_Evil_Retribution.jpeg',
		title: "Resident Evil: Retribution",
		chinesetitle: "生化危机5：惩罚",
		type: '2'
	},{
		image: 'dist/images/movies/The_Prestige.jpeg',
		title: "The Prestige",
		chinesetitle: "致命魔术",
		type: '2'
	},{
		image: 'dist/images/movies/A_Beautiful_Mind.jpeg',
		title: "A Beautiful Mind",
		chinesetitle: "美丽心灵",
		type: '2'
	},{
		image: 'dist/images/movies/The_Skeleton_Key.jpeg',
		title: "The Skeleton Key",
		chinesetitle: "万能钥匙",
		type: '2'
	},{
		image: 'dist/images/movies/Donnie_Darko.jpeg',
		title: "Donnie Darko",
		chinesetitle: "死亡幻觉",
		type: '2'
	},{
		image: 'dist/images/movies/S_Darko.jpeg',
		title: "S. Darko",
		chinesetitle: "死亡幻觉2",
		type: '2'
	},{
		image: 'dist/images/movies/Zodiac.jpeg',
		title: "Zodiac",
		chinesetitle: "十二宫",
		type: '2'
	},{
		image: 'dist/images/movies/Stay.jpeg',
		title: "Stay",
		chinesetitle: "生死停留",
		type: '2'
	},{
		image: 'dist/images/movies/Seven.jpeg',
		title: "Seven",
		chinesetitle: "七宗罪",
		type: '2'
	},{
		image: 'dist/images/movies/Braveheart.jpeg',
		title: "Braveheart",
		chinesetitle: "勇敢的心",
		type: '2'
	},{
		image: 'dist/images/movies/Mulholland_Drive.jpeg',
		title: "Mulholland Drive",
		chinesetitle: "穆赫兰道",
		type: '2'
	},{
		image: 'dist/images/movies/Paycheck.webp',
		title: "Paycheck",
		chinesetitle: "记忆裂痕",
		type: '2'
	},{
		image: 'dist/images/movies/Black_Swan.jpeg',
		title: "Black Swan",
		chinesetitle: "黑天鹅",
		type: '2'
	},{
		image: 'dist/images/movies/The_Matrix.jpeg',
		title: "The Matrix",
		chinesetitle: "黑客帝国",
		type: '2'
	},{
		image: 'dist/images/movies/The_Matrix_Reloaded.jpeg',
		title: "The Matrix Reloaded",
		chinesetitle: "黑客帝国2：重装上阵",
		type: '2'
	},{
		image: 'dist/images/movies/The_Matrix_Revolutions.jpeg',
		title: "The Matrix Revolutions",
		chinesetitle: "黑客帝国3：矩阵革命",
		type: '2'
	},{
		image: 'dist/images/movies/The_Silence_of_the_Lambs.jpeg',
		title: "The Silence of the Lambs",
		chinesetitle: "沉默的羔羊",
		type: '2'
	},{
		image: 'dist/images/movies/Hannibal.jpeg',
		title: "Hannibal",
		chinesetitle: "汉尼拔",
		type: '2'
	},{
		image: 'dist/images/movies/Gothika.webp',
		title: "Gothika",
		chinesetitle: "鬼影人",
		type: '2'
	},{
		image: 'dist/images/movies/Vinci.jpeg',
		title: "Vinci",
		chinesetitle: "盗走达芬奇",
		type: '2'
	},{
		image: 'dist/images/movies/Fight_Club.jpeg',
		title: "Fight Club",
		chinesetitle: "搏击俱乐部",
		type: '2'
	},{
		image: 'dist/images/movies/Identity.jpeg',
		title: "Identity",
		chinesetitle: "致命ID",
		type: '2'
	},{
		image: 'dist/images/movies/Cube.jpeg',
		title: "Cube",
		chinesetitle: "心慌方",
		type: '2'
	},{
		image: 'dist/images/movies/Cat_Soup.jpeg',
		title: "Cat Soup",
		chinesetitle: "猫汤",
		type: '2'
	},{
		image: 'dist/images/movies/12_Monkeys.jpeg',
		title: "12 Monkeys",
		chinesetitle: "十二猴子",
		type: '2'
	},{
		image: 'dist/images/movies/Triangle.jpeg',
		title: "Triangle",
		chinesetitle: "恐怖游轮",
		type: '2'
	},{
		image: 'dist/images/movies/21.jpeg',
		title: "21",
		chinesetitle: "决胜21点",
		type: '2'
	},{
		image: 'dist/images/movies/The_Thirteenth_Floor.webp',
		title: "The Thirteenth Floor",
		chinesetitle: "异次元骇客",
		type: '2'
	},{
		image: 'dist/images/movies/The_Butterfly_Effect.jpeg',
		title: "The Butterfly Effect",
		chinesetitle: "蝴蝶效应",
		type: '2'
	},{
		image: 'dist/images/movies/The_Butterfly_Effect_2.jpeg',
		title: "The Butterfly Effect 2",
		chinesetitle: "蝴蝶效应2",
		type: '2'
	},{
		image: 'dist/images/movies/The_Butterfly_Effect_3_Revelations.webp',
		title: "The Butterfly Effect 3: Revelations",
		chinesetitle: "蝴蝶效应3：启示",
		type: '2'
	},{
		image: 'dist/images/movies/Shutter_Island.jpeg',
		title: "Shutter Island",
		chinesetitle: "禁闭岛",
		type: '2'
	},{
		image: 'dist/images/movies/Spirited_Away.jpeg',
		title: "Spirited Away",
		chinesetitle: "千与千寻",
		type: '2'
	},{
		image: 'dist/images/movies/Slumdog_Millionaire.jpeg',
		title: "Slumdog Millionaire",
		chinesetitle: "贫民窟的百万富翁",
		type: '2'
	},{
		image: 'dist/images/movies/88_Minutes.jpeg',
		title: "88 Minutes",
		chinesetitle: "88分钟",
		type: '2'
	},{
		image: 'dist/images/movies/Arthur_and_the_Invisibles.jpeg',
		title: "Arthur and the Invisibles",
		chinesetitle: "亚瑟和他的迷你王国",
		type: '2'
	},{
		image: 'dist/images/movies/Sophie_s_Revenge.jpeg',
		title: "Sophie's Revenge",
		chinesetitle: "非常完美",
		type: '2'
	},{
		image: 'dist/images/movies/Finding_Nemo.webp',
		title: "Finding Nemo",
		chinesetitle: "海底总动员",
		type: '2'
	},{
		image: 'dist/images/movies/All_Quiet_on_the_Western_Front.jpg',
		title: "All Quiet on the Western Front",
		chinesetitle: "新西线无战事",
		type: '2'
	},{
		image: 'dist/images/movies/Crazy_Racer.jpeg',
		title: "Crazy Racer",
		chinesetitle: "疯狂的赛车",
		type: '2'
	},{
		image: 'dist/images/movies/Big_Movie.webp',
		title: "Big Movie",
		chinesetitle: "大电影",
		type: '2'
	},{
		image: 'dist/images/movies/The_Deserted_Inn.jpg',
		title: "The Deserted Inn",
		chinesetitle: "荒村客栈",
		type: '2'
	},{
		image: 'dist/images/movies/A_Wicked_Ghost.jpeg',
		title: "A Wicked Ghost",
		chinesetitle: "山村老尸",
		type: '2'
	},{
		image: 'dist/images/movies/The_Fifth_Element.jpeg',
		title: "The Fifth Element",
		chinesetitle: "第五元素",
		type: '2'
	},{
		image: 'dist/images/movies/Flipped.jpeg',
		title: "Flipped",
		chinesetitle: "怦然心动",
		type: '2'
	},{
		image: 'dist/images/movies/Madagascar.jpeg',
		title: "Madagascar",
		chinesetitle: "马达加斯加",
		type: '2'
	},{
		image: 'dist/images/movies/Journey_to_the_Center_of_the_Earth.jpeg',
		title: "Journey to the Center of the Earth",
		chinesetitle: "地心历险记",
		type: '2'
	},{
		image: 'dist/images/movies/Magic_to_Win.jpeg',
		title: "Magic to Win",
		chinesetitle: "开心魔法",
		type: '2'
	},{
		image: 'dist/images/movies/Sherlock_Holmes_A_Game_of_Shadows.jpeg',
		title: "Sherlock Holmes: A Game of Shadows",
		chinesetitle: "大侦探福尔摩斯2：诡影游戏",
		type: '2'
	},{
		image: 'dist/images/movies/Casino_Royale.jpeg',
		title: "Casino Royale",
		chinesetitle: "007：大战皇家赌场",
		type: '2'
	},{
		image: 'dist/images/movies/The_Sorcerer_s_Apprentice.jpeg',
		title: "The Sorcerer's Apprentice",
		chinesetitle: "魔法师的学徒",
		type: '2'
	},{
		image: 'dist/images/movies/Confucius.jpeg',
		title: "Confucius",
		chinesetitle: "孔子",
		type: '2'
	},{
		image: 'dist/images/movies/Seven_Swords.jpeg',
		title: "Seven Swords",
		chinesetitle: "七剑",
		type: '2'
	},{
		image: 'dist/images/movies/Kekexili_Mountain_Patrol.jpeg',
		title: "Kekexili: Mountain Patrol",
		chinesetitle: "可可西里",
		type: '2'
	},{
		image: 'dist/images/movies/The_Promise.jpeg',
		title: "The Promise",
		chinesetitle: "无极",
		type: '2'
	},{
		image: 'dist/images/movies/Hero.jpeg',
		title: "Hero",
		chinesetitle: "英雄",
		type: '2'
	},{
		image: 'dist/images/movies/The_Myth.webp',
		title: "The Myth",
		chinesetitle: "神话",
		type: '2'
	},{
		image: 'dist/images/movies/If_You_Are_the_One.webp',
		title: "If You Are the One",
		chinesetitle: "非诚勿扰",
		type: '2'
	},{
		image: 'dist/images/movies/If_You_Are_The_One_2.webp',
		title: "If You Are the One 2",
		chinesetitle: "非诚勿扰2",
		type: '2'
	},{
		image: 'dist/images/movies/Red_Cliff.jpeg',
		title: "Red Cliff",
		chinesetitle: "赤壁(上)",
		type: '2'
	},{
		image: 'dist/images/movies/Red_Cliff_II.jpeg',
		title: "Red Cliff II",
		chinesetitle: "赤壁(下)",
		type: '2'
	},{
		image: 'dist/images/movies/New_Police_Story.jpeg',
		title: "New Police Story",
		chinesetitle: "新警察故事",
		type: '2'
	},{
		image: 'dist/images/movies/Kung_Fu_Hustle.jpeg',
		title: "Kung Fu Hustle",
		chinesetitle: "功夫",
		type: '2'
	},{
		image: 'dist/images/movies/Shaolin_Soccer.jpeg',
		title: "Shaolin Soccer",
		chinesetitle: "少林足球",
		type: '2'
	},{
		image: 'dist/images/movies/The_God_of_Cookery.webp',
		title: "The God of Cookery",
		chinesetitle: "食神",
		type: '2'
	},{
		image: 'dist/images/movies/Flirting_Scholar.webp',
		title: "Flirting Scholar",
		chinesetitle: "唐伯虎点秋香",
		type: '2'
	},{
		image: 'dist/images/movies/Once_Upon_a_Time_in_China_II.webp',
		title: "Once Upon a Time in China II",
		chinesetitle: "黄飞鸿之二：男儿当自强",
		type: '2'
	},{
		image: 'dist/images/movies/Once_Upon_a_Time_in_China_III.webp',
		title: "Once Upon a Time in China III",
		chinesetitle: "黄飞鸿之三：狮王争霸",
		type: '2'
	},{
		image: 'dist/images/movies/Ip_Man.jpeg',
		title: "Ip Man",
		chinesetitle: "叶问",
		type: '2'
	},{
		image: 'dist/images/movies/Initial_D.jpeg',
		title: "Initial D",
		chinesetitle: "头文字D",
		type: '2'
	},{
		image: 'dist/images/movies/The_Mummy_Returns.jpeg',
		title: "The Mummy Returns",
		chinesetitle: "木乃伊归来",
		type: '2'
	},{
		image: 'dist/images/movies/The_Treasure_Hunter.jpeg',
		title: "The Treasure Hunter",
		chinesetitle: "刺陵",
		type: '2'
	},{
		image: 'dist/images/movies/Kung_Fu_Dunk.jpeg',
		title: "Kung Fu Dunk",
		chinesetitle: "大灌篮",
		type: '2'
	},{
		image: 'dist/images/movies/The_Mummy_Tomb_of_the_Dragon_Emperor.jpeg',
		title: "The Mummy: Tomb of the Dragon Emperor",
		chinesetitle: "木乃伊3：龙帝之墓",
		type: '2'
	},{
		image: 'dist/images/movies/The_Mummy.webp',
		title: "The Mummy",
		chinesetitle: "新木乃伊",
		type: '2'
	},{
		image: 'dist/images/movies/Charlie_and_the_Chocolate_Factory.jpeg',
		title: "Charlie and the Chocolate Factory",
		chinesetitle: "查理和巧克力工厂",
		type: '2'
	},{
		image: 'dist/images/movies/Shooter.jpeg',
		title: "Shooter",
		chinesetitle: "狙击生死线",
		type: '2'
	},{
		image: 'dist/images/movies/The_Dark_Knight.jpeg',
		title: "The Dark Knight",
		chinesetitle: "蝙蝠侠：黑暗骑士",
		type: '2'
	},{
		image: 'dist/images/movies/Batman_Robin.webp',
		title: "Batman & Robin",
		chinesetitle: "蝙蝠侠与罗宾",
		type: '2'
	},{
		image: 'dist/images/movies/The_Cove.jpeg',
		title: "The Cove",
		chinesetitle: "海豚湾",
		type: '2'
	},{
		image: 'dist/images/movies/The_Forbidden_Kingdom.jpeg',
		title: "The Forbidden Kingdom",
		chinesetitle: "功夫之王",
		type: '2'
	},{
		image: 'dist/images/movies/Ice_Age.jpeg',
		title: "Ice Age",
		chinesetitle: "冰川时代",
		type: '2'
	},{
		image: 'dist/images/movies/Ice_Age_The_Meltdown.webp',
		title: "Ice Age: The Meltdown",
		chinesetitle: "冰川时代2：融冰之灾",
		type: '2'
	},{
		image: 'dist/images/movies/Iron_Man.jpeg',
		title: "Iron Man",
		chinesetitle: "钢铁侠",
		type: '2'
	},{
		image: 'dist/images/movies/Titanic.jpeg',
		title: "Titanic",
		chinesetitle: "泰坦尼克号",
		type: '2'
	},{
		image: 'dist/images/movies/Avatar.jpeg',
		title: "Avatar",
		chinesetitle: "阿凡达",
		type: '2'
	},{
		image: 'dist/images/movies/Chinese_Odyssey_2002.jpeg',
		title: "Chinese Odyssey 2002",
		chinesetitle: "天下无双",
		type: '2'
	},{
		image: 'dist/images/movies/Painted_Skin.jpeg',
		title: "Painted Skin",
		chinesetitle: "画皮",
		type: '2'
	},{
		image: 'dist/images/movies/Confession_of_Pain.jpeg',
		title: "Confession of Pain",
		chinesetitle: "伤城",
		type: '2'
	},{
		image: 'dist/images/movies/Lotus_Lantern.jpeg',
		title: "Lotus Lantern",
		chinesetitle: "宝莲灯",
		type: '2'
	},{
		image: 'dist/images/movies/Jumanji.jpeg',
		title: "Jumanji",
		chinesetitle: "勇敢者的游戏",
		type: '2'
	},{
		image: 'dist/images/movies/Rob-B-Hood.jpeg',
		title: "Rob-B-Hood",
		chinesetitle: "宝贝计划",
		type: '2'
	},{
		image: 'dist/images/movies/Home_Alone.jpeg',
		title: "Home Alone",
		chinesetitle: "小鬼当家",
		type: '2'
	},{
		image: 'dist/images/movies/Home_Alone_2_Lost_in_New_York.jpeg',
		title: "Home Alone 2: Lost in New York",
		chinesetitle: "小鬼当家2",
		type: '2'
	},{
		image: 'dist/images/movies/Legally_Blonde.jpeg',
		title: "Legally Blonde",
		chinesetitle: "律政俏佳人",
		type: '2'
	},{
		image: 'dist/images/movies/High_School_Musical.jpeg',
		title: "High School Musical",
		chinesetitle: "歌舞青春",
		type: '2'
	},{
		image: 'dist/images/movies/High_School_Musical_2.jpeg',
		title: "High School Musical 2",
		chinesetitle: "歌舞青春2",
		type: '2'
	},{
		image: 'dist/images/movies/The_Shawshank_Redemption.jpeg',
		title: "The Shawshank Redemption",
		chinesetitle: "肖申克的救赎",
		type: '2'
	},{
		image: 'dist/images/movies/Lord_of_War.jpeg',
		title: "Lord of War",
		chinesetitle: "战争之王",
		type: '2'
	},{
		image: 'dist/images/movies/Transformers.webp',
		title: "Transformers",
		chinesetitle: "变形金刚",
		type: '2'
	},{
		image: 'dist/images/movies/Transformers_Revenge_of_the_Fallen.jpeg',
		title: "Transformers: Revenge of the Fallen",
		chinesetitle: "变形金刚2",
		type: '2'
	},{
		image: 'dist/images/movies/Transformers_Dark_of_the_Moon.jpeg',
		title: "Transformers: Dark of the Moon",
		chinesetitle: "变形金刚3",
		type: '2'
	},{
		image: 'dist/images/movies/Transformers_Age_of_Extinction.jpeg',
		title: "Transformers: Age of Extinction",
		chinesetitle: "变形金刚4：绝迹重生",
		type: '2'
	},{
		image: 'dist/images/movies/Curse_of_the_Golden_Flower.jpeg',
		title: "Curse of the Golden Flower",
		chinesetitle: "满城尽带黄金甲",
		type: '2'
	},{
		image: 'dist/images/movies/Kung_Fu_Panda.jpeg',
		title: "Kung Fu Panda",
		chinesetitle: "功夫熊猫",
		type: '2'
	},{
		image: 'dist/images/movies/Kung_Fu_Panda_2.jpeg',
		title: "Kung Fu Panda 2",
		chinesetitle: "功夫熊貓2",
		type: '2'
	},{
		image: 'dist/images/movies/The_Chronicles_of_Narnia_The_Lion_the_Witch_and_the_Wardrobe.jpeg',
		title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
		chinesetitle: "纳尼亚传奇1：狮子、女巫和魔衣橱",
		type: '2'
	},{
		image: 'dist/images/movies/Harry_Potter_And_The_Sorcerer_s_Stone.jpeg',
		title: "Harry Potter And The Sorcerer's Stone",
		chinesetitle: "哈利·波特与魔法石",
		type: '2'
	},{
		image: 'dist/images/movies/Harry_Potter_and_the_Chamber_of_Secrets.webp',
		title: "Harry Potter and the Chamber of Secrets",
		chinesetitle: "哈利·波特与密室",
		type: '2'
	},{
		image: 'dist/images/movies/Harry_Potter_and_the_Goblet_of_Fire.webp',
		title: "Harry Potter and the Goblet of Fire",
		chinesetitle: "哈利·波特与火焰杯",
		type: '2'
	},{
		image: 'dist/images/movies/Harry_Potter_and_the_Prisoner_of_Azkaban.webp',
		title: "Harry Potter and the Prisoner of Azkaban",
		chinesetitle: "哈利·波特与阿兹卡班的囚徒",
		type: '2'
	},{
		image: 'dist/images/movies/Harry_Potter_and_the_Order_of_the_Phoenix.webp',
		title: "Harry Potter and the Order of the Phoenix",
		chinesetitle: "哈利·波特与凤凰社",
		type: '2'
	},{
		image: 'dist/images/movies/Harry_Potter_and_the_Half_Blood_Prince.webp',
		title: "Harry Potter and the Half-Blood Prince",
		chinesetitle: "哈利·波特与混血王子",
		type: '2'
	},{
		image: 'dist/images/movies/Harry_Potter_and_the_Deathly_Hallows_Part_1.webp',
		title: "Harry Potter and the Deathly Hallows: Part 1",
		chinesetitle: "哈利·波特与死亡圣器(上)",
		type: '2'
	},{
		image: 'dist/images/movies/Harry_Potter_and_the_Deathly_Hallows_Part_2.webp',
		title: "Harry Potter and the Deathly Hallows: Part 2",
		chinesetitle: "哈利·波特与死亡圣器(下)",
		type: '2'
	},{
		image: 'dist/images/movies/A_World_Without_Thieves.jpeg',
		title: "A World Without Thieves",
		chinesetitle: "天下无贼",
		type: '2'
	},{
		image: 'dist/images/movies/Hands_Up!.webp',
		title: "Hands Up!",
		chinesetitle: "举起手来！",
		type: '2'
	},{
		image: 'dist/images/movies/Inception.jpeg',
		title: "Inception",
		chinesetitle: "盗梦空间",
		type: '2'
	},{
		image: 'dist/images/movies/The_Truman_Show.jpeg',
		title: "The Truman Show",
		chinesetitle: "楚门的世界",
		type: '2'
	},{
		image: 'dist/images/movies/The_Lion_King.jpeg',
		title: "The Lion King",
		chinesetitle: "狮子王",
		type: '2'
	},{
		image: 'dist/images/movies/March_of_the_Penguins.jpeg',
		title: "March of the Penguins",
		chinesetitle: "帝企鹅日记",
		type: '2'
	},{
		image: 'dist/images/movies/Assembly.jpeg',
		title: "Assembly",
		chinesetitle: "集结号",
		type: '2'
	},{
		image: 'dist/images/movies/Bai_Fangli.jpg',
		title: "Bai Fangli",
		chinesetitle: "白方礼",
		type: '2'
	},{
		image: 'dist/images/movies/The_Tokyo_Trial.jpeg',
		title: "The Tokyo Trial",
		chinesetitle: "东京审判",
		type: '2'
	},{
		image: 'dist/images/movies/Ten_Brothers.webp',
		title: "Ten Brothers",
		chinesetitle: "十兄弟",
		type: '2'
	},{
		image: 'dist/images/movies/Seoul_Raiders.webp',
		title: "Seoul Raiders",
		chinesetitle: "韩城攻略",
		type: '2'
	},{
		image: 'dist/images/movies/Tora!_Tora!_Tora!.webp',
		title: "Tora! Tora! Tora!",
		chinesetitle: "虎！虎！虎！",
		type: '2'
	},{
		image: 'dist/images/movies/Not_One_Less.webp',
		title: "Not One Less",
		chinesetitle: "一个都不能少",
		type: '2'
	},{
		image: 'dist/images/movies/The_6th_Day.webp',
		title: "The 6th Day",
		chinesetitle: "第六日",
		type: '2'
	},{
		image: 'dist/images/movies/The_Storm_Rider.webp',
		title: "The Storm Rider",
		chinesetitle: "风云雄霸天下",
		type: '2'
	},{
		image: 'dist/images/movies/Bicentennial_Man.jpeg',
		title: "Bicentennial Man",
		chinesetitle: "机器管家",
		type: '2'
	},{
		image: 'dist/images/movies/The_Island.webp',
		title: "The Island",
		chinesetitle: "逃出克隆岛",
		type: '2'
	},{
		image: 'dist/images/movies/Himalaya_Singh.webp',
		title: "Himalaya Singh",
		chinesetitle: "喜马拉亚星",
		type: '2'
	},{
		image: 'dist/images/movies/The_Mask.webp',
		title: "The Mask",
		chinesetitle: "变相怪杰",
		type: '2'
	},{
		image: 'dist/images/movies/American_Dreams_in_China.webp',
		title: "American Dreams in China",
		chinesetitle: "中国合伙人",
		type: '2'
	},{
		image: 'dist/images/movies/Inspector_Gadget.webp',
		title: "Inspector Gadget",
		chinesetitle: "神探加吉特",
		type: '2'
	},{
		image: 'dist/images/movies/Ghostbusters.webp',
		title: "Ghostbusters",
		chinesetitle: "超能敢死队",
		type: '2'
	},{
		image: 'dist/images/movies/Around_the_World_in_80_Days.webp',
		title: "Around the World in 80 Days",
		chinesetitle: "环游地球八十天",
		type: '2'
	},{
		image: 'dist/images/movies/Dad_Where_Are_We_Going.webp',
		title: "Dad, Where Are We Going?",
		chinesetitle: "爸爸去哪儿",
		type: '2'
	},{
		image: 'dist/images/movies/Inferno.webp',
		title: "Inferno",
		chinesetitle: "但丁密码",
		type: '2'
	},{
		image: 'dist/images/movies/War_Dogs.webp',
		title: "War Dogs",
		chinesetitle: "军火贩",
		type: '2'
	},{
		image: 'dist/images/movies/Rogue_One_A_Star_Wars_Story.webp',
		title: "Rogue One: A Star Wars Story",
		chinesetitle: "星球大战外传：侠盗一号",
		type: '2'
	},{
		image: 'dist/images/movies/Toy_Story.webp',
		title: "Toy Story 2",
		chinesetitle: "玩具总动员2",
		type: '2'
	},{
		image: 'dist/images/movies/Prince_Nezha_s_Triumph_Against_Dragon_King.webp',
		title: "Prince Nezha's Triumph Against Dragon King",
		chinesetitle: "哪吒闹海",
		type: '2'
	},{
		image: 'dist/images/movies/The_Parent_Trap.webp',
		title: "The Parent Trap",
		chinesetitle: "天生一对",
		type: '2'
	},{
		image: 'dist/images/movies/Digimon_Adventure.jpeg',
		title: "Digimon Adventure",
		chinesetitle: "数码兽大冒险",
		type: '2'
	},{
		image: 'dist/images/movies/Digimon_Adventure_Bokura_no_War_Game!.jpeg',
		title: "Digimon Adventure: Bokura no War Game!",
		chinesetitle: "数码宝贝大电影：我们的战争游戏",
		type: '2'
	},{
		image: 'dist/images/movies/Digimon_Adventure_02_Hurricane_Touchdown!_The_Golden_Digimentals.webp',
		title: "Digimon Adventure 02 - Hurricane Touchdown! The Golden Digimentals",
		chinesetitle: "数码宝贝大电影三：超绝进化！黄金的数码装甲！",
		type: '2'
	},{
		image: 'dist/images/movies/Digimon_Revenge_of_Diaboromon.webp',
		title: "Digimon: Revenge of Diaboromon",
		chinesetitle: "数码宝贝大电影四：超恶魔兽的反击",
		type: '2'
	},{
		image: 'dist/images/movies/Digimon_Battle_of_Adventurers.webp',
		title: "Digimon: Battle of Adventurers",
		chinesetitle: "数码宝贝大电影五：冒险者的战斗",
		type: '2'
	},{
		image: 'dist/images/movies/Digimon_Runaway_Locomon.jpg',
		title: "Digimon: Runaway Locomon",
		chinesetitle: "暴走特急",
		type: '2'
	},{
		image: 'dist/images/movies/Digimon_Island_of_the_Lost_Digimon.webp',
		title: "Digimon: Island of the Lost Digimon",
		chinesetitle: "古代数码宝贝复活",
		type: '2'
	},{
		image: 'dist/images/movies/DIGITAL_MONSTER_X-evolution.jpg',
		title: "DIGITAL MONSTER X-evolution",
		chinesetitle: "数码兽X进化",
		type: '2'
	}
	]

	var myContacts = [{
		url: 'mailto:wel615@lehigh.com',
		ion: 'email'
	}, {
		url: 'tel: +1-484-747-3196',
		ion: 'ios-telephone'
	}, {
		url: 'https://www.instagram.com/waha.li/?hl=en',
		ion: 'social-instagram'
	}];

	app.listView = new app.ListView(fullStackProjects, frontEndProjects, DataandAIProjects, otherProjects, paperAndPatents, awards, organizations,mediaworks,certificates,movies);
	app.contactLV = new app.ContactListView(myContacts);
});
